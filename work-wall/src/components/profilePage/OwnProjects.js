import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const OwnProjects = () => {

    const ownProjects = useSelector((state) => state.profile.ownProjects);

    return (
        <section className="page-section" id="portfolio" style={{ paddingTop: "60px" }}>
            <div className="container" style={{ marginBottom: "-200px" }}>
                <div className="row">
                    {ownProjects.length ? ownProjects.map(ownProject =>
                        <div key={ownProject._id} className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <Link className="portfolio-link" data-bs-toggle="modal" to={`/projects/${ownProject._id}`}>
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={ownProject.photo} alt="..." />
                                </Link>
                                <div className="portfolio-caption bg-light">
                                    <div className="portfolio-caption-heading">{ownProject.title}</div>
                                    <div className="portfolio-caption-subheading text-muted">{ownProject.category !== 'Other' ? ownProject.category : ownProject.otherCategory}</div>
                                </div>
                            </div>
                        </div>
                    ) :
                        <h4 style={{ textAlign: "center" }}>No available projects.</h4>
                    }
                </div>
            </div>
        </section>
    );
}