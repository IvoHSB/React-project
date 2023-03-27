import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNumOfPages, setProjectsOnPage, setCurrPage } from "../../store/project/project";
import { getProjectsNumPages, getProjectsPage } from '../../services/projectService';
import { Pagination } from "./Pgination";

export const Projects = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let [isLoadingProjects, changeIsLoadingProjects] = useState(false);

    let pages = useSelector((state) => state.project.pages);
    let currPage = useSelector((state) => state.project.currPage);
    let projects = useSelector((state) => state.project.projectOnPage);
    let userId = useSelector((state) => state.user._id);

    useEffect(() => {
        getProjectsNumPages()
            .then(function (resp) {
                if (Number(resp) < 6) {
                    dispatch(setNumOfPages(1));
                } else {
                    dispatch(setNumOfPages(((Number(resp) - (Number(resp) % 6)) / 6) + 1));
                }
            })
        dispatch(setCurrPage(1));
    }, []);

    useEffect(() => {
        changeIsLoadingProjects(true);
        getProjectsPage(currPage)
            .then(function (resp) {
                if (!resp.code) {
                    dispatch(setProjectsOnPage(resp))
                }
                changeIsLoadingProjects(false);
            })
    }, [currPage]);

    const beTheFirst = () => {
        if (userId) {
            navigate('/add-project');
        } else {
            navigate('/login');
        }
    }

    return (
        <>
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">All projects</h2>
                        <h3 className="section-subheading text-muted">See for good Project</h3>
                    </div>
                    {isLoadingProjects ?
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> :
                        <>
                            {projects && projects.length ?
                                <div className="row">
                                    {projects !== [] && projects.map(project =>
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
                                                    <div className="portfolio-caption-subheading text-muted">{project.category !== 'Other' ? project.category : project.otherCategory}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                :
                                <div style={{ textAlign: "center" }}>
                                    <h2 className="section-heading text-uppercase">There are no projects</h2>
                                    <button type="button" className="btn btn-primary" onClick={beTheFirst}>Be the first</button>
                                </div>
                            }
                        </>
                    }

                </div>
            </section>
            {pages > 1 &&
                <div style={{ textAlign: 'center' }}>
                    <Pagination />
                </div>
            }
        </>
    );
}