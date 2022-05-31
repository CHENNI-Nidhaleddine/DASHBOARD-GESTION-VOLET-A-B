import {useState,useEffect} from "react"
import {GoogleMap,useLoadScript,Marker} from "@react-google-maps/api"
import StaticCircuits from "../components/StaticCircuits"
function Test({mapContainer}){

    const [center,setCenter]=useState(  [{
        lng:5.4108,
         lat:36.1898
       },
       {
        lng:5.4101,
         lat:35.1898
       }])
    const {isLoaded}=useLoadScript({googleMapsApiKey:"AIzaSyDSUotqEe2hCNPfF1TaJWlVo-3UkzLjTes"})
   
        if (!isLoaded){
            return ( <div>Loading...</div>)
        }else{
            return (   <div  className="relative w-full  flex flex-col items-center justify-center h-[calc(100vh-150px)] mt-[calc(100px)] bg-[#111] " >
             
              </div>
            )
        }
 



   
    
};
export default  Test