import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react"
import {GrAdd} from "react-icons/gr"
import 'swiper/css';
function StaticCircuits({center,setCenter,setYes,yes,setViewport}){
 
    return (
        <div className="absolute flex items-center justify-start   z-50 w-[calc(97%)]  bottom-5  px-5  " >
        <div className="border-dashed border-4 border-[#2400ff] relative  flex flex-col items-center justify-center bg-gradient-to-b from-[#45b6fe] to-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl">
          <GrAdd className="relative text-5xl text-[#2400ff] bottom-5"/>
          <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Ajouter</button>
        </div>
        <div className="w-5/6 ">
        <Swiper watchSlidesProgress={true} slidesPerView={4} className="mySwiper "  >
        
       <SwiperSlide onClick={()=>{
         
         setCenter([
         {
          lng:7.4108,
           lat:26.1898
         },
         {
          lng:8.4101,
           lat:27.1898
         }
       ]); }} className="relative  mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className=" border-4 border-[#2400ff] relative flex flex-col items-center justify-left bg-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  ">
          <div className="flex flex-col p-5 self-start">
          <h1 className="font-bold text-2xl">Alger</h1>
          <p className=" text-lg text-[#6B7280]">Attractions</p>
          <p className=" text-lg text-[#6B7280]">3 jours</p>
          <p className=" text-lg text-[#6B7280]">132 visteurs</p>
          </div>
          <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Modifier</button>
        </div>
       </SwiperSlide>
       <SwiperSlide onClick={()=>{setCenter([
         {
          longitude:9.4108,
           latitude:36.1898
         },
         {
          longitude:9.4101,
           latitude:36.1898
         }
       ]);}} className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className=" border-4 border-[#2400ff] relative flex flex-col items-center justify-left bg-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  ">
          <div className="flex flex-col p-5 self-start">
          <h1 className="font-bold text-2xl">Littoral</h1>
          <p className=" text-lg text-[#6B7280]">Plage</p>
          <p className=" text-lg text-[#6B7280]">3 jours</p>
          <p className=" text-lg text-[#6B7280]">132 visteurs</p>
          </div>
          <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Modifier</button>
        </div>
       </SwiperSlide>
       <SwiperSlide className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className=" border-4 border-[#2400ff] relative flex flex-col items-center justify-left bg-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  ">
          <div className="flex flex-col p-5 self-start">
          <h1 className="font-bold text-2xl">Annaba</h1>
          <p className=" text-lg text-[#6B7280]">Attractions</p>
          <p className=" text-lg text-[#6B7280]">3 jours</p>
          <p className=" text-lg text-[#6B7280]">132 visteurs</p>
          </div>
          <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Modifier</button>
        </div>
       </SwiperSlide>
       <SwiperSlide className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className=" border-4 border-[#2400ff] relative flex flex-col items-center justify-left bg-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  ">
          <div className="flex flex-col p-5 self-start">
          <h1 className="font-bold text-2xl">Tlemcen</h1>
          <p className=" text-lg text-[#6B7280]">Culture</p>
          <p className=" text-lg text-[#6B7280]">3 jours</p>
          <p className=" text-lg text-[#6B7280]">132 visteurs</p>
          </div>
          <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Modifier</button>
        </div>
       </SwiperSlide>
       <SwiperSlide className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className=" border-4 border-[#2400ff] relative flex flex-col items-center justify-left bg-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  ">
          <div className="flex flex-col p-5 self-start">
          <h1 className="font-bold text-2xl">Tizi Ouzou</h1>
          <p className=" text-lg text-[#6B7280]">Culture</p>
          <p className=" text-lg text-[#6B7280]">3 jours</p>
          <p className=" text-lg text-[#6B7280]">132 visteurs</p>
          </div>
          <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Modifier</button>
        </div>
       </SwiperSlide>
       <SwiperSlide className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className=" opacity-70 border-4 border-[#2400ff] relative flex flex-col items-center justify-left bg-gradient-to-b from-[#45b6fe] to-[#fff] z-50  w-[calc(200px)] h-[calc(200px)] mx-5 rounded-xl shadow-2xl  ">
          <div className="flex flex-col p-5 self-start">
          <h1 className="font-bold text-2xl">Setif</h1>
          <p className=" text-lg text-[#6B7280]">Attractions</p>
          <p className=" text-lg text-[#6B7280]">3 jours</p>
          <p className=" text-lg text-[#6B7280]">132 visteurs</p>
          </div>
          <button className=" absolute bottom-3 bg-[#2400FF] text-[#fff] text-xl w-5/6 py-1 rounded-xl">Modifier</button>
        </div>
       </SwiperSlide>
       <SwiperSlide className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
       <div className="  relative flex flex-col items-center justify-left  z-50  w-[calc(200px)] h-[calc(200px)] mx-5   ">
           </div>
       </SwiperSlide>
       </Swiper>
     </div>
        </div>

    )
}
export default StaticCircuits