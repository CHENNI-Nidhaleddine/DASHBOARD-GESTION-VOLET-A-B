import React from "react"
import logo from "../assets/logo.png"
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { UserData } from "./Data";
import user from "../assets/user.png"
import userface from "../assets/userface.png"
import LineChart from "../components/LineChart";
function Acceuil(){
    const [userData, setUserData] = React.useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            tension:0.3,
             label: "Visites",
            data: UserData.map((data) => data.userGain),
           
            borderColor: "#6956E5",
            borderWidth: 3,
          },
        ],
      });
    const navigate = useNavigate();
    const [visible,setVisible]=React.useState(false)
    return (
    <div className=" w-full h-full flex flex-col items-center justify-center  mt-[calc(100px)] " >
        {/* Numbers */}
        <div className="flex items-center justify-evenly w-full ">
            <div className="w-1/4 mx-3 bg-[#6956E5] rounded-3xl  p-5 ">
                <h1 className="text-[#fff] text-3xl mb-3">Nombre de visiteurs</h1>
                <h2 className="font-bold text-3xl text-[#2400FF]">1254</h2>
                <h3 className="text-[#fff]  text-sm mt-5">+24% ce mois</h3>
            </div>

            <div className="w-1/4 bg-[#59CC7F] rounded-3xl  p-5 ">
                <h1 className="text-[#fff] text-3xl mb-3">Nombre des lieux</h1>
                <h2 className="font-bold text-3xl text-[#2400FF]">75</h2>
                <h3 className="text-[#fff]  text-sm mt-5">+24% ce mois</h3>
            </div>

            <div className="w-1/4 bg-[#FFC045] rounded-3xl p-5 ">
                <h1 className="text-[#fff] text-3xl mb-3">Nombre d'utilisateurs</h1>
                <h2 className="font-bold text-3xl text-[#2400FF]">1254</h2>
                <h3 className="text-[#fff]  text-sm mt-5">+24% ce mois</h3>
            </div>
            


        </div>
        {/* Drawings */}
        <div className="flex items-center justify-center w-full h-full mt-16">
        <div className="shadow-sm  text-3xl font-bold w-1/2 h-[calc(420px)] flex flex-col h-2/3  items-center justify-start border-2 border-[#E5E5E5] rounded-3xl  p-4 mr-12">
            <h1 className="self-start">Statistiques des visites</h1>
            <LineChart chartData={userData} />
        </div>
        <div className="shadow-sm text-3xl font-bold  w-1/3 h-[calc(420px)] flex flex-col items-center justify-between border-2 border-[#E5E5E5] rounded-3xl  p-5 ml-12">
            <div className="flex items-center justify-between w-full "><h1>Touristes</h1><span className="relative top-1 text-lg text-[#787486]">Aug 25-Sept 25</span></div>
        <div className="flex items-center justify-between w-full ">
            <div className="h-full mr-4">
                <div className="flex flex-col items-center justify-center text-sm my-4 ">
                    <h2 className="self-start flex items-center"><div className="w-3 h-3 rounded-full bg-[#6956E5] mr-1"></div><span>Inactive</span></h2>
                    <h2 className="font-bold text-md pl-2">254</h2>
                </div>
                <div className="flex flex-col items-center justify-center text-sm my-4 ">
                <h2 className="self-start flex items-center"><div className="w-3 h-3 rounded-full bg-[#FB896B] mr-1"></div><span>Active</span></h2>
                    <h2 className="font-bold text-md pl-2">3000</h2>
                </div>
                <div className="flex flex-col items-center justify-center text-sm my-4">
                <h2 className="self-start flex items-center"><div className="w-3 h-3 rounded-full bg-[#F8C07F] mr-1"></div><span>Total</span></h2>
                    <h2 className="font-bold text-md pl-2">3254</h2>
                </div>
            </div>
            <div className="relative">
            <img src={userface} alt="" className=" absolute left-28  top-28 w-24 h-24 z-50   "/>
        <img src={user} className="w-80 h-80 animate-spin animate-[spin_8s_linear_infinite]" alt=""/>
      
            </div>
          </div>
        </div>
            </div>
       
    </div>
    )
};
export default  Acceuil