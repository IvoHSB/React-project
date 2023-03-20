import { Link } from "react-router-dom";
import { register } from "../../services/authService";

export const Register = () => {
    let errorMessage = null;
    let haveError = false;

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            username,
            email,
            password,
            confirmPassword
        } = Object.fromEntries(new FormData(e.target));

        if (password !== confirmPassword) {
            haveError = true;
            errorMessage = "Password dismatch";
        }

        let resp = register(email, password)
        .then(response => console.log(response))
        
    }

    return (
        <>
        {haveError && 
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Error</h5>
                    <p className="card-text">{errorMessage}</p>
                </div>
            </div>}
        <div className="container" style={{marginTop: "170px", marginBottom: "167px"}}>
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