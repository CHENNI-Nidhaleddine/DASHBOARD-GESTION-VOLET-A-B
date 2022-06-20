import React from "react"
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom';
import {BsBoxArrowRight} from "react-icons/bs"
import {RiHomeLine} from "react-icons/ri"
 import {BiUserCircle} from "react-icons/bi"
import {VscCircuitBoard} from "react-icons/vsc"
import {FiActivity} from "react-icons/fi"
import {GoGistSecret} from "react-icons/go"
import {HiLocationMarker} from "react-icons/hi"
import Acceuil from "../sections/Acceuil";
import Circuits from "../sections/Circuits";
import Activite from "../sections/Activite";

import Cartes from "../sections/Cartes";
import Employes from "../sections/Employes";

function Main({userConnected,setUserConnected,staticCircuits,setStaticCircuits}){
   
    const navigate = useNavigate();
    const [openTab, setOpenTab] = React.useState(1);
    const [section, setSection] = React.useState("Acceuil");
    const [visible,setVisible]=React.useState(false)
    return (
    <div className="main w-screen flex items-center justify-left w-full h-full " >
           {/* Side Nav */}
          
        <div className="w-1/6 flex flex-col items-center justify-between bg-[#EDEFF2] h-screen pt-10 pb-3">
                    <div><img src={logo} className="w-16 h-20" alt=""/></div>

                
                    <ul className="flex flex-col items-center justify-center w-full text-[#6B7280]" role="tablist">
                                <li  className={openTab==1? "text-[#000] w-full cursor-pointer flex items-center justify-center text-2xl py-5 border-l-8 border-[#000]":"cursor-pointer flex items-center justify-center text-2xl py-5"}>
                                    <a   onClick={e => {
                                    e.preventDefault();
                                    setSection("Acceuil")
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist" className="flex items-center"> <RiHomeLine className="mr-3"/><span>Acceuil</span></a> 
                                </li>
                                <li className={openTab==2? "text-[#000] w-full cursor-pointer flex items-center justify-center text-2xl py-5 border-l-8 border-[#000]":"cursor-pointer flex items-center justify-center text-2xl py-5"}>
                                    <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Lieux")
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist" className="flex items-center">  <HiLocationMarker  className="mr-3"/><span>  Cartes </span></a></li>

                    <li className={openTab==3? "text-[#000] w-full cursor-pointer flex items-center justify-center text-2xl py-5 border-l-8  border-[#000]":"cursor-pointer flex items-center justify-center text-2xl py-5"}>
                                                <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Circuits")
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist" className="flex items-center">  <VscCircuitBoard  className="mr-3"/><span>Circuits</span></a></li>
                 {userConnected.admin && 
                    <li className={openTab==4? "text-[#000] w-full cursor-pointer flex items-center justify-center text-2xl py-5 border-l-8 border-[#000]":"cursor-pointer flex items-center justify-center text-2xl py-5"}>
                                                <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Gestion des Employés")
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist" className="flex items-center">  <GoGistSecret  className="mr-3"/><span>Employés</span></a></li>}
 <li className={openTab==5? "text-[#000] w-full cursor-pointer flex items-center justify-center text-2xl py-5 border-l-8  border-[#000]":"cursor-pointer flex items-center justify-center text-2xl py-5"}>
                                                <a    onClick={e => {
                                    e.preventDefault();
                                    setSection("Gestion utilisateurs")
                                    setOpenTab(5);
                                }}
                                data-toggle="tab"
                                href="#link5"
                                role="tablist" className="flex items-center">  <FiActivity  className="mr-3"/><span>Activité</span></a></li>

                            </ul>
                            
                    
                            <button onClick={()=>setUserConnected(null)} className="flex items-center justify-center text-[#FF2626] font-bold text-lg bg-none"><BsBoxArrowRight className="text-3xl mr-1"/> <span>Deconnectez</span></button>

            </div>
            <div className="relative w-5/6 h-screen flex flex-col items-center ">


            {/* Content */}
       
                <div className="absolute top-0 w-full h-[calc(100px)] flex items-center justify-between py-4 px-10 text-2xl bg-[#fff]">
                            <h1 className="font-bold text-3xl">{section}</h1>
                            <h1 className="flex items-center justify-center"><span>{userConnected.firstName}</span><BiUserCircle className="text-5xl ml-3"/></h1>
                </div>
            
            <div className="px-4 py-5 w-full h-full">
                <div className="tab-content tab-space">
                    <div className={openTab === 1 ? "block " : "hidden"} id="link1">
                      <Acceuil/>
                    </div>
                  
                    <div className={openTab === 2 ? "block  " : "hidden"} id="link2">
                   <Cartes/>
                    </div>
                    <div className={openTab === 3 ? "block w-full h-full " : "hidden"} id="link3">
                    <Circuits userConnected={userConnected} staticCircuits={staticCircuits} setStaticCircuits={setStaticCircuits}/>
                    </div>
                    {userConnected.admin &&  <div className={openTab === 4 ? "block " : "hidden"} id="link4">
                
                    <Employes/>

                    </div>}
                    <div className={openTab === 5 ? "block " : "hidden"} id="link5">
                    <Activite />
                    </div>
                   
                </div>
                </div>
        </div>
     
    </div>
    )
};
export default Main