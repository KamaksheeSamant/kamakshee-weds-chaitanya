import React from "react";
import Vl from "./Vl";

function Regards() {
  return (
    <div id="regards" className="w-full h-fit text-center pt-28 bg-[#d84242]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
        <h2 className="py-6 text-[#fcf3c9]">With Love and Regards</h2>
        <Vl color="#fcf3c9" />
        <p className="py-1 text-lg tracking-widest text-[#fcf3c9]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default Regards;