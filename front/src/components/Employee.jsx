import {useState,useEffect} from "react"
import {AiFillDelete} from "react-icons/ai"
function Employee({Fname,Lname,code,wilaya,deleteEmployee,id}){

  return (
      <div className="w-11/12 m-auto bg-[#fff] shadow-lg grid grid-cols-5 px-10 py-3  text-xl rounded-2xl border-2 border-[#2400ff] my-5">
          <div>{Lname}</div>
          <div>{Fname}</div>
          <div>{code}</div>
          <div>{wilaya}</div>
          <div><AiFillDelete onClick={()=>deleteEmployee({id})} className="hover:text-[#f00] cursor-pointer"/></div>
      </div>
  )
    
};
export default  Employee