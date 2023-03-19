import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <img src="https://dummyimage.com/200x200/000/fff" alt="Error" className="mb-3" />
                <h1 className="mb-3">Oops! Page not found</h1>
                <p className="mb-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to="/" className="btn btn-primary">Go back to homepage</Link>
            </div>
        </div>
    );
}