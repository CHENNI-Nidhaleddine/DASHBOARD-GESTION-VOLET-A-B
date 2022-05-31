import React, { Fragment ,BaseComponent} from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const customMarker = new L.icon({
    iconUrl: '/images/poemEditorTools/location-pointer-new.svg',
    iconSize: [56, 72],
    iconAnchor: [26, 72],
}); 

const MyPopupMarker = ({ content, position }) => (
    <Marker position={position} icon={customMarker} >
      <Popup>{content}</Popup>
    </Marker>
)

const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
    ))
    return <Fragment>{items}</Fragment>
}

const markers = [
    { key: 'marker1', position: [51.5, -0.1], content: 'My first popup' },
    { key: 'marker2', position: [51.51, -0.1], content: 'My second popup' },
    { key: 'marker3', position: [51.49, -0.05], content: 'My third popup' },
]

class MapWithPoems extends BaseComponent {
    render() {
        return (
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "500px", width: "100%" }} >
                <TileLayer
                    url={
                        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                    }
                />
                <MyMarkersList markers={markers} />
            </MapContainer>
        );
    }
}
export default MapWithPoems

