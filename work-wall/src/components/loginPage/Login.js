import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="container" style={{marginTop: '250px', marginBottom: '259px'}}>
            <h1 className="text-center my-5">Log In</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form action="#" method="POST">
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
    );
}