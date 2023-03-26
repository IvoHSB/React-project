import { Link } from "react-router-dom";

import { Masthead } from "./Masthead";
import { Benefits } from "./Benefits";

export const HomePage = () => {
    return (
        <>
            <Masthead />
            <Benefits />
            <div className="text-center">
            <Link className="btn btn-primary btn-xl text-uppercase" to="/projects">See projects</Link>
            </div>
            {/* <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="..." />
                                <h4>Parveen Anand</h4>
                                <p className="text-muted">Lead Designer</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt="..." />
                                <h4>Diana Petersen</h4>
                                <p className="text-muted">Lead Marketer</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt="..." />
                                <h4>Larry Parker</h4>
                                <p className="text-muted">Lead Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section> */}
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