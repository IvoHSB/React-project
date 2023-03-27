import { Link } from "react-router-dom";
import { useSelector } from "react-redux";;

export const SimilarProjects = ({ isLoading }) => {

    let similarProjects = useSelector((state) => state.project.similarProjects);

    return (
        <section className="page-section" id="portfolio">
            <div className="container">
                <h2>Similar Projects</h2>
                {isLoading ?
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: "100px" }}>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                    <div className="row">
                        {similarProjects[0] ? similarProjects.map(simProject =>
                            simProject ?
                                <div key={simProject._id} className="col-lg-4 col-sm-6 mb-4">
                                    <div className="portfolio-item">
                                        <Link className="portfolio-link" data-bs-toggle="modal" to={`/projects/${simProject._id}`}>
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                            </div>
                                            <img className="img-fluid" src={simProject.photo} alt="..." />
                                        </Link>
                                        <div className="portfolio-caption bg-light">
                                            <div className="portfolio-caption-heading">{simProject.title}</div>
                                            <div className="portfolio-caption-subheading text-muted">{simProject.category !== 'Other' ? simProject.category : simProject.otherCategory}</div>
                                        </div>
                                    </div>
                                </div>
                                :
                                null
                        ) :
                            <h4 style={{ textAlign: "center", marginTop: "25px" }}>No available similar projects.</h4>
                        }
                    </div>
                }
            </div>
        </section>
    );
}