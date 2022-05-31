import React from "react";


const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
     <div  data-aos="zoom-in" className="flex lg:w-4/5 w-full  m-auto mt-3 flex-between items-center text-[#fff] ">
        <div className=" flex lg:flex-row flex-col items-center justify-center ">
          <ul className="flex lg:flex-col  items-center justify-center mb-0 list-none lg:w-48 w-full pt-3 pb-4  lg:border-r-2 lg:border-b-0 border-b-2 border-[#70AD47] text-[#818aa9]  " role="tablist">
            <li className="-mb-px  last:mr-0 flex-auto text-center my-2">
              <a
                className={
                  "text-md font-bold  pl-3 py-2  block  lg:text-left  " +
                  (openTab === 1
                    ? "  text-[#70AD47] " 
                    : undefined)
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                  esi algiers
              </a>
            </li>
            <li className="-mb-px  last:mr-0 flex-auto text-center my-2">
              <a
                className={
                  "text-md font-bold  pl-3 py-2  block lg:text-left  " +
                  (openTab === 2
                    ? " text-[#70AD47] " 
                    : undefined)
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 cisco acad
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center my-2">
              <a
                className={
                  "text-md font-bold  pl-3 py-2   block lg:text-left   " +
                  (openTab === 3
                    ? "  text-[#70AD47]" 
                    : undefined)
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                codelabs
              </a>
            </li>
            <li className="-mb-px  last:mr-0 flex-auto text-center my-2">
              <a
                className={
                  "text-md font-bold  pl-3 py-2  block  lg:text-left  " +
                  (openTab === 4
                    ? " text-[#70AD47] " 
                    : undefined)
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                  coursera
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0   w-full my-6   ">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block " : "hidden"} id="link1">
                 ccc
                </div>
                <div className={openTab === 2 ? "block  " : "hidden"} id="link2">
                 bbb
                </div>
                <div className={openTab === 3 ? "block " : "hidden"} id="link3">
                 aaa
                </div>
                <div className={openTab === 4 ? "block " : "hidden"} id="link3">
                  hhh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default function TabsRender() {
  return (
    <>
       <Tabs color="[#8701e4]" />
    </>
  );
}