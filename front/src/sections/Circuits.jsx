import {useState,useEffect} from "react"
import {GoogleMap,useLoadScript,Marker} from "@react-google-maps/api"
import 'swiper/css';
// import StaticCircuits from '../components/StaticCircuits';
import AutoCircuits from '../components/AutoCircuits';
import {BiFilter} from "react-icons/bi"
import { Swiper, SwiperSlide } from 'swiper/react';
import {GrAdd} from "react-icons/gr"
import axios from "axios";
import StaticCircuits from "../components/StaticCircuits";



 

function Circuits(){
  // const [staticCircuits,setStaticCircuits]=useState(null)

  const [staticCircuits,setStaticCircuits]=useState(null)
  const getCircuits=async ()=>{
    const res=await axios.get("/circuits/getAll")
    setStaticCircuits(res.data.Circuits)
    console.log(staticCircuits)
  }
  useEffect(()=>{
    try {
      // console.log("object")
      // const res = await axios.get("/circuits/getAll");
      
      //  setStaticCircuits(res.data.Circuits);
      //  console.log(staticCircuits)
      setInterval(() => {
        getCircuits()
      }, 1000);
      
     
     
    } catch (err) {
      console.log(err.message)
    }
  },[10])
  const [circuits,SetCircuits]=useState([
    {
      id:1,
      place:"Alger",
      type:"attraction",
      duration:"3 jours",
      visitors: 132, 
      markers: [
        {
          lat:36.745219,
          lng:3.062509
        },
        {
          lat:36.748035,
          lng:3.059451
        },
        {
          lat:36.757512,
          lng:3.030289
        },          
      ]
    },
    {
      id:2,
      place:"Tizi Ouzou",
      type:"Culture",
      duration:"2 jours",
      visitors: 65, 
      markers: [
        {
          lat:36.889994,
          lng:4.417120
        },
        {
          lat:36.890818,
          lng:4.403919
        },
        {
          lat:36.890005,
          lng:4.394894
        },          
      ]
    },
    {
      id:3,
      place:"Setif",
      type:"Attractions",
      duration:"5 jours",
      visitors: 13322, 
      markers: [
        {
          lat:36.208852,
          lng:5.396226
        },
        {
          lat:36.209060,
          lng:5.351564
        },
        {
          lat:36.192665,
          lng:5.406637
        },          
      ]
    }

  ])
    const [showStatic,setShowStatic]=useState(true)
    const [number,setNumber]=useState("")
    const [center,setCenter]=useState(  
    //  [ {
    //   lng:5.4108,
    //    lat:36.1898
    //  },
    //  {
    //   lng:5.4101,
    //    lat:35.1898
    //  }
    // ]
     circuits[0].markers
     )
  
  const {isLoaded}=useLoadScript({googleMapsApiKey:"AIzaSyDSUotqEe2hCNPfF1TaJWlVo-3UkzLjTes"})
 
      if (!isLoaded){
          return ( <div>Loading...</div>)
      }else{
   return (
    <div  className="relative bg-[#333] w-full h-[calc(100vh-140px)] flex flex-col items-center justify-center mt-[calc(100px)] " >
      
       
      
      <GoogleMap  zoom={12} center={center[0]} mapContainerClassName="w-full h-full" >
      {
      
      center.map((center,index)=>{return( <Marker key={index} position={center} icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}/>)})}
      
    <div className="absolute flex items-center justify-start  w-fit h-fit top-3 left-52">
               <div className="mb-2  ">
                   <button className={showStatic? "font-bold border-2 w-fit py-1 px-2 text-lg mr-2 bg-[#2400FF] border-[#2400FF] text-[#fff] rounded-lg":"font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-1 px-2  mr-2 rounded-lg  text-lg"} onClick={()=>setShowStatic(!showStatic)}>Statiques</button>
                   <button className={!showStatic? "font-bold border-2 w-fit py-1 px-2 text-lg ml-2 bg-[#2400FF] border-[#2400FF] text-[#fff] rounded-lg":"font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-1 px-2  ml-2 rounded-lg  text-lg"} onClick={()=>setShowStatic(!showStatic)}>Automatiques</button>
               </div>
               
           </div>
           <button className="absolute flex items-center justify-center  w-fit h-fit top-3 right-16
           font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-1 px-2  mr-2 rounded-lg  text-lg">
             <span>Filter</span>
             <BiFilter className="text-3xl ml-1"/>
            </button>
            {!showStatic && <button className="absolute flex items-center justify-center w-fit h-fit top-3 right-48
           font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-1 px-2  mr-2 rounded-lg  text-lg">
             <span>Critères de génération</span>
             <BiFilter className="text-3xl ml-1"/>
            </button>}
           {showStatic? 
          //  <StaticCircuits circuits={circuits} center={center} setCenter={setCenter} />
          <div className="absolute flex items-center justify-start   z-50 w-[calc(97%)]  bottom-5  px-5  " >
          <div className="border-dashed border-4 border-[#2400ff] relative  flex flex-col items-center justify-center bg-gradient-to-b from-[#45b6fe] to-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl">
            <GrAdd className="relative text-5xl text-[#2400ff] bottom-5"/>
            <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Ajouter</button>
          </div>
          <div className="w-5/6 flex justify-start  ">
          <Swiper watchSlidesProgress={true} slidesPerView={4} className="mySwiper "  >
          { staticCircuits && staticCircuits.map((circuit,index)=>{
                return (
                 <SwiperSlide key={circuit.id}
                 
                 onClick={()=>{
                  setCenter(circuit.markers);
                  setNumber(index)
                 }}
                  className= 
                    "relative z-50  mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center"
                  >
                <div className={number==index?
                " border-4 border-[#2400ff] relative flex flex-col items-center justify-left bg-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  "
               :" border-4 border-[#2400ff] opacity-90 relative flex flex-col items-center justify-left bg-gradient-to-b from-[#45b6fe] to-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  "
                }
                >
                   <div className="flex flex-col p-5 self-start">
                   <h1 className="font-bold text-2xl  relative z-50">{circuit.place}</h1>
                   <p className=" text-lg text-[#6B7280]">{circuit.type}</p>
                   <p className=" text-lg text-[#6B7280]">{circuit.duration}</p>
                   <p className=" text-lg text-[#6B7280]">{circuit.visitors} visteurs</p>
                   </div>
                   <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Modifier</button>
                 </div>
                </SwiperSlide>)
          })} 
               <SwiperSlide className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className="  relative flex flex-col items-center justify-left  z-50  w-[calc(200px)] h-[calc(200px)] mx-5   ">
           </div>
       </SwiperSlide>
         </Swiper>
         </div>
         </div>
           :<AutoCircuits/>}
    
           </GoogleMap>

    </div>
    )}
};
export default  Circuits






// import { useNavigate } from 'react-router-dom';
// import React, { useLayoutEffect, useState,Component } from 'react';
// // import Map, {Layer,FullscreenControl, Marker,ScaleControl} from 'react-map-gl';
// import Map, { Marker, Popup } from "react-map-gl";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'mapbox-gl/dist/mapbox-gl.css';
// // import { MapContainer } from './MapContainer';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import {FaMapMarkerAlt} from "react-icons/fa"
// import {GrAdd} from "react-icons/gr"
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import 'swiper/css';
// import StaticCircuits from '../components/StaticCircuits';
// import AutoCircuits from '../components/AutoCircuits';
// import {BiFilter} from "react-icons/bi"

// const MAPBOX_TOKEN = 'pk.eyJ1IjoibmlkaGFsY2giLCJhIjoiY2wzaGF0amt5MGU4aTNibnhyb2p2Zmh1dyJ9.yxiGunHG-zwNsWHo917y_Q'; // Set your mapbox token here




// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 36.1898,
//   lng: 5.4108
// };
// // function useWindowSize() {
// //   const [size, setSize] = useState([0, 0]);
// //   useLayoutEffect(() => {
// //     function updateSize() {
// //       setSize([window.innerWidth, window.innerHeight]);
// //     }
// //     window.addEventListener('resize', updateSize);
// //     updateSize();
// //     return () => window.removeEventListener('resize', updateSize);
// //   }, []);
// //   return size;
// // }

// // function ShowWindowDimensions(props) {
// //   const [width, height] = useWindowSize();
// //   return <span>Window size: {width} x {height}</span>;
// // }
// const parkLayer = {
//   id: 'landuse_park',
//   type: 'fill',
//   source: 'mapbox',
//   'source-layer': 'landuse',
//   filter: ['==', 'class', 'park'],
//   paint: {
//     'fill-color': '#4E3FC8'
//   }
// };

// function Circuits(){
//   const [lat,setLat]=React.useState(36.1898) 
//   const [markers,setMarkers]=React.useState([])
 
//     const navigate = useNavigate();
//     const [showStatic,setShowStatic]=React.useState(true)
//     const [yes,setYes]=React.useState(false)
//     const [visible,setVisible]=React.useState(false)
//     const [viewport, setViewport] = React.useState({
//       latitude: 45.4211,
//       longitude: -75.6903,
    
//       zoom: 10
//     });
//     return (
//     <div  className="relative bg-[#333] w-full h-[calc(100vh-140px)] flex flex-col items-center justify-center mt-[calc(100px)] " >
      
       
      
//        <Map
// transitionDuration="200"
//       mapboxAccessToken={MAPBOX_TOKEN}
//        mapStyle="mapbox://styles/mapbox/streets-v9"
           
//     style={{width: '100%', height: '100%'}}
//     onViewportChange={viewport => {
//       setViewport(viewport);
       
//     }}
//      onStyleLoad={(map)=>map.resize()} 
//    //    onLoad={(map)=>{ 
//    //     map.invalidateSize();
//   //      map.resize()}}
//   //      onLoad={(map)=>map.on('load', () => { */}
//  //     map.resize();
//   // })}
//   //  ngOnInit={(map)=> map.resize()} */}
//     initialViewState={{
       
//         latitude: 36.1898,
//         longitude: 5.4108,
//       zoom: 14
//     }} 
  

  
//    > 
// {/* <Marker longitude={5.4108} latitude={36.1898} anchor="center" color={"#f00"} >
//      <FaMapMarkerAlt className="absolute text-[#00f] text-3xl"/>
    
//     </Marker> */}
//     {/* <Marker longitude={5.4108} latitude={36.1898} anchor="center" color="#00f"> */}
  
    
//     {/* <Layer {...parkLayer} />
   
//       {/* // {setViewport({ */}
//       {/* //   latitude: m.latitude,
//       //   longitude:m.longitude,
//       //   zoom: 10
//       // })} */}
//        {/* <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken={MAPBOX_TOKEN}
//         width="100%"
//         height="100%"
//         transitionDuration="200"
//         mapStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
//         onViewportChange={(viewport) => setViewport(viewport)}
//         // onDblClick={currentUsername && handleAddClick}
//       > */}
//       <div className={yes? "block":"hidden opacity-0"}>
//         <Marker longitude={5.4108} latitude={36.1898} anchor="center" color={"#f00"}  >
//      <FaMapMarkerAlt className={yes? "block":"hidden opacity-0"}/>
    
//     </Marker>
//     <Marker longitude={5.4208} latitude={36.1898} anchor="center" color={"#f00"} >
//      <FaMapMarkerAlt className={yes? "block":"hidden opacity-0"}/>
    
//     </Marker>
//     </div>
//       {/* //  <div className="absolute top-0 left-0 z-50 bg-[#f33]">{m.longitude}</div> */}
//       {/* {markers.forEach( (m)=>{
//       {console.log(m.longitude)} 
//        <Marker longitude={m.longitude} latitude={m.latitude} anchor="center" color="#00f">
//             <FaMapMarkerAlt className="absolute text-[#00f] text-3xl"/>
//        </Marker> 
//     })} */}
//       {/* </Marker>  */}
    
//     {/* <FullscreenControl /> */}
//     <div className="absolute flex items-center justify-start  w-fit h-fit top-5 left-5">
//                <div className="mb-2">
//                    <button className={showStatic? "font-bold border-2 w-fit py-1 px-2 text-lg mr-2 bg-[#2400FF] border-[#2400FF] text-[#fff] rounded-lg":"font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-1 px-2  mr-2 rounded-lg  text-lg"} onClick={()=>setShowStatic(!showStatic)}>Statiques</button>
//                    <button className={!showStatic? "font-bold border-2 w-fit py-1 px-2 text-lg ml-2 bg-[#2400FF] border-[#2400FF] text-[#fff] rounded-lg":"font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-1 px-2  ml-2 rounded-lg  text-lg"} onClick={()=>setShowStatic(!showStatic)}>Automatiques</button>
//                </div>
               
//            </div>
//            <button className="absolute flex items-center justify-center  w-fit h-fit top-5 right-10
//            font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-1 px-2  mr-2 rounded-lg  text-lg">
//              <span>Filter</span>
//              <BiFilter className="text-3xl ml-1"/>
//             </button>
//             {!showStatic && <button className="absolute flex items-center justify-center w-fit h-fit top-5 right-40
//            font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-1 px-2  mr-2 rounded-lg  text-lg">
//              <span>Critères de génération</span>
//              <BiFilter className="text-3xl ml-1"/>
//             </button>}
//            {showStatic? <StaticCircuits setViewport={setViewport} setYes={setYes} yes={yes} markers={markers} setMarkers={setMarkers}/>:<AutoCircuits/>}
    
//    </Map> 
  
//   {/* <MapContainer/> */}
//   {/* <LoadScript
//       googleMapsApiKey="YOUR_API_KEY"
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         {/* <></> */}
//       {/* </GoogleMap> */}
//     {/* </LoadScript> */} 
//     {/* </ReactMapGL> */}
//     </div>
//     )
// };
// export default  Circuits