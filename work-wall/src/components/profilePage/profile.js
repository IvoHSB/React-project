import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { changeMethod } from "../../store/user/user";

export const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const _id = useSelector((state) => state.user._id);

    const username = useSelector((state) => state.user.username);
    const email = useSelector((state) => state.user.email);
    const phone = useSelector((state) => state.user.phoneNumber);
    const webSite = useSelector((state) => state.user.webSite);
    const aboutYou = useSelector((state) => state.user.aboutYou);
    const photo = useSelector((state) => state.user.photo);
    const skills = useSelector((state) => state.user.skills);

    const editUserDetailsPage = () => {
        dispatch(changeMethod("PUT"));
        navigate(`/edit-user-details/${_id}`);
    }

    return (
        <main className="container mt-5" style={{paddingTop: "100px", marginBottom: "200px"}}>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        {photo && <img src={photo} alt="Profile Picture" className="card-img-top" />}
                        {!photo && <img src="https://via.placeholder.com/300x300" alt="Profile Picture" className="card-img-top" />}
                        <div className="card-body">
                            <h5 className="card-title">{username}</h5>
                            <button type="button" style={{float: 'right'}} className="btn btn-primary" onClick={editUserDetailsPage}>change info</button>
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
                        </ul>}
                    </div>
                </div>
            </div>
        </main>
    );
}