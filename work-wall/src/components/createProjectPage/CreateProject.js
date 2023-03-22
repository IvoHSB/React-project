import { useDispatch, useSelector } from 'react-redux';
import { setProjectData } from '../../store/project/project';
import { setProject } from '../../services/projectService';
import { useNavigate } from 'react-router-dom';

export const CreateProject = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const accessToken = useSelector((state) => state.user.accessToken);
    const username = useSelector((state) => state.user.username);
    const category = useSelector((state) => state.project.category);

    let allTechnology = ["HTML", "CSS", "JavaScript", "React", "Java", "Python", "C++", "C#", "PHP", "Git", "Angular", "Vue", "SQL", "NoSQL", "Bootstrap", "MongoDB", "NodeJS", "jQuery"];

    const onSubmit = (e) => {
        e.preventDefault();

        let availableTechnology = [];

        const data = Object.fromEntries(new FormData(e.target));

        Object.keys(data).map(function (key) {
            if (key.startsWith('technology')) {
                availableTechnology.push(key.split('technology').join(''));
            }
        });

        data.allTechnology = availableTechnology;
        data.owner = username;

        setProject(data, accessToken)
        .then(function (resp) {
            dispatch(setProjectData(resp));
            navigate(`/projects/${resp._id}`);
        });

    }

    const otherCategory = (value) => {
        console.log(value)
        dispatch(setProjectData({ category: value }));
    }

    return (
        <div className="container" style={{ marginTop: "170px", marginBottom: "167px" }}>
            <h1 className="text-center my-5">Add Project</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="inputPhoto" className="form-label">Photo</label>
                            <input type="text" className="form-control" id="inputPhoto" name="photo" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputProjectTitle" className="form-label">Project title</label>
                            <input type="text" className="form-control" id="inputProjectTitle" name="projectTitle" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputProjectCategory" className="form-label">Project category</label>
                            <select type="text" className="form-control" id="inputProjectCategory" name="projectCategory" defaultValue={category} onChange={(event) => otherCategory(event.target.value)}>
                                <option disabled value="chooseOption">Choose category</option>
                                <option value="webDev">Web Development</option>
                                <option value="frondEnd">Frond-end</option>
                                <option value="backEnd">Back-end</option>
                                <option value="fullStack">Full stack</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        {category == 'other' &&
                            <div className="mb-3">
                                <label htmlFor="inputOtherCategory" className="form-label">Other category</label>
                                <input type="text" className="form-control" id="inputOtherCategory" name="otherCategory" required />
                            </div>
                        }
                        <div className="mb-3">
                            <label htmlFor="textareaDescription" className="form-label">Description</label>
                            <textarea className="form-control" id="textareaDescription" name="description" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputWebSite" className="form-label">Web site</label>
                            <input type="text" className="form-control" id="inputWebSite" name="webSite" required />
                        </div>
                        <div className="mb-3">
                            <p><b>Select Project Technology</b></p>
                            {allTechnology.map((technology) => (
                                <span key={technology}>
                                    {false &&
                                        <>
                                            <input type="checkbox" className="btn-check" name={`technology${technology}`} id={`btnCheck${technology}`} defaultChecked autoComplete="off" />
                                            <label className="btn btn-primary" htmlFor={`btnCheck${technology}`}>{technology}</label>
                                        </>
                                    }
                                    {true &&
                                        <>
                                            <input type="checkbox" className="btn-check" name={`technology${technology}`} id={`btnCheck${technology}`} autoComplete="off" />
                                            <label className="btn btn-primary" htmlFor={`btnCheck${technology}`}>{technology}</label>
                                        </>
                                    }
                                </span>
                            ))}
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Post project</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}