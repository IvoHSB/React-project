import GoogleMapReact from "google-map-react";

export const Map = () => {

    let location = {
        lat: 43.205105,
        lng: 27.910122,
    }

    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: location,
            map,
        });
        return marker;
    }

    return(
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
    );
}