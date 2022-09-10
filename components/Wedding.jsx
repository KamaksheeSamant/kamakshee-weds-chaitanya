import React from "react";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { location } from "react-icons-kit/icomoon/location";
import { clock } from "react-icons-kit/icomoon/clock";
import Vl from "./Vl";

function Wedding() {
  return (
    <div className="w-full h-fit text-center pt-28 bg-[#7689d8] weddingEnd" id="wedding">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
        <div>
          <Image
            className=""
            src="/assets/twoStates.png"
            alt="logo"
            width="200"
            height="300"
          />
          <h2 className="py-6 text-[#fcf3c9]">The Details</h2>
          <div className="flex align-center justify-evenly py-8">
            <div style={{ color: "#fcf3c9" }}>
              <Icon size={64} icon={clock} />
              <h3 className="py-4 text-[#fcf3c9] font-serif">
                When
              </h3>
            </div>
            <Vl color="#fcf3c9"/>
            <div style={{ color: "#fcf3c9" }}>
              <Icon size={64} icon={location} />
              <h3 className="py-4 text-[#fcf3c9] font-serif">
                Where
              </h3>
            </div>
          </div>
          <div className="flex align-center justify-around">
            <p className="py-4 text-lg tracking-widest text-[#fcf3c9] w-1/2">
              December 17, 2023, 9:00 AM
            </p>
            <p className="py-4 text-lg tracking-widest text-[#fcf3c9] w-1/2">
              Swatantriyveer Savarkar Marg, Opp.Catering College, Dadar West, Dadar, Mumbai, Maharashtra 400028, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wedding;
