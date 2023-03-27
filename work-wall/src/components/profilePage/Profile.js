import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { changeMethod } from "../../store/user/user";
import { setProfileData, setOwnProjects } from "../../store/profile/profile";
import { getProfile } from "../../services/userService";
import { getProjectsByOwnerId } from "../../services/projectService";

import { OwnProjects } from "./OwnProjects";

export const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const profileId = location.pathname.split('/profile/').join('');

    let [isLoadingProfile, changeIsLoadingProfile] = useState(false);
    let [isLoadingOwnProjects, changeIsLoadingOwnProjects] = useState(false);

    const _id = useSelector((state) => state.user._id);
    const ownerProfileId = useSelector((state) => state.profile.ownerId);

    useEffect(() => {
        changeIsLoadingProfile(true)
        getProfile(profileId)
            .then(function (resp) {
                if (resp.code) {
                    navigate('/404');
                }
                changeIsLoadingProfile(false);
                dispatch(setProfileData(resp))
                changeIsLoadingOwnProjects(true);
                getProjectsByOwnerId(resp['_ownerId'])
                    .then(function (respProjects) {
                        if (!respProjects.code) {
                            dispatch(setOwnProjects(respProjects));
                        }
                        changeIsLoadingOwnProjects(false);
                    })
            });
    }, [profileId])

    const username = useSelector((state) => state.profile.username);
    const email = useSelector((state) => state.profile.email);
    const phone = useSelector((state) => state.profile.phoneNumber);
    const webSite = useSelector((state) => state.profile.webSite);
    const aboutYou = useSelector((state) => state.profile.aboutYou);
    const photo = useSelector((state) => state.profile.photo);
    const skills = useSelector((state) => state.profile.skills);
    const otherSkill = useSelector((state) => state.profile.otherSkill);

    const ownProjects = useSelector((state) => state.profile.ownProjects);

    const editUserDetailsPage = () => {
        dispatch(changeMethod("PUT"));
        navigate(`/edit-user-details/${_id}`);
    }

    return (
        <main className="container mt-5" style={{ paddingTop: "100px", marginBottom: "20px" }}>
            {isLoadingProfile ?
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                {photo && <img src={photo} alt="Profile Picture" className="card-img-top" />}
                                {!photo && <img src="https://via.placeholder.com/300x300" alt="Profile Picture" className="card-img-top" />}
                                <div className="card-body">
                                    <h5 className="card-title">{username}</h5>
                                    {_id == ownerProfileId && _id && <button type="button" style={{ float: 'right' }} className="btn btn-primary" onClick={editUserDetailsPage}>change info</button>}
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Email:</strong> {email}</li>
                                    {phone && <li className="list-group-item"><strong>Phone:</strong> {phone}</li>}
                                    {webSite && <li className="list-group-item"><strong>Website:</strong> {webSite}</li>}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            {aboutYou &&
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">About Me</h5>
                                        <p className="card-text">{aboutYou}</p>
                                    </div>
                                </div>}
                            <div className="card mt-3"></div>
                            <div className="card-body">
                                <h5 className="card-title">Skills</h5>
                                {skills &&
                                    <ul className="list-group">
                                        {skills.map((skill, index) => <li key={skill + "" + index} className="list-group-item">{skill}</li>)}
                                        {otherSkill && <li className="list-group-item"><b>Other: </b>{otherSkill}</li>}
                                    </ul>}
                            </div>
                        </div>
                    </div>
                    <>
                    <h2 style={{ marginTop: "30px" }} >Projects</h2>
                        {isLoadingOwnProjects ?
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div> :
                            <>
                            {ownProjects ?
                                <OwnProjects /> : null
                            }
                            </>
                        }
                    </>
                </>
            }

        </main>
    );
}