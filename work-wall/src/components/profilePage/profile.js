export const Profile = () => {
    return (
        <main className="container mt-5" style={{paddingTop: "100px"}}>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/300x300" alt="Profile Picture" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Web Developer</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, nisi vel aliquam tristique, nulla leo bibendum nunc, at pulvinar arcu enim non lectus.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Email:</strong> john.doe@gmail.com</li>
                            <li className="list-group-item"><strong>Phone:</strong> (555) 555-5555</li>
                            <li className="list-group-item"><strong>Website:</strong> www.johndoe.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">About Me</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, nisi vel aliquam tristique, nulla leo bibendum nunc, at pulvinar arcu enim non lectus. Nunc bibendum laoreet ex, non volutpat dolor. Duis sed massa sit amet felis accumsan efficitur. Vivamus porta mollis magna et blandit. Aliquam ornare urna turpis, eget aliquet justo mattis at. Ut sed ligula vitae lorem rutrum posuere.</p>
                        </div>
                    </div>
                    <div className="card mt-3"></div>
                    <div className="card-body">
                        <h5 className="card-title">Skills</h5>
                        <ul className="list-group">
                            <li className="list-group-item">HTML</li>
                            <li className="list-group-item">CSS</li>
                            <li className="list-group-item">JavaScript</li>
                            <li className="list-group-item">Bootstrap</li>
                            <li className="list-group-item">jQuery</li>
                            <li className="list-group-item">PHP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}