import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { useDispatch } from 'react-redux';
import { setBasedata, setDetailedData } from '../../store/user/user';
import { getProfileByUserId } from "../../services/userService";

export const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let [errorMessage, setErrorMessage] = useState(null);
    let [haveError, setHaveError] = useState(false);

    let regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password
        } = Object.fromEntries(new FormData(e.target));

        if (password.length < 9) {
            setHaveError(true);
            setErrorMessage("Login or password don't match!");
        } else if (!regx.test(email)) {
            setHaveError(true);
            setErrorMessage("Login or password don't match!");
        } else {
            setHaveError(false);
            login(email, password)
                .then(function (resp) {
                    if (resp.message) {
                        setHaveError(true);
                        setErrorMessage(resp.message + '!');
                    } else {
                        dispatch(setBasedata({
                            username: resp['username'],
                            email: resp['email'],
                            _id: resp['_id'],
                            accessToken: resp['accessToken']
                        }));
                        getProfileByUserId(resp['_id'])
                            .then(function (profileResp) {
                                dispatch(setDetailedData(profileResp[0]))
                            })
                        navigate('/')
                    }
                })
        }

    }

    return (
        <>
            {haveError &&
                <div className="card" style={{ position: "fixed", marginLeft: "78%" }}>
                    <div className="card-body">
                        <h5 className="card-title">{errorMessage}</h5>
                    </div>
                </div>}
            <div className="container" style={{ marginTop: '250px', marginBottom: '259px' }}>
                <h1 className="text-center my-5">Log In</h1>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="inputEmail" name="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword" name="password" required />
                            </div>
                            <div className="mb-3">
                                <p><b>If you don't have account click <Link to="/register">here to register</Link>!</b></p>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}