import { Link } from "react-router-dom";

import { Masthead } from "./Masthead";
import { Services } from "./Services";

export const HomePage = () => {
    return (
        <>
            <Masthead />
            <Services />
            <div className="text-center">
            <Link className="btn btn-primary btn-xl text-uppercase" to="/projects">See projects</Link>
            </div>
            <div className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-sm-6 my-3">
                           <img className="img-fluid img-brand d-block mx-auto" src="img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" />
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid img-brand d-block mx-auto" src="img/logos/google.svg" alt="..." aria-label="Google Logo" />
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid img-brand d-block mx-auto" src="img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" />
                        </div>
                        <div className="col-md-3 col-sm-6 my-3">
                            <img className="img-fluid img-brand d-block mx-auto" src="img/logos/ibm.svg" alt="..." aria-label="IBM Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}