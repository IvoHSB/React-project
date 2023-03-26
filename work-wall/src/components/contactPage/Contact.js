import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setContactUsMessage } from "../../services/contactUsService";

import { Map } from "./Map"

export const Contact = () => {
    const navigate = useNavigate();

    let [errorMessage, setErrorMessage] = useState(null);
    let [haveError, setHaveError] = useState(false);

    let [successSend, setSuccessSend] = useState(false);

    let regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            name,
            email,
            message
        } = Object.fromEntries(new FormData(e.target));

        if (name.trim().length < 3) {
            setHaveError(true);
            setErrorMessage("Name length min 3 characters!");
        } else if (!regx.test(email)) {
            console.log(email)
            setHaveError(true);
            setErrorMessage("Email is not valid!");
        } else if (message.length < 15) {
            setHaveError(true);
            setErrorMessage("Message content min 15 characters!");
        } else {
            setHaveError(false);
            setContactUsMessage({ name, email, message })
                .then(function (resp) {
                    if (resp._id) {
                        setSuccessSend(true);
                        setTimeout(() => {
                            navigate('/');
                        }, 5000);
                    }
                })
        }
    }

    return (
        <>
            {successSend &&
                <>
                    <div style={{ height: "100%", width: "100%", position: "fixed", backgroundColor: "black", opacity: "0.5", zIndex: "2" }}>
                    </div>
                    <div className="card-body text-center" style={{ backgroundColor: "white", position: "fixed", marginTop: "19%", height: "auto", width: "100%", zIndex: "3" }}>
                        <h5 className="card-title">You send message successfull. You will redirect to home page after 5 seconds!</h5>
                    </div>
                </>
            }
            <div className="container my-5" style={{ paddingTop: "100px" }}>
                <div className="row">
                    <Map />
                    <div className="col-md-8">
                        <h1>Contact Us</h1>
                        {haveError &&
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{errorMessage}</h5>
                                </div>
                            </div>
                        }
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ marginTop: "5px" }}>Send</button>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <h2>Contact Information</h2>
                        <p><strong>Addres:</strong> bul. "Hristo Botev"</p>
                        <p><strong>City:</strong> Varna, 9000</p>
                        <p><strong>Country:</strong> Bulgaria</p>
                        <p><strong>Phone:</strong> <a href="tel:088 111 3333">088 111 3333</a></p>
                        <p><strong>Email:</strong> <a href="mailto:info@company.com">info@company.com</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}