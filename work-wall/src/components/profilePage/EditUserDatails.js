export const EditUserDetails = () => {
    return (
        <div className="container" style={{ marginTop: "170px", marginBottom: "167px" }}>
            <h1 className="text-center my-5">Create an Account</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="inputPhoto" className="form-label">Photo</label>
                            <input type="text" className="form-control" id="inputPhoto" name="photo" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="inputPhoneNumber" name="phoneNumber" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputWebSite" className="form-label">Web Site</label>
                            <input type="text" className="form-control" id="inputWebSite" name="webSite" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="textareaAboutYou" className="form-label">About you</label>
                            <textarea className="form-control" id="textareaAboutYou" rows="3"></textarea>
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