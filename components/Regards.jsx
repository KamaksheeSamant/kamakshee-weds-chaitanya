import React from "react";
import Vl from "./Vl";

function Regards() {
  return (
    <div id="regards" className="w-full h-fit text-center pt-28 bg-[#d84242]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
        <h2 className="py-6 text-[#fcf3c9]">With Best Compliments From</h2>
        <Vl color="#fcf3c9" />
        <p className="py-1 text-lg tracking-widest text-[#fcf3c9]">
              Near and Dear ones
        </p>
        <div className="flex align-center justify-around">
            <p className="p-6 text-lg tracking-widest text-[#fcf3c9] w-1/2">
              <p className="py-1 text-lg tracking-widest text-[#fcf3c9]">
                Groom`s Addresss:
              </p>
              <p className="py-1 text-lg tracking-widest text-[#fcf3c9]">
                001, Siddha Ratnakar, Prabhanagar, Prabhadevi, Mumbai - 400 025.
              </p>
              <p className="py-1 text-lg tracking-widest text-[#fcf3c9]">
                Contact No. : +91 98192 20514
              </p>
            </p>
            <p className="p-6 text-lg tracking-widest text-[#fcf3c9] w-1/2">
              <p className="py-1 text-lg tracking-widest text-[#fcf3c9]">
                Bride`s Addresss:
              </p>
              <p className="py-1 text-lg tracking-widest text-[#fcf3c9]">
                A-809, Floor-8, Shree Sathi Aasara Co Op Housing Society LTD, Swapna safalya, New Prabhadevi Road, Mumbai - 400 025.
                Landmark: Opposite Samana press.
              </p>
              <p className="py-1 text-lg tracking-widest text-[#fcf3c9]">
                Contact No. : +91 99694 24357, +91 97571 69544
              </p>
            </p>
          </div>
      </div>
    </div>
  );
}

export default Regards;
