import { useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { changeMethod } from "../../store/user/user";
import { setProfileData, setOwnProjects } from "../../store/profilePage/profile";
import { getProfile } from "../../services/userService";
import { getProjectsByOwnerId } from "../../services/projectService";

export const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const profileId = location.pathname.split('/profile/').join('');

    const ownerId = useSelector((state) => state.profile.ownerId);
    const _id = useSelector((state) => state.user._id);
    const ownerProfileId = useSelector((state) => state.profile.ownerId);

    useEffect(() => {
        getProfile(profileId)
            .then(function (resp) {
                dispatch(setProfileData(resp))
                getProjectsByOwnerId(resp['_ownerId'])
                    .then(function (respProjects) {
                        dispatch(setOwnProjects(respProjects))
                    })
            });
    }, [])

    const username = useSelector((state) => state.profile.username);
    const email = useSelector((state) => state.profile.email);
    const phone = useSelector((state) => state.profile.phoneNumber);
    const webSite = useSelector((state) => state.profile.webSite);
    const aboutYou = useSelector((state) => state.profile.aboutYou);
    const photo = useSelector((state) => state.profile.photo);
    const skills = useSelector((state) => state.profile.skills);
    const otherSkill = useSelector((state) => state.profile.otherSkill);

    const ownProjects = useSelector((state) => state.profile.ownProjects);

    console.log(ownProjects)

    const editUserDetailsPage = () => {
        dispatch(changeMethod("PUT"));
        navigate(`/edit-user-details/${_id}`);
    }

    return (
        <main className="container mt-5" style={{ paddingTop: "100px", marginBottom: "200px" }}>
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
            <div className="container my-5">
                <h2>Projects</h2>
                <div className="row">
                    <section className="page-section" id="portfolio">
                        <div className="container">
                            {ownProjects && ownProjects.map(ownProject =>
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
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}