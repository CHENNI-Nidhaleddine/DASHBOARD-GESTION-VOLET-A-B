import {useState,useEffect} from "react"
import {GoogleMap,useLoadScript,Marker} from "@react-google-maps/api"
import {FiSearch} from "react-icons/fi"
import {BsPlusLg} from "react-icons/bs"
import {BiFilter} from "react-icons/bi"

function Cartes(){

    const [show,setShow]=useState(false)
    const [viewState, setViewState] = useState({
        longitude: 5.4108,
        latitude: 36.1897,
        zoom: 14
      });
   
      const [center,setCenter]=useState(  [{
        lng:5.4108,
         lat:36.1898
       },
       {
        lng:5.4101,
         lat:35.1898
       }])
    return (
        <div className="relative bg-[#333] w-full h-[calc(100vh-140px)] flex flex-col items-center justify-center mt-[calc(100px)] " >
 
 <GoogleMap zoom={10} center={center[0]} mapContainerClassName="w-full h-full" >

      
    
       <div className="relative w-1/3 ml-48">
           <input type="text" name="" id="" className="absolute top-2 border-2 border-[#c4c4c4] left-5 z-30 outline-none rounded-xl w-full py-2 text-lg pl-3 pr-16" placeholder="Recherche Lieux, Monuments..."/>
           <FiSearch className="absolute right-0 top-4 text-[#c4c4c4] z-50 text-3xl"/>
       </div>
       <button className="absolute flex items-center justify-center  w-fit h-fit top-3 right-48
           font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-2 px-2  mr-2 ml-56 rounded-lg  text-lg">
             <span>Filter</span>
             <BiFilter className="text-3xl ml-1"/>
       </button>
       <button className="absolute flex items-center justify-center  w-fit h-fit top-3 right-16
           font-bold bg-[#2400ff] text-[#fff] border-2 border-[#2400ff] w-fit py-2 px-2  mr-2 ml-56 rounded-lg  text-lg">
             <span>Ajouter</span>
             <BsPlusLg className="text-xl ml-1"/>
       </button>
         
      </GoogleMap>  
  </div>
    )
}
export default Cartes
// import { useNavigate } from 'react-router-dom';

// import React, { useRef, useEffect, useState } from 'react';

// import Map, {FullscreenControl, Marker,ScaleControl} from 'react-map-gl';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'mapbox-gl/dist/mapbox-gl.css';

// // import { MapContainer } from './MapContainer';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import {FiSearch} from "react-icons/fi"
// import {BsPlusLg} from "react-icons/bs"
// import 'swiper/css';
// import StaticCircuits from '../components/StaticCircuits';
// import AutoCircuits from '../components/AutoCircuits';
// import {BiFilter} from "react-icons/bi"
// // import maplibregl from 'maplibre-gl';
// const MAPBOX_TOKEN = 'pk.eyJ1IjoibmlkaGFsY2giLCJhIjoiY2wzaGF0amt5MGU4aTNibnhyb2p2Zmh1dyJ9.yxiGunHG-zwNsWHo917y_Q'; // Set your mapbox token here
// // import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
// // mapboxgl.accessToken = 'pk.eyJ1IjoibmlkaGFsY2giLCJhIjoiY2wzaGF0amt5MGU4aTNibnhyb2p2Zmh1dyJ9.yxiGunHG-zwNsWHo917y_Q'; // Set your mapbox token here


// function Cartes(){
//     const [show,setShow]=React.useState(false)
//     const [viewState, setViewState] = React.useState({
//         longitude: 5.4108,
//         latitude: 36.1897,
//         zoom: 14
//       });
   
//     //   latitude:  36.1898,
//     //   longitude: 5.4108,
//     //   zoom: 14
//     return (
//         <div className="relative bg-[#333] w-full h-[calc(100vh-140px)] flex flex-col items-center justify-center mt-[calc(100px)] " >
 
//         <Map
//            onStyleLoad={(map)=>console.log(map)}
//            onClick={()=>console.log("click")}
          
//            {...viewState}
//            onMove={evt => {setViewState(evt.viewState);}}
//         mapboxAccessToken={MAPBOX_TOKEN}
//          mapStyle="mapbox://styles/mapbox/streets-v9"
             
//       style={{width: '100%', height: '100%'}}
   
    
  
//   >
//        <Marker longitude={viewState.longitude} latitude={viewState.latitude} anchor="center" color="#00f" onClick={()=>setShow(!show)}>
//        {show && <div className=" z-50 absolute  bottom-8 left-5 w-24 h-24 bg-[#fff]">kkkkk</div>}

    
//   </Marker>
//   <Marker longitude={6.4108} latitude={36.1898} anchor="center" color="#00f">
  
    
//   </Marker>
//   <Marker longitude={5.6108} latitude={35.9898} anchor="center" color="#00f">
//       <div className="hover:block hidden z-50 relative w-24 h-24 bg-[#fff]">kkkkk</div>
    
//   </Marker>
//        <div className="relative w-1/3">
//            <input type="text" name="" id="" className="absolute top-5 border-2 border-[#c4c4c4] left-5 z-30 outline-none rounded-xl w-full py-2 text-lg pl-3 pr-16" placeholder="Recherche Lieux, Monuments..."/>
//            <FiSearch className="absolute right-0 top-6 text-[#c4c4c4] z-50 text-3xl"/>
//        </div>
//        <button className="absolute flex items-center justify-center  w-fit h-fit top-5 left-80
//            font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-2 px-2  mr-2 ml-56 rounded-lg  text-lg">
//              <span>Filter</span>
//              <BiFilter className="text-3xl ml-1"/>
//        </button>
//        <button className="absolute flex items-center justify-center  w-fit h-fit top-5 right-10
//            font-bold bg-[#2400ff] text-[#fff] border-2 border-[#2400ff] w-fit py-2 px-2  mr-2 ml-56 rounded-lg  text-lg">
//              <span>Ajouter</span>
//              <BsPlusLg className="text-xl ml-1"/>
//        </button>
//           <FullscreenControl />
//       </Map>  
//   </div>
//     )
// }
// export default Cartes