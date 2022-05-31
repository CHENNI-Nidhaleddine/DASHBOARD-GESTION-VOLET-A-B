import React from "react"
import logo from "../assets/logo.png"
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useRef, useState } from "react";

function Connect({setUserConnected,myStorage}){
    const navigate = useNavigate();
    const [visible,setVisible]=React.useState(false)
    const [error, setError] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        };
        try {
            setError(false);
          const res = await axios.post("/employee/login", user);
          setUserConnected(res.data.employee);
          myStorage.setItem('user', res.data.employee);
         
        } catch (err) {
          setError(true);
        }
      };
    return (
    <div className="login bg-[#333] w-screen h-screen items-center justify-left " >
        <div className="w-1/3 h-screen bg-[#fff] flex flex-col items-center justify-between py-12">
            <div><img src={logo} className="w-16 h-20" alt=""/></div>
           <div className="flex flex-col items-center justify-center w-full">
           <h1 className="font-bold text-5xl mb-5">Login</h1>
           <h2 className=" text-2xl text-[#8C8B8B] mb-8">Login to your account</h2>
           <form action="" className="w-full flex flex-col items-center justify-center text-xl " onSubmit={handleSubmit}>
               <div className="w-5/6 mb-3">
               <input className="rounded w-full outline-none border-2 border-[#C4C4C4] p-4" type="email" placeholder="Email" ref={emailRef}/>
               </div>
               <div className=" relative w-5/6 mb-1">
               <input className="rounded  w-full outline-none border-2 border-[#C4C4C4] p-4 pr-12" type={visible? "text":"password"} placeholder="Password" ref={passwordRef}/>
               <button className=" absolute right-4 top-4 text-[#c4c4c4] text-3xl" onClick={(e)=>{
                   e.preventDefault()
                   setVisible(!visible)}
                   }>{visible? <AiOutlineEye/>:<AiOutlineEyeInvisible/>}</button>
               </div>
               <div  className=" w-5/6 flex items-right justify-end mb-8 ">
               <h2 className=" w-fit text-sm">forgot password?</h2>
               </div>
               <div className="w-5/6 mb-3">
                   <input  className="font-bold text-[#fff] rounded w-full outline-none bg-[#2400FF] p-4 mb-3 cursor-pointer hover:opacity-80"  type="submit" value="Login"/>
               </div>
               

              <div className=" w-5/6 flex items-center justify-start mb-2 ">
              <input className="w-5 h-5 flex items-center" type="checkbox" id="rememberme" name="rememberme" value="rememberme"/>
              <label className=" w-fit text-sm ml-3  flex items-center" for="rememberme">Keep me logged</label>
              </div>
              {error && <div className="w-5/6 mb-3 flex items-center justify-center">
                   <h1 className="text-[#FF0000] text-lg">Oops faux mot de passe</h1>
               </div>}
           </form>
           </div>
           <div>
                <h2>Don't have an account? <a className="font-bold text-[#2400FF]" href="/register">Register</a></h2>
           </div>
        </div>
    </div>
    )
};
export default Connect

