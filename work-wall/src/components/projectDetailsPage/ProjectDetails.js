import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, } from "react-router-dom";
import { getProject, getProjectsByCategory, deleteProject } from '../../services/projectService';
import { setProjectData, setSimilarProjects } from '../../store/project/project';
import { getProfileByUserId } from '../../services/userService';
import { getComments } from '../../services/commentService';
import { setComments, clearProjectData } from '../../store/project/project';

import { SimilarProjects } from './SimilarProjects';
import { CommentsSection } from './CommentsSection';

export const ProjectDetails = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    let [confirmDelet, setConfirmDelete] = useState(false);

    let currUserId = useSelector((state) => state.user._id);
    let accessToken = useSelector((state) => state.user.accessToken);

    const projectId = location.pathname.split('/projects/').join('');

    useEffect(() => {
        getProject(projectId)
            .then(function (resp) {
                dispatch(setProjectData(resp));
                getProjectsByCategory(resp['category'])
                    .then(function (respProjects) {
                        let deleteCount = 0;
                        respProjects.map(function (item) {
                            if (item._id == resp._id && !deleteCount) {
                                deleteCount++;
                                return respProjects.splice(respProjects.indexOf(item), 1);
                            }
                            return item
                        })
                        let similarProjects = [respProjects[0], respProjects[1], respProjects[2]];
                        dispatch(setSimilarProjects(similarProjects));
                        getComments(projectId)
                            .then(function (resp) {
                                dispatch(setComments(resp));
                            }
                            )
                    })
            });
    }, [projectId]);

    let photo = useSelector((state) => state.project.photo);
    let title = useSelector((state) => state.project.title);
    let description = useSelector((state) => state.project.description);
    let category = useSelector((state) => state.project.category);
    let otherCategory = useSelector((state) => state.project.otherCategory);
    let webSite = useSelector((state) => state.project.webSite);
    let allTechnology = useSelector((state) => state.project.allTechnology);
    let _ownerId = useSelector((state) => state.project._ownerId);
    let owner = useSelector((state) => state.project.owner);


    const visitAuthor = () => {
        getProfileByUserId(_ownerId)
            .then((resp) => navigate(`/profile/${resp[0]['_id']}`))
    }

    const editProject = () => {
        navigate(`/edit-project/${projectId}`);
    }

    const deletePost = () => {
        setConfirmDelete(true);
    }

    const confirmDelete = () => {
        deleteProject(projectId, accessToken)
            .then(function (resp) {
                if (resp["_deletedOn"]) {
                    clearProjectData();
                    navigate('/projects');
                    setConfirmDelete(false);
                }
            })
    }

    const notConfirm = () => {
        setConfirmDelete(false);
    }

    return (
        <>
            {confirmDelet ?
                <>
                    <div style={{ height: "100%", width: "100%", position: "fixed", backgroundColor: "black", opacity: "0.5", zIndex: "1" }}>
                    </div>
                    <div className="card-body text-center" style={{ backgroundColor: "white", position: "fixed", marginTop: "19%", height: "20%", width: "100%", zIndex: "2" }}>
                        <h5 className="card-title">Are you sure you want to delete this project?</h5>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}>
                            <div><button type="button" className="btn btn-primary" onClick={confirmDelete} style={{ float: "left" }}>Yes</button></div>
                            <div><button type="button" className="btn btn-primary" onClick={notConfirm} style={{ float: "left" }}>No</button></div>
                        </div>
                    </div>
                </>
                :
                null
            }
            <div className="container my-5" style={{ paddingTop: "100px" }}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={photo} className="img-fluid rounded mb-3" alt="Project Image" />
                    </div>
                    <div className="col-md-6">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <ul className="list-group mb-3">
                            <li className="list-group-item" onClick={visitAuthor} style={{ cursor: 'pointer' }}><strong>Author:</strong> {owner}</li>
                            <li className="list-group-item"><strong>Category:</strong> {category != 'Other' ? category : otherCategory}</li>
                            <li className="list-group-item"><strong>Technology:</strong> {allTechnology && allTechnology.join(', ')}</li>
                            {webSite && <li className="list-group-item"><strong>Web site:</strong> {webSite}</li>}
                        </ul>
                        {currUserId == _ownerId && currUserId &&
                            <>
                                <button type="button" className="btn btn-primary" onClick={editProject}>Edit details</button>
                                <button type="button" className="btn btn-primary" onClick={deletePost}>Delete Project</button>
                            </>
                        }
                    </div>
                </div>
            </div>
            <CommentsSection />
            <SimilarProjects />
        </>
    );
}