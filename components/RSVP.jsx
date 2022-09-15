// f4c0af
import React from "react";
import Link from "next/link";
import Vl from "./Vl";

function RSVP() {
  return (
    <div
      id="rsvp"
      className="w-full h-fit text-center pt-28 bg-[#f4c0af] regardsBlockStart"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
        <h2 className="py-6 text-[#cd9403]">Yes, I'll Be There</h2>
        <div className="md:w-1/2 lg:w-1/2 sm:w-full m-auto">
          <h4 className="py-1 text-lg tracking-widest text-[#daa520] text-start mt-4">
            <sup>*</sup>First name
          </h4>
          <input className="mb-4" type="text" />
        </div>
        <div className="md:w-1/2 lg:w-1/2 sm:w-full m-auto">
          <h4 className="py-1 text-lg tracking-widest text-[#daa520] text-start mt-4">
            <sup>*</sup>Last name
          </h4>
          <input className="mb-4" type="text" />
        </div>
        <div className="md:w-1/2 lg:w-1/2 sm:w-full m-auto">
          <h4 className="py-1 text-lg tracking-widest text-[#daa520] text-start mt-4">
            <sup>*</sup>Email
          </h4>
          <input className="mb-4" type="text" />
        </div>
        <div className="md:w-1/2 lg:w-1/2 sm:w-full m-auto">
          <h4 className="py-1 text-lg tracking-widest text-[#daa520] text-start mt-4">
            How many guests?
          </h4>
          <input className="mb-4" type="number" />
        </div>
        <div className="md:w-1/2 lg:w-1/2 sm:w-full m-auto">
          <h4 className="py-1 text-lg tracking-widest text-[#daa520] text-start mt-4">
            Comment
          </h4>
          <textarea className="mb-4" type="text" />
        </div>
        <Link href="/#rsvp" target="_self">
            <div className="cursor-pointer border-2 border-[#daa520] text-[#daa520] p-4 max-w-[250px] m-auto my-10">
              Submit
            </div>
          </Link>
      </div>
    </div>
  );
}

export default RSVP;
