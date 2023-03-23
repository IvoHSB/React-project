import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNumOfPages, setProjectsOnPage } from "../../store/project/project";
import { getProjectsNumPages, getProjectsPage } from '../../services/projectService';

export const Projects = () => {
    const dispatch = useDispatch();

    let pages = useSelector((state) => state.project.pages);
    let projects = useSelector((state) => state.project.projectOnPage)

    useEffect(() => {
        getProjectsNumPages()
            .then(function (resp) {
                if (Number(resp) < 6) {
                    dispatch(setNumOfPages(1));
                } else {
                    dispatch(setNumOfPages((Number(resp) - (Number(resp) % 6)) / 6));
                }
            })
        getProjectsPage(1)
            .then(function (resp) {
                dispatch(setProjectsOnPage(resp))
            })
    }, []);

    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">All projects</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {projects && projects.map(project =>
                        <div key={project._id} className="col-lg-4 col-sm-6 mb-4">
                            <div className="portfolio-item">
                                <Link className="portfolio-link" data-bs-toggle="modal" to={`/projects/${project._id}`}>
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img className="img-fluid" src={project.photo} alt="..." />
                                </Link>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">{project.title}</div>
                                    <div className="portfolio-caption-subheading text-muted">{project.category !== 'other' ? project.category : project.otherCategory}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}