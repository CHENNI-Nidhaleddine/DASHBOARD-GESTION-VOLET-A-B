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


<h1 className="text-xl font-[#000] opacity-80">Prochainement</h1>
{/* <iframe src="https://giphy.com/embed/7AWi4pj8P0MQU" width="338" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}

    </div>
    )
};
export default  Activite