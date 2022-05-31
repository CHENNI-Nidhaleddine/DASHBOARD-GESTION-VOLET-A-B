import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import 'swiper/css';
import Map, { Marker, Popup } from "react-map-gl";
import 'leaflet/dist/leaflet.css'
import React, { useRef, useEffect, useState } from 'react';
import axios from "axios"
// import { get } from "../../back/routes/employee";


function App() {
 
  const myStorage = window.localStorage;
  const [loading, setLoading] = React.useState(true);
  const [userConnected,setUserConnected]=React.useState(null)
  
  const [staticCircuits,setStaticCircuits]=useState(null)


    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    

  return (
   
    <BrowserRouter>
    <div className="App w-screen h-screen "> 
      <Layout  staticCircuits={staticCircuits} setStaticCircuits={setStaticCircuits} userConnected={userConnected} mapContainer={mapContainer} myStorage={myStorage}  setUserConnected={setUserConnected}  />
     
 </div>
   </BrowserRouter>

  );
}

export default App;
