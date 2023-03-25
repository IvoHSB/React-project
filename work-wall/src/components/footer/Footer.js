import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer py-4" style={{ backgroundColor: 'black', color: 'white' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-lg-start">Copyright &copy; Your Website 2022</div>
                    <div className=" col-lg-6 text-lg-end">
                        <Link className="text-decoration-none me-3" to="/contact">Contact Us</Link>
                        <Link className="text-decoration-none" to="/about">About</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}