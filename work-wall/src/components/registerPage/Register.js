import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/authService";

export const Register = () => {
    let [errorMessage, setErrorMessage] = useState(null);
    let [haveError, setHaveError] = useState(false);

    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        let regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        const {
            username,
            email,
            password,
            confirmPassword
        } = Object.fromEntries(new FormData(e.target));

        if (password !== confirmPassword) {
            setHaveError(true);
            setErrorMessage("Passwords not match!");
        } else if (password.length < 9) {
            setHaveError(true);
            setErrorMessage("Passwords must be minimum 9 characters!");
        } else if (!regx.test(email)) {
            setHaveError(true);
            setErrorMessage("Email invalid!");
        } else if (username.length < 3) {
            setHaveError(true);
            setErrorMessage("Username must be minimum 3 characters!");
        } else {
            setHaveError(false);
            let resp = register(email, password)
            .then(function(resp) {
                if (resp.message) {
                    setHaveError(true);
                    setErrorMessage(resp.message + '!');
                } else {
                    console.log(resp);
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
            <div className="container" style={{ marginTop: "170px", marginBottom: "167px" }}>
                <h1 className="text-center my-5">Create an Account</h1>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="inputUsername" className="form-label">Username</label>
                                <input type="text" className="form-control" id="inputUsername" name="username" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="inputEmail" name="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword" name="password" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="inputConfirmPassword" name="confirmPassword" required />
                            </div>
                            <div className="mb-3">
                                <p><b>If you already have account click <Link to="/login">here to login</Link>!</b></p>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}