import React from "react";
import { Icon } from "react-icons-kit";
import { ic_commute } from "react-icons-kit/md/ic_commute";
import { ic_directions_car } from "react-icons-kit/md/ic_directions_car";
import { ic_airplanemode_active } from "react-icons-kit/md/ic_airplanemode_active";
import Vl from "./Vl";

function Navigation() {
  return (
    <div
      id="navigation"
      className="w-full h-fit text-center pt-28 bg-orange-400 regardsBlockStart"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center flex flex-col">
        <h2 className="py-6 text-[#fcf3c9]">Getting There</h2>
        <Vl color="#fcf3c9" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15087.679568863266!2d72.8340227!3d19.0232513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2c16493b9d0a73b7!2sSuryavanshi%20Kshatriya%20Sabhagruha%20And%20Banquet%20Hall!5e0!3m2!1sen!2sau!4v1662802535850!5m2!1sen!2sau"
          width="70%"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{
            marginRight: 0 + "em",
            borderLeft: "20px solid #d84242",
            borderTop: "20px solid #d84242",
            maxWidth: "600px"
          }}
        ></iframe>

        <div className="flex align-center justify-evenly py-8 mt-14 w-full">
          <div style={{ color: "#fcf3c9" }}>
            <Icon size={64} icon={ic_directions_car} />
            <h3 className="py-4 text-[#fcf3c9] font-serif">By Car/ Taxi</h3>
          </div>
          <Vl color="#fcf3c9" />
          {/* <div style={{ color: "#fcf3c9" }}>
            <Icon size={64} icon={ic_commute} />
            <h3 className="py-4 text-[#fcf3c9] font-serif">By Train/Bus</h3>
          </div> */}
          {/* <Vl color="#fcf3c9" /> */}
          <div style={{ color: "#fcf3c9" }}>
            <Icon size={64} icon={ic_airplanemode_active} />
            <h3 className="py-4 text-[#fcf3c9] font-serif">By Flight</h3>
          </div>
        </div>
        <div className="flex align-center justify-around w-full pb-20">
          <p className="p-4 text-lg tracking-widest text-[#fcf3c9] w-1/3">
            Takes 20 mins from Dadar station(W)
          </p>
          {/* <p className="p-4 text-lg tracking-widest text-[#fcf3c9] w-1/3">
            Get down at Dadar station(W), then catch Bus (No. )
          </p> */}
          <p className="p-4 text-lg tracking-widest text-[#fcf3c9] w-1/3">
            Drive ~1 hours from Chhatrapati Shivaji Maharaj International Airport
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
