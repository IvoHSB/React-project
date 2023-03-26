import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import { getProject, editProject } from '../../services/projectService';
import { setProjectData } from '../../store/project/project';
import { useState } from 'react';

export const EditProject = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let [errorMessage, setErrorMessage] = useState(null);
    let [haveError, setHaveError] = useState(false);

    let accessToken = useSelector((state) => state.user.accessToken);
    let username = useSelector((state) => state.user.username);

    let allTechnology = ["HTML", "CSS", "JavaScript", "React", "Java", "Python", "C++", "C#", "PHP", "Git", "Angular", "Vue", "SQL", "NoSQL", "Bootstrap", "MongoDB", "NodeJS", "jQuery"];
    let availableTechnology = [];

    const projectId = location.pathname.split('/edit-project/').join('');

    useEffect(() => {
        getProject(projectId)
            .then(function (resp) {
                dispatch(setProjectData(resp));
            });
    }, []);

    let technologys = useSelector((state) => state.project.allTechnology);
    let category = useSelector((state) => state.project.category);
    let title = useSelector((state) => state.project.title);
    let description = useSelector((state) => state.project.description);
    let photo = useSelector((state) => state.project.photo);
    let otherCategory = useSelector((state) => state.project.otherCategory);
    let webSite = useSelector((state) => state.project.webSite);

    const onSubmit = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        Object.keys(data).map(function (key) {
            if (key.startsWith('technology')) {
                availableTechnology.push(key.split('technology').join(''));
            }
        });

        if (!data.photo.startsWith('http://') && !data.photo.startsWith('https://') && data.photo != '') {
            setErrorMessage('Photo need strat with http:// or https:// !')
            setHaveError(true);
        }else if (data.title.trim().length < 3) {
            setErrorMessage('Min project title length is 3 characters');
            setHaveError(true);
        } else if (!data.webSite.startsWith('http://') && !data.webSite.startsWith('https://') && data.webSite != '') {
            setErrorMessage('Web site need strat with http:// or https:// !');
            setHaveError(true);
        } else {
            data.allTechnology = availableTechnology;
            data.owner = username;

            editProject(data, accessToken, projectId)
                .then(function (resp) {
                    dispatch(setProjectData(resp));
                    navigate(`/projects/${resp._id}`);
                });
        }

    }

    const isHaveTechnology = (technology) => {
        if (technologys) {
            if (technologys.includes(technology)) {
                return true;
            }
        }
        return false;
    }

    const otherCategoryfunc = (value) => {
        dispatch(setProjectData({ category: value }));
    }

    return (
        <div className="container" style={{ marginTop: "170px", marginBottom: "167px" }}>
            {haveError &&
                <div className="card" style={{ position: "fixed", marginLeft: "68%" }}>
                    <div className="card-body">
                        <h5 className="card-title">{errorMessage}</h5>
                    </div>
                </div>
            }
            <h1 className="text-center my-5">Add Project</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="inputPhoto" className="form-label">Photo</label>
                            <input type="text" className="form-control" id="inputPhoto" name="photo" defaultValue={photo} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputProjectTitle" className="form-label">Project title</label>
                            <input type="text" className="form-control" id="inputProjectTitle" name="title" defaultValue={title} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputProjectCategory" className="form-label">Project category</label>
                            <select type="text" className="form-control" id="inputProjectCategory" name="category" defaultValue={category} onChange={(event) => otherCategoryfunc(event.target.value)}>
                                <option disabled value="chooseOption">Choose category</option>
                                <option value="Web-Dev">Web Development</option>
                                <option value="Front-End">Front-end</option>
                                <option value="Back-End">Back-end</option>
                                <option value="Full-Stack">Full stack</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {category == 'Other' &&
                            <div className="mb-3">
                                <label htmlFor="inputOtherCategory" className="form-label">Other category</label>
                                <input type="text" className="form-control" id="inputOtherCategory" name="otherCategory" defaultValue={otherCategory} required />
                            </div>
                        }
                        <div className="mb-3">
                            <label htmlFor="textareaDescription" className="form-label">Description</label>
                            <textarea className="form-control" id="textareaDescription" name="description" defaultValue={description} rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputWebSite" className="form-label">Web site</label>
                            <input type="text" className="form-control" id="inputWebSite" name="webSite" defaultValue={webSite} />
                        </div>
                        <div className="mb-3">
                            <p><b>Select Project Technology</b></p>
                            {allTechnology.map((technology) => (
                                <span key={technology}>
                                    {isHaveTechnology(technology) &&
                                        <>
                                            <input type="checkbox" className="btn-check" name={`technology${technology}`} id={`btnCheck${technology}`} defaultChecked autoComplete="off" />
                                            <label className="btn btn-primary" htmlFor={`btnCheck${technology}`}>{technology}</label>
                                        </>
                                    }
                                    {!isHaveTechnology(technology) &&
                                        <>
                                            <input type="checkbox" className="btn-check" name={`technology${technology}`} id={`btnCheck${technology}`} autoComplete="off" />
                                            <label className="btn btn-primary" htmlFor={`btnCheck${technology}`}>{technology}</label>
                                        </>
                                    }
                                </span>
                            ))}
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}