import {useState,useEffect,useRef} from "react"
import {GoogleMap,useLoadScript,Marker} from "@react-google-maps/api"
import StaticCircuits from "../components/StaticCircuits"
import axios from "axios"
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"

import Employee from "../components/Employee"
import {BsPlusLg} from "react-icons/bs"
import {FiSearch} from "react-icons/fi"
import {FaWindowClose} from "react-icons/fa"
function Employes(){
  const [error, setError] = useState(false);
    const [match, setMatch] = useState(true);
    const firstNameRef = useRef();
    const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const wilayaRef = useRef();
  const [visible,setVisible]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      wilaya: wilayaRef.current.value,
    };
    {console.log(newUser)}
    try {

      const res=await axios.post("/employee/register ", newUser);
      
     
      setError(false)
      setCreate(false)
    } catch (err) {
        setError(true)
    }
  };
    const [employees,setEmployees]=useState([])
    const [create,setCreate]=useState(false)
    const getEmployees=async ()=>{
      const res=await axios.get("/employee/getAll")
      setEmployees(res.data.Employees)  
    }
    const deleteEmployee=async ({id})=>{
      //  console.log("/employee/delete/"+id)
        await axios.delete(`/employee/delete/${id}`)
    }
    useEffect(()=>{
      try {
        // console.log("object")
        // const res = await axios.get("/circuits/getAll");
        
        //  setStaticCircuits(res.data.Circuits);
        //  console.log(staticCircuits)
        setInterval(() => {
          getEmployees()
        },100);
        
       
      } catch (err) {
        console.log(err.message)
      }
    },[])
   
return (
    <div   className=" relative  w-full h-[calc(100vh-140px)]  mt-[calc(100px)] " >
      <div className="relative block mb-24 flex items-center justify-between w-full">
      <div className="relative w-1/3 ml-10">
           <input type="text" name="" id="" className="absolute top-2 border-2 border-[#c4c4c4] left-5 z-30 outline-none rounded-xl w-full py-2 text-lg pl-3 pr-16" placeholder="Recherche un employee..."/>
           <FiSearch className="absolute right-0 top-4 text-[#c4c4c4] z-50 text-3xl"/>
       </div>
        <button  onClick={()=>setCreate(true)} className="absolute flex items-center justify-center  w-fit h-fit top-3 right-16
           font-bold bg-[#2400ff] text-[#fff] border-2 border-[#2400ff] w-fit py-2 px-2   rounded-lg  text-lg">
             <span>Ajouter</span>
             <BsPlusLg className="text-xl ml-1"/>
       </button>

      </div>
      <div   className="h-fit">
      <div className="w-11/12 m-auto bg-[#fff]  grid grid-cols-5 px-10 py-3  text-xl border-b-2 border-[#2400ff] my-5">
          <div>Nom</div>
          <div>Prenom</div>
          <div>Email</div>
          <div>Wilaya</div>
          <div></div>
      </div >
      <div className="w-full h-full overflow-y-scroll">
        {employees  && employees.map((employee,index)=>{if(!employee.admin) return (<Employee deleteEmployee={deleteEmployee} id={employee._id} key={index} Lname={employee.lastName} Fname={employee.firstName} code={employee.email} wilaya={employee.wilaya}/>)})}
      </div>
      </div>
      <div onClick={()=>setCreate(false)}  className={create? "blur absolute h-full w-full top-0 z-30 bg-[#000] opacity-40":"hidden"}>
      </div>
      <div className={create? " m-auto border-2 border-[#2400ff] w-fit h-fit absolute top-0 left-0 right-0 bottom-0 z-50 bg-[#fff] rounded-xl px-3 py-6":"hidden"}>
        <h1 className="text-2xl font-bold w-fit m-auto mb-5">Ajout d'un nouvel employé</h1>
        <form action="" className="w-full flex flex-col items-center justify-center text-xl " onSubmit={handleSubmit}>

<div className="w-5/6 mb-3 flex ">
  <input className="rounded w-full outline-none border-2 border-[#C4C4C4] p-2 mr-2" type="text" placeholder="Prenom" ref={firstNameRef}/>
  <input className="rounded w-full outline-none border-2 border-[#C4C4C4] p-2 ml-2" type="text" placeholder="Nom" ref={lastNameRef}/>
</div>
<div className="w-5/6 mb-3">
<input className="rounded w-full outline-none border-2 border-[#C4C4C4] p-2" type="email" placeholder="Email Employé" ref={emailRef}/>
</div>

<div className="w-5/6 mb-3">
<input className="rounded w-full outline-none border-2 border-[#C4C4C4] p-2" type="text" placeholder="Wilaya" ref={wilayaRef}/>
</div>
<div className=" relative w-5/6 mb-1">
               <input className="rounded  w-full outline-none border-2 border-[#C4C4C4] p-2 pr-12" type={visible? "text":"password"} placeholder="Mot de passe" ref={passwordRef}/>
               <button className=" absolute right-4 top-2 text-[#c4c4c4] text-3xl" onClick={(e)=>{
                   e.preventDefault()
                   setVisible(!visible)}
                   }>{visible? <AiOutlineEye/>:<AiOutlineEyeInvisible/>}</button>
               </div>
{/* <div className="  w-5/6 mb-8">
    <input className={match? "rounded  w-full outline-none border-2 border-[#C4C4C4] p-4 pr-12":"rounded  w-full outline-none border-2 border-[#FF0000] p-4 pr-12"} type="password" placeholder="Confirm Password" ref={cpasswordRef}  onChange={(e)=>{
     {console.log(e.target.value,passwordRef.current.value)}
     if (e.target.value!==passwordRef.current.value){
        
        setMatch(false)
      }else{
        setMatch(true)
      }
    }} />

</div> */}


<div className="w-5/6 mb-3 mt-3">
    <input  className="font-bold text-[#fff] rounded w-full outline-none bg-[#2400FF] p-2 mb-3 cursor-pointer hover:opacity-80"  type="submit" value="Ajouter"/>
</div >
{error && <div className="w-5/6 mb-3 flex items-center justify-center">
    <h1 className="text-[#FF0000] text-lg">Oops une erreur quelque part</h1>
</div>}



</form>
        <FaWindowClose onClick={()=>setCreate(false)} className="absolute text-2xl top-2 right-2 text-[#2400ff] " />
      </div>
      
    </div>
)    
};
export default  Employes