import React, { useEffect, useState} from "react";

function calculateTimeLeft() {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
}

function Timmer() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout();
    };
  });
  return (
    <div className="flex flex-col justify-center my-10">
      <div className=" flex flex-row justify-center">
        <div className="pl-5 pr-5">
          <h2 className="uppercase text-sm tracking-widest text-[#daa520]">{timeLeft.days}</h2>
          <h2 className="uppercase text-sm tracking-widest text-[#daa520]">
            Days
          </h2>
        </div>
        <div className="pl-5 pr-5">
          <h2 className="uppercase text-sm tracking-widest text-[#daa520]">{timeLeft.hours}</h2>
          <h2 className="uppercase text-sm tracking-widest text-[#daa520]">
            Hours
          </h2>
        </div>
        <div className="pl-5 pr-5">
          <h2 className="uppercase text-sm tracking-widest text-[#daa520]">{timeLeft.minutes}</h2>
          <h2 className="uppercase text-sm tracking-widest text-[#daa520]">
            Mins
          </h2>
        </div>
        <div className="pl-5 pr-5">
          <h2 className="uppercase text-sm tracking-widest text-[#daa520]">{timeLeft.seconds}</h2>
          <h2 className="uppercase text-sm tracking-widest text-[#daa520]">
            Sec
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Timmer;
