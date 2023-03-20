export const ProjectDetails = () => {
    return (
        <>
            <div className="container my-5" style={{ paddingTop: "100px" }}>
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://picsum.photos/500/300" className="img-fluid rounded mb-3" alt="Project Image" />
                    </div>
                    <div className="col-md-6">
                        <h1>Project Title</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at erat imperdiet, faucibus enim eget, tempor orci. Duis euismod suscipit libero in ultricies. Duis elementum, arcu non faucibus luctus, nibh sapien fringilla dui, ac varius felis velit quis enim.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at erat imperdiet, faucibus enim eget, tempor orci. Duis euismod suscipit libero in ultricies. Duis elementum, arcu non faucibus luctus, nibh sapien fringilla dui, ac varius felis velit quis enim.</p>
                        <ul className="list-group mb-3">
                            <li className="list-group-item"><strong>Client:</strong> ABC Company</li>
                            <li className="list-group-item"><strong>Category:</strong> Web Development</li>
                            <li className="list-group-item"><strong>Date:</strong> January 2023</li>
                            <li className="list-group-item"><strong>Skills:</strong> HTML, CSS, JavaScript, Bootstrap</li>
                        </ul>
                        <a href="#" className="btn btn-primary">Visit Website</a>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <h2>Features</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Feature 1</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at erat imperdiet, faucibus enim eget, tempor orci.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Feature 2</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at erat imperdiet, faucibus enim eget, tempor orci.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Feature 3</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at erat imperdiet, faucibus enim eget, tempor orci.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <h2>Screenshots</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://picsum.photos/500/300" className="img-fluid rounded mb-3" alt="Screenshot 1" />
                    </div>
                    <div className="col-md-4">
                        <img src="https://picsum.photos/500/300" className="img-fluid rounded mb-3" alt="Screenshot 2" />
                    </div>
                    <div className="col-md-4">
                        <img src="https://picsum.photos/500/300" className="img-fluid rounded mb-3" alt="Screenshot 3" />
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <h2>Related Projects</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="https://picsum.photos/500/300" className="card-img-top" alt="Related Project 1" />
                            <div className="card-body">
                                <h5 className="card-title">Related Project 1</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at erat imperdiet, faucibus enim eget, tempor orci.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="https://picsum.photos/500/300" className="card-img-top" alt="Related Project 2" />
                            <div className="card-body">
                                <h5 className="card-title">Related Project 2</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at erat imperdiet, faucibus enim eget, tempor orci.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="https://picsum.photos/500/300" className="card-img-top" alt="Related Project 3" />
                            <div className="card-body">
                                <h5 className="card-title">Related Project 3</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at erat imperdiet, faucibus enim eget, tempor orci.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}