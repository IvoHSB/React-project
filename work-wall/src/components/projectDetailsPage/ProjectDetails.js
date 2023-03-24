import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { getProject, getProjectsByCategory } from '../../services/projectService';
import { setProjectData, setSimilarProjects } from '../../store/project/project';
import { getProfileByUserId } from '../../services/userService';

import { SimilarProjects } from './SimilarProjects';

export const ProjectDetails = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    let currUserId = useSelector((state) => state.user._id);


    const projectId = location.pathname.split('/projects/').join('');

    useEffect(() => {
        getProject(projectId)
            .then(function (resp) {
                dispatch(setProjectData(resp));
                getProjectsByCategory(resp['category'])
                    .then(function (respProjects) {
                        let deleteCount = 0;
                        respProjects.map(function (item) {
                            console.log(item._id, resp._id, item._id == resp._id)
                            if (item._id == resp._id && !deleteCount) {
                                deleteCount++;
                                return respProjects.splice(respProjects.indexOf(item), 1);
                            }
                            return item
                        })
                        let similarProjects = [respProjects[0], respProjects[1], respProjects[2]];
                        dispatch(setSimilarProjects(similarProjects));
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
    let _id = useSelector((state) => state.project._id);
    let _ownerId = useSelector((state) => state.project._ownerId);
    let owner = useSelector((state) => state.project.owner);
    let similarProjects = useSelector((state) => state.project.similarProjects);

    const visitAuthor = () => {
        getProfileByUserId(_ownerId)
            .then((resp) => navigate(`/profile/${resp[0]['_id']}`))
    }

    const editProject = () => {
        navigate(`/edit-project/${_id}`);
    }


    return (
        <>
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
                        {currUserId == _ownerId && currUserId && <button type="button" className="btn btn-primary" onClick={editProject}>Edit details</button>}
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <h2>Comments</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">User 1</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at erat imperdiet, faucibus enim eget, tempor orci.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">User 2</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at erat imperdiet, faucibus enim eget, tempor orci.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">User 3</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at erat imperdiet, faucibus enim eget, tempor orci.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {similarProjects &&
                <SimilarProjects />
            }
        </>
    );
}