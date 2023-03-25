import GoogleMapReact from "google-map-react";
import { useState } from "react";

export const Contact = () => {

    let [location, setLocation] = useState({
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 43.205105,
        lng: 27.910122,
    })

    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: location,
            map,
            title: 'Hello World!'
        });
        return marker;
    }

    return (
        <div class="container my-5" style={{ paddingTop: "100px" }}>
            <div class="row">
                <div className="col-12" style={{ height: "400px", marginBottom: "50px" }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: '' }}
                        defaultCenter={location}
                        defaultZoom={14}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                    >
                    </GoogleMapReact>
                </div>
                <div class="col-md-8">
                    <h1>Contact Us</h1>
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="col-md-4">
                    <h2>Contact Information</h2>
                    <p>123 Main Street</p>
                    <p>Anytown, USA 12345</p>
                    <p><a href="tel:123-456-7890">123-456-7890</a></p>
                    <p><a href="mailto:info@company.com">info@company.com</a></p>
                </div>
            </div>
        </div>
    );
}