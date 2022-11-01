import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "react-icons-kit";
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
            <p className="p-6 text-lg tracking-widest text-[#fcf3c9] w-1/2">
              <p>on Saturday, 17th December 2022</p>
              <p>Muhurtham ~ 12.33pm</p>
              <p>followed by Lunch and Reception</p>
            </p>
            <p className="p-6 text-lg tracking-widest text-[#fcf3c9] w-1/2">
              Suryavanshi Banquet, 2nd Floor, Gate No. 3, 300, Veer Savarkar Marg, Opp. Dadar Catering college, Dadar (W), 
              Mumbai - 400 028.
            </p>
          </div>

          {/* <Link href="/#rsvp" target="_self">
            <div className="cursor-pointer border-2 border-[#fcf3c9] text-[#fcf3c9] p-4 max-w-[250px] m-auto my-10">
              RSVP
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Wedding;
