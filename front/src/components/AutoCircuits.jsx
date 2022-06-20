import { Swiper, SwiperSlide } from 'swiper/react';

import {GrAdd} from "react-icons/gr"
import 'swiper/css';
function AutoCircuits(){
    return (
        <div className="absolute flex items-center justify-start   z-50 w-[calc(97%)] bottom-5 px-5 " >
        
        <div className="w-full px-5">
        <Swiper watchSlidesProgress={true} slidesPerView={5} className="mySwiper "  >
        {/* <span slot="container-start">Container Start</span>
 <span slot="container-end">Container End</span>
 <span slot="wrapper-start">Wrapper Start</span>
 <span slot="wrapper-end">Wrapper End</span> */}
       {/* <SwiperSlide className="relative  mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
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
       <SwiperSlide className="relative z-0 mx-2  cursor-pointer h-fit w-fit rounded flex items-center justify-center">
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
       </SwiperSlide> */}
      {/* <SwiperSlide className="relative z-0 mx-5  cursor-pointer h-44 rounded flex items-center justify-center"><img src={slide7} className="w-44 h-44" alt=""/></SwiperSlide> */}
     </Swiper>
     </div>
        </div>

    )
}
export default AutoCircuits