export const Register = () => {
    return (
        <div className="container" style={{marginTop: "200px", marginBottom: "181px"}}>
            <h1 className="text-center my-5">Create an Account</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form action="#" method="POST">
                        <div className="mb-3">
                            <label htmlFor="inputUsername" className="form-label">Username</label>
                            <input type="text" className="form-control" id="inputUsername" name="Username" required />
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
                            <input type="password" className="form-control" id="inputConfirmPassword" name="confirm-password" required />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}