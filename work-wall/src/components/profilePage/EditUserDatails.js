import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDetailedData } from '../../store/user/user';
import { setDetails, editDetails } from "../../services/userService";


export const EditUserDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let allSkills = ["HTML", "CSS", "JavaScript", "React", "Java", "Python", "C++", "C#", "PHP", "Git", "Angular", "Vue", "SQL", "NoSQL", "Bootstrap", "MongoDB", "NodeJS", "jQuery"];
    let availableSkils = [];

    const accessToken = useSelector((state) => state.user.accessToken);
    const _id = useSelector((state) => state.user._id);
    const methodForChangeDetails = useSelector((state) => state.user.methodForChangeDetails);
    const detailsId = useSelector((state) => state.user.detailsId);
    const photo = useSelector((state) => state.user.photo);
    const phoneNumber = useSelector((state) => state.user.phoneNumber);
    const webSite = useSelector((state) => state.user.webSite);
    const aboutYou = useSelector((state) => state.user.aboutYou);
    const skills = useSelector((state) => state.user.skills);
    const otherSkill = useSelector((state) => state.user.otherSkill);


    const onSubmit = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target));

        Object.keys(data).map(function (key) {
            if (key.startsWith('skill')) {
                availableSkils.push(key.split('skill').join(''));
            }
        });

        data.allSkill = availableSkils;

        if (methodForChangeDetails === "POST") {
            setDetails(data, accessToken)
                .then(function (resp) {
                    console.log(resp);
                    dispatch(setDetailedData(resp));
                    navigate(`/profile/${_id}`);
                });
        } else if (methodForChangeDetails === "PUT") {
            editDetails(data, accessToken, detailsId)
                .then(function (resp) {
                    console.log(resp);
                    dispatch(setDetailedData(resp));
                    navigate(`/profile/${_id}`);
                });
        }

    }

    const isHaveSkill = (skill) => {
        if (skills) {
            if (skills.includes(skill)) {
                return true;
            }
        }
        return false;
    }

    return (
        <div className="container" style={{ marginTop: "170px", marginBottom: "167px" }}>
            <h1 className="text-center my-5">Enter details</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="inputPhoto" className="form-label">Photo</label>
                            <input type="text" className="form-control" id="inputPhoto" name="photo" defaultValue={photo} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="inputPhoneNumber" name="phoneNumber" defaultValue={phoneNumber} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputWebSite" className="form-label">Web Site</label>
                            <input type="text" className="form-control" id="inputWebSite" name="webSite" defaultValue={webSite} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="textareaAboutYou" className="form-label">About you</label>
                            <textarea className="form-control" id="textareaAboutYou" name="aboutYou" rows="3" defaultValue={aboutYou}></textarea>
                        </div>
                        <div className="mb-3">
                            <p><b>Select Your Skills</b></p>
                            {allSkills.map((skill) => (
                                <span key={skill}>
                                    {isHaveSkill(skill) &&
                                        <>
                                            <input type="checkbox" className="btn-check" name={`skill${skill}`} id={`btnCheck${skill}`} defaultChecked autoComplete="off" />
                                            <label className="btn btn-primary" htmlFor={`btnCheck${skill}`}>{skill}</label>
                                        </>
                                    }
                                    {!isHaveSkill(skill) &&
                                        <>
                                            <input type="checkbox" className="btn-check" name={`skill${skill}`} id={`btnCheck${skill}`} autoComplete="off" />
                                            <label className="btn btn-primary" htmlFor={`btnCheck${skill}`}>{skill}</label>
                                        </>
                                    }
                                </span>
                            ))}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputOtherSkill" className="form-label">Other Skill</label>
                            <input type="text" className="form-control" id="inputOtherSkill" name="otherSkill" defaultValue={otherSkill}/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Continued</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}