import React from "react";
import Link from "next/link";
import Timmer from './Timmer';
import Vl from './Vl';

function Main() {
  return (
    <div id="main" className="w-full h-fit text-center pt-28 mainEnd">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
        <div className="flex flex-col justify-center">
           <Timmer/>
            <p className=" py-1 text-lg tracking-widest text-[#daa520]">
              Together with their families
            </p>
            <h1 className="py-4 text-[#daa520] font-serif">
                KAMAKSHEE 
            </h1>
            <h1 className="py-4 text-[#daa520] font-serif">
                AND 
            </h1>
            <h1 className="py-2 text-[#daa520] font-serif">
                CHAITANYA
            </h1>
            <p className="py-1 text-lg tracking-widest text-[#daa520]">
              joyfully invite you to their wedding celebration
            </p>
            <Vl/>
            <h2 className="py-2 text-[#daa520]">December 17, 2022</h2>
            <p className="py-1 text-lg tracking-widest text-[#daa520]">
              At Suryavanshi
            </p>
            <Link href="/#wedding" target="_self"><span className="cursor-pointer border-2 border-[#daa520] text-[#daa520] p-4 max-w-[250px] m-auto my-10">More details</span></Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
