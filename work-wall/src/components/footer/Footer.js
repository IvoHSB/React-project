export const Footer = () => {
    return (
        <footer className="footer py-4" style={{ backgroundColor: 'black', color: 'white' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-lg-start">Copyright &copy; Your Website 2022</div>
                    <div className=" col-lg-6 text-lg-end">
                        <a className="text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}