/* global google */
import React from "react"
import {useState,useEffect,useRef} from "react"
import {GoogleMap,useLoadScript,Marker, DirectionsRenderer} from "@react-google-maps/api"
import 'swiper/css';
import {FaWindowClose} from "react-icons/fa"
import {BiFilter} from "react-icons/bi"
import { Swiper, SwiperSlide } from 'swiper/react';
import {GrAdd} from "react-icons/gr"
import axios from "axios";
import {FiRefreshCcw} from "react-icons/fi"
import {AiFillDelete} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
import googleImage from "../assets/google.png"
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from "react-icons/md"
class MapDirectionsRenderer extends React.Component {
  state = {
    directions: null,
    error: null
  };

  componentDidMount() {
    const { places, travelMode } = this.props;
    
    const waypoints = places.map(p =>({
        location: {lat: p.lat, lng:p.lng},
    }))
    const origin = waypoints.shift().location;
    const destination = waypoints.pop().location;
    
    
     
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: travelMode,
        waypoints: waypoints
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          this.setState({ error: result });
        }
      }
    );
  }
  render() {

      return (this.state.directions && <DirectionsRenderer directions={this.state.directions} />)
    }
}

function getCoordinates(address,suii,setSuii){
  fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+address+'&key=AIzaSyDSUotqEe2hCNPfF1TaJWlVo-3UkzLjTes')
    .then(response => response.json())
    .then(data => {
      const lat = data.results[0].geometry.location.lat;
      const lng = data.results[0].geometry.location.lng;
      suii.push({lat,lng});
      setSuii(suii)
      
    })
  
}

function Circuits({userConnected}){
 
  const [qlq,setQlq]=useState("")
  const [currentTypes,setCurrentTypes]=useState([])
  const [checked,setChecked]=useState([false,false,false,false,false,false,false,false,false,false])
  const [types,setTypes]=useState(["Historique","Touristique","Gastronomique","Attractions","Decouverte","Culture"])
  const adr = useRef();
  const nomCircuit=useRef()
  const descCircuit=useRef()
  const perimCircuit=useRef()
  const [fields,setFields]=useState(["",""])
  const [suii,setSuii]=useState([])
  const [hh,setHh]=useState({})
  const addNewMarkerField=()=>{
        fields.push("")
        setFields(fields)
        console.log(fields)
  }
  const [staticCircuits,setStaticCircuits]=useState(null)
  const [automaticCircuits,setAutomaticCircuits]=useState(null)
  const getCircuits=async ()=>{
    const res=await axios.get("/circuits/getAll")
    setStaticCircuits(res.data.Circuits)
   
  }
  const getAutoCircuits=async ()=>{
    const res=await axios.get("/autoCircuits/getAll")
    setAutomaticCircuits(res.data.AutoCircuits)
  
   
  }
  useEffect(()=>{
    try {
      setInterval(() => {
        getCircuits();
        getAutoCircuits();
            }, 1000);
      setZOOM(12)    
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
      ]
    },
  ])
  const deleteCircuit=async ({id})=>{
     console.log("/circuits/delete/"+id)
      await axios.delete(`/circuits/delete/${id}`)
  }
  const deleteAutoCircuit=async ({id})=>{
    console.log("/autoCircuits/delete/"+id)
     await axios.delete(`/autoCircuits/delete/${id}`)
 }
  const [title,setTitle]=useState("hh")
  const [place,setPlace]=useState("")
  const [description,setDescription]=useState("")
  const titleRef=useRef();
  const typeRef=useRef();
  const periodeRef=useRef();
  const descriptionRef=useRef();
  const submitCircuit=async (suii,title,description,currentTypes,periode)=>{
    //e.preventDefault();
    const newCircuit={
       title:title,
       place: userConnected.wilaya,
       markers:suii,
       description:description,
       type: currentTypes,
       duration: periode
    }
    console.log(newCircuit)
    try{
      const res=await axios.post("/circuits/create",newCircuit)
    }catch(e){
      console.log(e)
    }
   
  }
    const [suivant,setSuivant]=useState(false)
    const [create,setCreate]=useState(false)
    const [showStatic,setShowStatic]=useState(true)
    const [number,setNumber]=useState("")
    const [done,setDone]=useState(false)
    const [ZOOM,setZOOM]=useState(12)
    const [showMore,setShowMore]=useState(false)
    const [showCircuitName,setShowCircuitName]=useState("")
    const [showCircuitDescription,setShowCircuitDescription]=useState("")
    const [showCircuitId,setShowCircuitId]=useState(null)
    const [showSuii,setShowSuii]=useState(null)
    const [showVisitors,setShowVisitors]=useState(0)
    const [showTypes, setShowTypes]=useState([])
    const [showCTheme,setShowCTheme]=useState(false)
    const [showCDuree,setShowCDuree]=useState(false)
    const [showCRegion,setShowCRegion]=useState(false)
    const [showCVisitors,setShowCVisitors]=useState(false)
    const [showCriteres,setShowCriteres]=useState(false)
    const [showFilters,setShowFilters]=useState(false)
    const [periode,setPeriode]=useState(0)
    const [showFeedback, setshowFeedback]=useState(0)
    const [center,setCenter]=useState(  
     circuits[0].markers
     )
  
  const {isLoaded}=useLoadScript({googleMapsApiKey:"AIzaSyDSUotqEe2hCNPfF1TaJWlVo-3UkzLjTes"})
 
      if (!isLoaded){
          return ( <div>Loading...</div>)
      }else{
   return (
    <div  className="relative bg-[#333] w-full h-[calc(100vh-140px)] flex flex-col items-center justify-center mt-[calc(100px)] " >
      

      
      <GoogleMap  zoom={ZOOM} center={center[0]} mapContainerClassName="w-full h-full" >
        <img src={googleImage} className="bg-[#fff] rounded p-1 shadow-xl absolute bottom-0 left-0 z-10 w-[80px] mx-2 my-1 h-[30px]" alt=""/>
        {(showMore || showCriteres || showFilters) && <div onClick={()=>{setShowMore(false);setShowCriteres(false);setShowFilters(false)}} className="opacity-40 absolute bg-[#000] h-full w-full z-30"></div>}
        {
          showFilters &&
           <div className="absolute flex items-start justify-start flex-col right-0 h-full w-1/4 bg-[#EFEDFF] z-50 ">
                <div className="w-full  flex items-center justify-between px-3 py-3"> 
                            <div  className=" flex items-center justify-center  w-fit h-fit 
                                  font-bold text-[#2400ff]  text-xl">
                                    <span>Filters</span>
                                    <BiFilter className="text-3xl ml-5"/>
                            </div>
                          <button onClick={()=>setShowFilters(false)}><AiOutlineClose className="text-[#2400ff] text-3xl font-bold" /></button>
                  </div>
                  <div className="w-full mt-24 flex flex-col items-center">
                  <div className="w-11/12 h-fit flex flex-col items-start m-auto border-b-2 border-[#6956E580] mb-5">
                    <div className="w-full flex items-center justify-between mb-3 text-lg font-bold ">
                    <h1 className="opacity-70" >Thème</h1><button onClick={()=>setShowCTheme(!showCTheme)}>{showCTheme? <MdKeyboardArrowUp/>:<MdKeyboardArrowDown/>}</button>
                    </div>
                    {showCTheme && <div>{
                       types.map((tp,index)=>{
                        return   <button key={index} onClick={(e)=>{ e.preventDefault()
                          const a=currentTypes.indexOf(tp)
                          const l=currentTypes.length
                          if(a>-1) {if(l>1 && a!=l-1){currentTypes[a]=currentTypes[l-1]} currentTypes.pop();setCurrentTypes(currentTypes);console.log(currentTypes)}
                          else {currentTypes.push(tp);setCurrentTypes(currentTypes);}
                        }} className={currentTypes.indexOf(tp)>-1? "rounded-xl mr-3 border-2 border-[#2400FF] py-1 px-3 opacity-80 w-fit my-3":"opacity-50 rounded-xl border-2 border-[#b3e5fc] py-2 px-5 opacity-80 w-fit my-3"} >{tp}</button>
        
                      }
                      )
                      }</div>}
                  </div>
                  <div className="w-11/12 h-fit m-auto border-b-2 border-[#6956E580]  mb-5">
                    <div className="w-full flex items-center justify-between mb-3 text-lg font-bold">
                    <h1 className="opacity-70" >Durée</h1><button onClick={()=>setShowCDuree(!showCDuree)}>{showCDuree? <MdKeyboardArrowUp/>:<MdKeyboardArrowDown/>}</button>
                    </div>
                    {showCDuree && <div className="flex items-center flex-col">
                      <input type="number" placeholder="min" className=" my-1 bg-[#EFEDFF] border-2 border-[#2400ff] rounded w-5/6 py-1 px-1"/>
                      <input type="number" placeholder="max" className="my-1 bg-[#EFEDFF] border-2 border-[#2400ff] rounded w-5/6 py-1 px-1"/>
                      </div>}
                  </div>
                  <div className="w-11/12 h-fit m-auto border-b-2 border-[#6956E580]  mb-5">
                    <div className="w-full flex items-center justify-between mb-3 text-lg font-bold">
                    <h1 className="opacity-70">Région</h1><button onClick={()=>setShowCRegion(!showCRegion)}>{showCRegion? <MdKeyboardArrowUp/>:<MdKeyboardArrowDown/>}</button>
                    </div>
                    {showCRegion && <div className="flex items-center flex-col">
                      <input type="text" placeholder="nom" className=" my-1 bg-[#EFEDFF] border-2 border-[#2400ff] rounded w-5/6 py-1 px-1"/>
                      </div>}
                  </div>

                  <div className="w-11/12 h-fit m-auto border-b-2 border-[#6956E580]  mb-5">
                    <div className="w-full flex items-center justify-between mb-3 text-lg font-bold">
                    <h1 className="opacity-70" >Nombre de visiteurs</h1><button onClick={()=>setShowCVisitors(!showCVisitors)}>{showCVisitors? <MdKeyboardArrowUp/>:<MdKeyboardArrowDown/>}</button>
                    </div>
                    {showCVisitors && <div className="flex items-center flex-col">
                      <input type="number" placeholder="min" className=" my-1 bg-[#EFEDFF] border-2 border-[#2400ff] rounded w-5/6 py-1 px-1"/>
                      <input type="number" placeholder="max" className="my-1 bg-[#EFEDFF] border-2 border-[#2400ff] rounded w-5/6 py-1 px-1"/>
                      </div>}
                  </div>
                  </div>
          </div>
        }
        {showCriteres && <div className="rounded-xl border-2 border-[#2400ff] absolute flex flex-col items-center top-0 bottom-0 left-0 right-0 z-50 bg-[#fff] w-5/6 h-11/12 m-auto my-10">
          <div className="w-full px-5 flex items-center justify-between pt-5 text-3xl font-bold"><h1>Critères de génération automatique</h1> <button onClick={()=>setShowCriteres(false)}><AiOutlineClose className="text-[#2400ff] font-bold" /></button> </div>
          <form action="" className="w-11/12 m-auto">
            <div className=" mb-3 flex items-center justify-between w-full px-5 py-1 border-2 border-[#2400ff] rounded">
            <label htmlFor="Hébérgement"><h2 className="text-lg">Hébérgement</h2><h3 className="text-md opacity-80">Choisir un hotel sur la map pour l’ajouter au circuit</h3></label>
            <input className="w-[calc(30px)] h-[calc(30px)]" type="checkbox" id="Hébérgement" name="Hébérgement"/>
            </div>
            <div className=" my-3 flex items-center justify-between w-full px-5 py-1 border-2 border-[#2400ff] rounded">
            <label htmlFor="Stations souhaitéest"><h2 className="text-lg">Stations souhaitées</h2><h3 className="text-md opacity-80">Choisir une station sur la map pour l’ajouter au circuit</h3></label>
            <input className="w-[calc(30px)] h-[calc(30px)]" type="checkbox" id="Stations souhaitées" name="Stations souhaitées"/>
            </div>
            <div className=" my-3 flex items-center justify-between w-full px-5 py-1 border-2 border-[#2400ff] rounded">
            <label htmlFor="Hébérgement"><h2 className="text-lg">Activités</h2><h3 className="text-md opacity-80">Un circuit avec ou sans activités</h3></label>
            <input className="w-[calc(30px)] h-[calc(30px)]" type="checkbox" id="Hébérgement" name="Hébérgement"/>
            </div>
            <div className=" my-3 flex items-center justify-between w-full px-5 py-1 border-2 border-[#2400ff] rounded">
            <label htmlFor="Hébérgement"><h2 className="text-lg">Période des sorties</h2><h3 className="text-md opacity-80">Spécifier les périodes de la journée (matin, apés-midi ou soir ) pour sortir  </h3></label>
            <input className="w-[calc(30px)] h-[calc(30px)]" type="checkbox" id="Hébérgement" name="Hébérgement"/>
            </div>
            <div className=" my-3 flex items-center justify-between w-full px-5 py-1 border-2 border-[#2400ff] rounded">
            <label htmlFor="Hébérgement"><h2 className="text-lg">Durée des sorties par jour</h2><h3 className="text-md opacity-80">Spécifier la durée des sorties</h3></label>
            <input className="w-[calc(30px)] h-[calc(30px)]" type="checkbox" id="Hébérgement" name="Hébérgement"/>
            </div>
            <div className=" my-3 flex items-center justify-between w-full px-5 py-1 border-2 border-[#2400ff] rounded">
            <label htmlFor="Hébérgement"><h2 className="text-lg">Statut familial</h2><h3 className="text-md opacity-80">Selectionner son statut familial ( célibataire, couple, famille )</h3></label>
            <input className="w-[calc(30px)] h-[calc(30px)]" type="checkbox" id="Hébérgement" name="Hébérgement"/>
            </div>

            
          </form>
          <div className="h-[calc(20px)]"></div>
          <button  onClick={()=>setShowCriteres(false)} className=" rounded-xl text-xl bg-[#2400ff] text-[#fff] absolute bottom-5 right-5 py-1 px-3 font-bold">Enregistrer</button>
          </div>}
        {showMore && <div className="absolute h-11/12  z-50 w-11/12 m-auto overflow-y-scroll scrollbar-hide top-0 left-0 bottom-0 right-0"><div className=" bg-[#fff] rounded-xl m-auto  border-2 my-5 border-[#2400ff]  w-full  h-[calc(120vh)] relative flex flex-col items-center  z-50  ">
        <h1 className="text-4xl font-bold my-8 self-start mx-16">{showCircuitName}</h1>
       
        
        <GoogleMap  zoom={15} center={center[0]} mapContainerClassName="h-1/3 w-3/4 rounded-xl border-2 border-[#0002]" >
      {showSuii && <MapDirectionsRenderer
        places={showSuii}
        travelMode={google.maps.TravelMode.DRIVING}
      />}
     </GoogleMap>
       
        <div className="flex items-center justify-evenly w-3/4 mb-3 mt-5">
            <div className="w-1/4 mx-3 bg-[#6956E5] rounded-3xl  p-3 ">
                <h1 className="text-[#fff] text-2xl mb-2">Nombre de visiteurs</h1>
      <h2 className="font-bold text-2xl text-[#2400FF]">{showVisitors}</h2>
            </div>

            <div className="w-1/4 bg-[#59CC7F] rounded-3xl  p-3 ">
                <h1 className="text-[#fff] text-2xl mb-2">Nombre de marquers</h1>
      <h2 className="font-bold text-2xl text-[#2400FF]">{showSuii.length}</h2>
            </div>

            <div className="w-1/4 bg-[#FFC045] rounded-3xl p-3 ">
                <h1 className="text-[#fff] text-2xl mb-2">Nombre de commentaires</h1>
                <h2 className="font-bold text-2xl text-[#2400FF]">1234</h2>
            </div>
            
        </div>
    
        


        <div className=" w-3/4 mb-8">
           <h1 className="text-xl font-bold mt-6 self-start">Thèmes</h1>
           <div className="grid grid-cols-5">
           {showTypes.map((tp,index)=>{
            return   <div key={index} className="rounded-xl border-2 border-[#2400FF] py-2 px-5 opacity-80 w-fit my-3" >{tp}</div>

         }
  )}</div>
        </div>
        
        <div className=" w-3/4 mb-5">
           <h1 className="text-xl font-bold mt-6 self-start">Description</h1>
           <p className="text-lg ">{showCircuitDescription}</p>
        </div>
        <div className=" w-3/4 mb-8 flex items-center">
        <h1 className="text-xl font-bold mt-6 self-start mr-16">Feedback</h1>
        <div className="grid grid-cols-5 mt-6 ">
           {showFeedback>0?
                <div className="mr-3"  ><AiFillStar className="text-[#ffdb58] text-4xl"/></div>
           :     <div  ><AiOutlineStar className="text-[#ffdb58] text-4xl"/></div>
           }
             {showFeedback>1?
                <div  ><AiFillStar className="text-[#ffdb58] text-4xl"/></div>
           :     <div  ><AiOutlineStar className="text-[#ffdb58] text-4xl"/></div>
           }
             {showFeedback>2?
                <div  ><AiFillStar className="text-[#ffdb58] text-4xl"/></div>
           :     <div  ><AiOutlineStar className="text-[#ffdb58] text-4xl"/></div>
           }
             {showFeedback>3?
                <div  ><AiFillStar className="text-[#ffdb58] text-4xl"/></div>
           :     <div  ><AiOutlineStar className="text-[#ffdb58] text-4xl"/></div>
           }
             {showFeedback>4?
                <div   ><AiFillStar className="text-[#ffdb58] text-4xl"/></div>
           :     <div   ><AiOutlineStar className="text-[#ffdb58] text-4xl"/></div>
           }
           
  </div>
          </div>
        <div onClick={()=>{
                    const id=showCircuitId
                    if(showStatic) deleteCircuit({id});
                    else  deleteAutoCircuit({id});
                    setShowMore(false)
                  }
                    } className="cursor-pointer text-2xl  flex items-center rounded-xl px-4 py-3 bg-[#f00] absolute top-5 right-5 z-20 hover:opacity-70 text-[#fff] "><AiFillDelete className="mr-2"/> supprimer</div>
          </div></div>}
      <div onClick={()=>setCreate(false)}  className={create? "blur absolute h-full w-full top-0 z-30 bg-[#000] opacity-40":"hidden"}>
      </div>
      <div className={create? " m-auto border-2 border-[#2400ff] w-11/12 h-11/12 my-5 absolute top-0 left-0 right-0 bottom-0 z-50 bg-[#fff] rounded-xl px-3 py-6":"hidden"}>
        <h1 className="text-2xl font-bold w-11/12 m-auto mb-5">Nouveau circuit</h1>
        {!suivant? 
        <form action=""  className="w-full flex flex-col items-center justify-center text-xl " >

        <div className="w-5/6 mb-3">
  <input className="rounded w-full outline-none border-2 border-[#C4C4C4] p-2 " type="text" placeholder="Nom du circuit" ref={titleRef}  />
  </div><div className="w-5/6 mb-3">
  <textarea className="rounded w-full outline-none border-2 border-[#C4C4C4] p-2 " type="text" placeholder="Description..." ref={descriptionRef} ></textarea>
  </div>
<div className="w-5/6 mb-3">
<input className="rounded w-full outline-none border-2 border-[#C4C4C4] p-2" type="text" placeholder="Périmètre géographique" ref={typeRef} />
</div>
<div className="w-5/6 mb-3">
<input className="rounded w-full outline-none border-2 border-[#C4C4C4] p-2" type="text" placeholder="Période" ref={periodeRef} />
</div>
<h1 className="text-2xl font-bold w-11/12 m-auto mb-2 mt-5">Thèmes</h1>
<div className="w-5/6 mb-3 grid grid-cols-5 ">
  {
  types.map((tp,index)=>{
    return   <button key={index} onClick={(e)=>{ e.preventDefault()
      const a=currentTypes.indexOf(tp)
      const l=currentTypes.length
      if(a>-1) {if(l>1 && a!=l-1){currentTypes[a]=currentTypes[l-1]} currentTypes.pop();setCurrentTypes(currentTypes);console.log(currentTypes)}
      else {currentTypes.push(tp);setCurrentTypes(currentTypes);}
    }} className={currentTypes.indexOf(tp)>-1? "rounded-xl border-2 border-[#2400FF] py-2 px-5 opacity-80 w-fit my-3":"opacity-50 rounded-xl border-2 border-[#b3e5fc] py-2 px-5 opacity-80 w-fit my-3"} >{tp}</button>

  }
  )}

</div>


 <button type="submit" onClick={()=>
  {
    setTitle(titleRef.current.value)
    setDescription(descriptionRef.current.value)
    setPeriode(periodeRef.current.value)
    setSuivant(true)
  }
  } className=" absolute bottom-8 right-10 font-bold text-[#fff] rounded w-fit outline-none  bg-[#2400FF] py-2 px-5 mb-3 cursor-pointer hover:opacity-80" >Suivant</button>





</form>:
<div className="h-5/6 w-full ">
  <div className="w-full h-full px-5 flex items-center justify-center">
  <div className="w-1/2  h-full px-5 flex  items-center ">
    <div className="w-5/6 h-full pt-10">
    {fields.map((filed,index)=>{return (
      <div className="w-full  flex items-center justify-start">
      <div  onClick={()=>{if(index+1==fields.length && fields[index]!="") {addNewMarkerField()
      }}} className={index+1==fields.length? "bg-[#fff] px-3 py-1 border-2  border-[#2400FF] text-[#2400FF] rounded-full text-xl cursor-pointer ":"text-[#fff] px-3 py-1 bg-[#2400FF] rounded-full text-xl "}>{index+1<fields.length? index+1:"+"}</div>
      <input 
      onChange={(e)=>{
        fields[index]=e.currentTarget.value;
        setFields(fields)
      }}
     className="block border-2 border-[#2400FF] rounded-xl ml-5 my-1 px-3 py-2 w-5/6" />
    </div>
    ) })}
   </div>
    <button  onClick={()=>{
     
     while(suii.length>0){
       suii.pop();
     }
     setSuii(suii)
     console.log(suii)
     fields.map((field,index)=>{
       getCoordinates(field,suii,setSuii)
     })
     console.log(suii)
    }}><FiRefreshCcw className="text-3xl ml-8 text-[#2400FF]"/></button>
    </div>
    <div className="w-1/2 border-2 h-5/6 border-[#322] flex items-center ">
      <GoogleMap  zoom={15} center={center[0]} mapContainerClassName="w-full h-full" >
      {suii.length>2 && <MapDirectionsRenderer
        places={suii}
        travelMode={google.maps.TravelMode.DRIVING}
      />}
     </GoogleMap>
    </div>
    </div>
<button onClick={()=>setSuivant(false)} className=" absolute bottom-8 left-10 font-bold bg-[#fff] border-2 border-[#2400FF] rounded w-fit outline-none text-[#2400FF] py-2 px-5 mb-3 cursor-pointer hover:opacity-80" >Precedent</button>
<button  onClick={()=>{setSuivant(false);setCreate(false);submitCircuit(suii,title,description,currentTypes,periode)}} className=" absolute bottom-8 right-10 font-bold text-[#fff] border-2 border-[#2400FF] rounded w-fit outline-none bg-[#2400FF] py-2 px-5 mb-3 cursor-pointer hover:opacity-80" >Creer</button>

  </div>}
        <FaWindowClose onClick={()=>{setCreate(false);setCurrentTypes([]);setFields(null);setFields(["",""])}} className="cursor-pointer hover:text-[#f00] absolute text-2xl top-2 right-2 text-[#2400ff] " />
      </div>
      {!userConnected.admin && staticCircuits && staticCircuits.map((circuit,index)=>{
        
        if(!done && circuit.place.toUpperCase()===userConnected.wilaya.toUpperCase()){
          setCenter(circuit.markers);
          setDone(true)
          setNumber(index)
        }
      })}

      {
      }
      
    <div className="absolute flex items-center justify-start  w-fit h-fit top-3 left-52">
               <div className="mb-2  ">
                   <button className={showStatic? "font-bold border-2 w-fit py-1 px-2 text-lg mr-2 bg-[#2400FF] border-[#2400FF] text-[#fff] rounded-lg":"font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-1 px-2  mr-2 rounded-lg  text-lg"} onClick={()=>setShowStatic(!showStatic)}>Statiques</button>
                   <button className={!showStatic? "font-bold border-2 w-fit py-1 px-2 text-lg ml-2 bg-[#2400FF] border-[#2400FF] text-[#fff] rounded-lg":"font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-1 px-2  ml-2 rounded-lg  text-lg"} onClick={()=>setShowStatic(!showStatic)}>Automatiques</button>
               </div>
               
           </div>
           <button  onClick={()=>setShowFilters(true)} className="absolute flex items-center justify-center  w-fit h-fit top-3 right-16
           font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-1 px-2  mr-2 rounded-lg  text-lg">
             <span>Filter</span>
             <BiFilter className="text-3xl ml-1"/>
            </button>
            {!showStatic && <button onClick={()=>setShowCriteres(true)} className="absolute flex items-center justify-center w-fit h-fit top-3 right-48
           font-bold bg-[#FFF] text-[#2400ff] border-2 border-[#2400ff] w-fit py-1 px-2  mr-2 rounded-lg  text-lg">
             <span>Critères de génération</span>
             <BiFilter className="text-3xl ml-1"/>
            </button>}
           {showStatic? 
         
         <div className="absolute flex items-center justify-start   z-10 w-[calc(97%)]  bottom-5  px-5  " >
         {
     !userConnected.admin &&
           <div className="border-dashed border-4 border-[#2400ff] relative  flex flex-col items-center justify-center bg-gradient-to-b from-[#45b6fe] to-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl">
            <GrAdd className="relative text-5xl text-[#2400ff] bottom-5"/>
            <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl" onClick={()=>setCreate(true)}>Ajouter</button>
          </div>}
       
          <div className={ 
          userConnected.admin? "relative w-full z-20":
          "w-5/6   "}>

          <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper "  >
          { userConnected.admin && staticCircuits && staticCircuits.map((circuit,index)=>{
            console.log(index)
                return (
                 <SwiperSlide key={index}
                 
                 onClick={()=>{
                   console.log(typeof(circuit._id))
                  setCenter(circuit.markers);
                  setNumber(index)
                  setZOOM(ZOOM)
             
                 }}
                  className= "relative z-30  mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center"
                  >
                               
                <div className={number==index?
                " border-4 border-[#2400ff] relative flex flex-col items-center justify-left bg-[#fff] z-30  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  "
               :" border-4 border-[#2400ff] opacity-90 relative flex flex-col items-center justify-left bg-gradient-to-b from-[#45b6fe] to-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  "
              
                }
                >
         {userConnected.admin && staticCircuits && number==index && <MapDirectionsRenderer
        places={circuit.markers}
        travelMode={google.maps.TravelMode.DRIVING}
      />}         
                          <div className="flex flex-col p-5 self-start ">
                   <h1 className="font-bold text-2xl  relative z-20 ">{circuit.title}</h1>
                   <p className=" text-lg text-[#6B7280] ">
                     {circuit.type[0]}
                   </p>
                   <div>
                   <p className=" text-lg text-[#6B7280]">{circuit.duration} jours</p>
                   <p className=" text-lg text-[#6B7280]">{circuit.visitors} visteurs</p>
                   </div>
                   </div>
                   <button onClick={()=>{
                           setShowMore(true)
                           setShowCircuitDescription(circuit.description);
                           setShowCircuitName(circuit.title);
                           setShowSuii(circuit.markers)
                           setShowVisitors(circuit.visitors)
                           setShowTypes(circuit.type)
                           setshowFeedback(circuit.feedback)
                           setShowCircuitId(circuit._id)
                        }} className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Modifier</button>
                              </div>
                </SwiperSlide>)})}
                
                { !userConnected.admin && staticCircuits && staticCircuits.map((circuit,index)=>{
                  
                  if(circuit.place.toUpperCase()===userConnected.wilaya.toUpperCase()){
                   
                    return (
                      <SwiperSlide key={index}
                      
                      onClick={()=>{
                   
                       setCenter(circuit.markers);
                       setNumber(index)
                       setZOOM(ZOOM)
                      }}
                       className= 
                         "relative z-10  mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center"
                       >
                      
                     <div className={number==index?
                     " border-4 border-[#2400ff] relative flex flex-col items-center justify-left bg-[#fff] z-10  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  "
                    :" border-4 border-[#2400ff] opacity-90 relative flex flex-col items-center justify-left bg-gradient-to-b from-[#45b6fe] to-[#fff] z-10  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  "
                     }
                     >
                               {number==index && !userConnected.admin && staticCircuits &&  <MapDirectionsRenderer
                                    places={circuit.markers}
                                    travelMode={google.maps.TravelMode.DRIVING}
                               />} 
                                 
                                
                                 
                                     <div className="flex flex-col p-5 self-start">
                        <h1 className="font-bold text-2xl  relative z-10">{circuit.title}</h1>
                        <p className=" text-lg text-[#6B7280]">
                          {circuit.type[0]}
                        </p>
                        <p className=" text-lg text-[#6B7280]">{circuit.duration} jours</p>
                        <p className=" text-lg text-[#6B7280]">{circuit.visitors} visteurs</p>
                        </div>
                        <button onClick={()=>{
                           setShowMore(true)
                           setShowCircuitDescription(circuit.description);
                           setShowCircuitName(circuit.title);
                           setShowSuii(circuit.markers)
                           setShowVisitors(circuit.visitors)
                           setShowTypes(circuit.type)
                           setshowFeedback(circuit.feedback)
                           setShowCircuitId(circuit._id)
                        }} className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Modifier</button>
                      </div>
                     </SwiperSlide>)
                  }
                
          })} 
               <SwiperSlide className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className="  relative flex flex-col items-center justify-left  z-10  w-[calc(200px)] h-[calc(200px)] mx-5   ">
           </div>
       </SwiperSlide>
         </Swiper>
         </div>
         </div>
           :
          //  <AutoCircuits/>
          <div className="absolute flex items-center justify-start   z-10 w-[calc(97%)]  bottom-5  px-5  " >
        
           <div className={ 
           userConnected.admin? "relative w-full z-20":
           "w-5/6   "}>
 
           <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper "  >
           { userConnected.admin && automaticCircuits && automaticCircuits.map((circuit,index)=>{
             console.log(index)
            
                 return (
                  <SwiperSlide key={index}
                  
                  onClick={()=>{
                    console.log(typeof(circuit._id))
                   setCenter(circuit.markers);
                   setNumber(index)
                   setZOOM(ZOOM)
              
                  }}
                   className= "relative z-30  mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center"
                   >
                                
                 <div className={number==index?
                 " border-4 border-[#2400ff] relative flex flex-col items-center justify-left bg-[#fff] z-30  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  "
                :" border-4 border-[#2400ff] opacity-90 relative flex flex-col items-center justify-left bg-gradient-to-b from-[#45b6fe] to-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  "
               
                 }
                 >
          {userConnected.admin && automaticCircuits && number==index && <MapDirectionsRenderer
         places={circuit.markers}
         travelMode={google.maps.TravelMode.DRIVING}
       />}         
                           <div className="flex flex-col p-5 self-start ">
                    <h1 className="font-bold text-2xl  relative z-20 ">{circuit.title}</h1>
                    <p className=" text-lg text-[#6B7280] ">
                      {circuit.type[0]}
                    </p>
                    <div>
                    <p className=" text-lg text-[#6B7280]">{circuit.duration} jours</p>
                    <p className=" text-lg text-[#6B7280]">{circuit.visitors} visteurs</p>
                    </div>
                    </div>
                    <button onClick={()=>{
                            setShowMore(true)
                            setShowCircuitDescription(circuit.description);
                            setShowCircuitName(circuit.title);
                            setShowSuii(circuit.markers)
                            setShowVisitors(circuit.visitors)
                            setShowTypes(circuit.type)
                            setshowFeedback(circuit.feedback)
                            setShowCircuitId(circuit._id)
                         }} className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Modifier</button>
                               </div>
                 </SwiperSlide>)})}
                 
                 { !userConnected.admin && automaticCircuits && automaticCircuits.map((circuit,index)=>{
                   
                   if(circuit.place.toUpperCase()===userConnected.wilaya.toUpperCase()){
                    
                     return (
                       <SwiperSlide key={index}
                       
                       onClick={()=>{
                    
                        setCenter(circuit.markers);
                        setNumber(index)
                        setZOOM(ZOOM)
                       }}
                        className= 
                          "relative z-10  mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center"
                        >
                       
                      <div className={number==index?
                      " border-4 border-[#2400ff] relative flex flex-col items-center justify-left bg-[#fff] z-10  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  "
                     :" border-4 border-[#2400ff] opacity-90 relative flex flex-col items-center justify-left bg-gradient-to-b from-[#45b6fe] to-[#fff] z-10  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  "
                      }
                      >
                                {number==index && !userConnected.admin && automaticCircuits &&  <MapDirectionsRenderer
                                     places={circuit.markers}
                                     travelMode={google.maps.TravelMode.DRIVING}
                                />} 
                                  
                                 
                                  
                                      <div className="flex flex-col p-5 self-start">
                         <h1 className="font-bold text-2xl  relative z-10">{circuit.title}</h1>
                         <p className=" text-lg text-[#6B7280]">
                           {circuit.type[0]}
                         </p>
                         <p className=" text-lg text-[#6B7280]">{circuit.duration} jours</p>
                         <p className=" text-lg text-[#6B7280]">{circuit.visitors} visteurs</p>
                         </div>
                         <button onClick={()=>{
                            setShowMore(true)
                            setShowCircuitDescription(circuit.description);
                            setShowCircuitName(circuit.title);
                            setShowSuii(circuit.markers)
                            setShowVisitors(circuit.visitors)
                            setShowTypes(circuit.type)
                            setshowFeedback(circuit.feedback)
                            setShowCircuitId(circuit._id)
                         }} className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Modifier</button>
                       </div>
                      </SwiperSlide>)
                   }
                 
           })} 
                <SwiperSlide className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
        <div className="  relative flex flex-col items-center justify-left  z-10  w-[calc(200px)] h-[calc(200px)] mx-5   ">
            </div>
        </SwiperSlide>
          </Swiper>
          </div>
          </div>
           }
    
           </GoogleMap>

    </div>
    )}
};
export default  Circuits