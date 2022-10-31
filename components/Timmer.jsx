import React, { useEffect, useState} from "react";

function calculateTimeLeft() {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-12-12`) - +new Date();
    let timeLeft = {};


    // Set the date we're counting down to
    var countDownDate = new Date("Dec 17, 2022 10:00:00").getTime();

    // Update the count down every 1 second

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    if (distance > 0) {
      timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60)
      };
    }

    console.log(">>>>",timeLeft)
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    return timeLeft;
}

function Timmer() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
console.log("okokokok")
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
