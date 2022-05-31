import React, { useRef, useEffect, useState } from 'react';
import logo from "../assets/logo.png"
import {FaMapMarkerAlt} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {GoogleMap,withScriptjs,withGoogleMap} from "react-google-maps"
import {MapContainer,TileLayer,Marker,Popup} from "react-leaflet"

import usser from "../assets/user.png"
// import {
//   MapContainer,
//   TileLayer,
//   useMap,
// } from 'https://cdn.esm.sh/react-leaflet'

function Activite({mapContainer}){
  const [markers,setMarkers]=React.useState([
    {
      longitude:5.4108,
       latitude:36.1898
     },
     {
      longitude:5.4101,
       latitude:36.1898
     }
  ])
  const mapRef=React.useRef()
  React.useEffect(()=>{

    // setTimeout(() => { 
    //     mapRef.invalidateSize(); 
    // }, 250);
  })
    const navigate = useNavigate();
    const [visible,setVisible]=React.useState(false)
    const [viewport, setViewport] = React.useState({
      longitude:5.4108,
      latitude:36.1898,
    
      zoom: 10
    });
    const [center,setCenter]=React.useState({lat:36.1898,lng:5.4108})
    const [zoom,setZoom]=React.useState(9)
    
    const position = [51.505, -0.09]
    return (
    <div className="relative w-full  flex flex-col items-center justify-center h-[calc(100vh-150px)] mt-[calc(100px)] bg-[@111] " >
        {/* <MapContainer center={[36.1898, 5.4108]} zoom={13}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

</MapContainer> */}
{/* <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN }
        width="100vw"
        height="80vh"
        transitionDuration="200"
        mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
        onViewportChange={(viewport) => setViewport(viewport)}
        // onDblClick={currentUsername && handleAddClick}
      ></ReactMapGL> */}
     <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ width: '100%', height: '600px' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ref={mapRef}
    
    //    { 
    //     const map = this.mapRef.current.leafletElement; 
    //     setTimeout(() => { 
    //         map.invalidateSize(); 
    //     }, 250); 
    // } 
    />
          <Marker position={[36.1898,5.4101]} >
          <FaMapMarkerAlt className="absolute text-[#00f] text-3xl"/>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
      {markers.forEach( (m)=>{
      {console.log(m.longitude)} 
       <Marker position={[m.longitude,m.latitude]} >
            {/* <FaMapMarkerAlt className="absolute text-[#00f] text-3xl"/> */}
            <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    })}
     </MapContainer>
    {/* <MapWithPoems/> */}
    {/* <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}
 
{/* <MapBox/> */}

  {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {/* <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker> */}
{/* </MapContainer>  */}
    </div>
    )
};
export default  Activite