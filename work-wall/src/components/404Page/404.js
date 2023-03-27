import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const NotFound = () => {
    const location = useLocation();
    const navigate = useNavigate();

    let path = location.pathname;

    useEffect(() => {
        if (path !== '/404') {
            navigate('/404')
        }
    }, []);

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{marginTop: "330px", marginBottom: "370px"}}>
            <div className="text-center">
                <h1 className="mb-3">Oops! Page not found</h1>
                <p className="mb-4">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to="/" className="btn btn-primary">Go back to homepage</Link>
            </div>
        </div>
    );
}