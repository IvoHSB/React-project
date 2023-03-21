import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navigation = () => {
    const _id = useSelector((state) => state.user._id)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src="img/navbar-logo.svg" alt="..." /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/projects">All projects</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        {_id && 
                        <><li className="nav-item"><Link className="nav-link" to={`/profile/${_id}`}>Profile</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/logout">logout</Link></li></>
                        }
                        {!_id && 
                        <><li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li></>}
                    </ul>
                </div>
            </div>
        </nav>
    );
}