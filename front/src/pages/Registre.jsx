import React from "react"
import logo from "../assets/logo.png"
import back from "../assets/back2.png"
import axios from "axios";
import { useRef, useState } from "react";
function Registre({setUserConnected}){
    const [error, setError] = useState(false);
    const [match, setMatch] = useState(true);
    const firstNameRef = useRef();
    const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    {console.log(newUser)}
    try {
        {console.log("yy")}
      const res=await axios.post("/employee/register ", newUser);
      {console.log("yysss")}
      setUserConnected(newUser)
      setError(false)
    } catch (err) {
        setError(true)
    }
  };
    return (
    <div className="registre bg-[#333] w-screen h-screen items-center justify-left " >
        <div className="w-1/3 h-screen bg-[#fff] flex flex-col items-center justify-between py-12">
            <div><img src={logo} className="w-16 h-20" alt=""/></div>
           <div className="flex flex-col items-center justify-center w-full">
           <h1 className="font-bold text-5xl mb-5">Register</h1>
           <h2 className=" text-2xl text-[#8C8B8B] mb-8">Create your account</h2>
           <form action="" className="w-full flex flex-col items-center justify-center text-xl " onSubmit={handleSubmit}>

               <div className="w-5/6 mb-3 flex ">
                 <input className="rounded w-full outline-none border-2 border-[#C4C4C4] p-4 mr-2" type="text" placeholder="First Name" ref={firstNameRef}/>
                 <input className="rounded w-full outline-none border-2 border-[#C4C4C4] p-4 ml-2" type="text" placeholder="Last Name" ref={lastNameRef}/>
               </div>
               <div className="w-5/6 mb-3">
               <input className="rounded w-full outline-none border-2 border-[#C4C4C4] p-4" type="email" placeholder="Email Employee" ref={emailRef}/>
               </div>


               <div className="  w-5/6 mb-3">
                   <input className="rounded  w-full outline-none border-2 border-[#C4C4C4] p-4 pr-12" type="password" placeholder="Password" ref={passwordRef}/>
               </div>
               <div className="  w-5/6 mb-8">
                   <input className={match? "rounded  w-full outline-none border-2 border-[#C4C4C4] p-4 pr-12":"rounded  w-full outline-none border-2 border-[#FF0000] p-4 pr-12"} type="password" placeholder="Confirm Password" ref={cpasswordRef}  onChange={(e)=>{
                    {console.log(e.target.value,passwordRef.current.value)}
                    if (e.target.value!==passwordRef.current.value){
                       
                       setMatch(false)
                     }else{
                       setMatch(true)
                     }
                   }} />

               </div>
               
               
               <div className="w-5/6 mb-3">
                   <input  className="font-bold text-[#fff] rounded w-full outline-none bg-[#2400FF] p-4 mb-3 cursor-pointer hover:opacity-80"  type="submit" value="Register"/>
               </div >
               {error && <div className="w-5/6 mb-3 flex items-center justify-center">
                   <h1 className="text-[#FF0000] text-lg">Oops une erreur quelque part</h1>
               </div>}
              

             
           </form>
           </div>
           <div>
                <h2>Alreaady have an account? <a className="font-bold text-[#2400FF]" href="/login">Login</a></h2>
           </div>
        </div>
    </div>
    )
};
export default Registre