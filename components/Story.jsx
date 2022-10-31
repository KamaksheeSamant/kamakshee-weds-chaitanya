import React from "react";
import Image from "next/image";
import Vl from "./Vl";

function Story() {
  return (
    <div
      id="story"
      className="w-full h-fit text-center pt-28 bg-[#48d8a4] storyBlockEnd"
    >
      <div className="w-full h-full mx-auto p-2 justify-center items-center pb-16 max-w-[750px]">
        <Image
          className=""
          src="/assets/us_pic.png"
          alt="logo"
          width="400"
          height="400"
        />
        <h2 className="py-6 text-[#fcf3c9]">Our Story</h2>
        <Vl color="#fcf3c9"/>
        <p className="py-1 text-lg tracking-widest text-[#fcf3c9]">
          Hey Hi, Do you have your DBMS mini project? Can you share it with me? This was our first communication back in our college days. Who knew that this simple conversation would lead us to a bond that will eventually result in us spending our whole lives together. It is rightly said that destiny is written and God in some way leads us to people who are meant to be for us for lifetime. This led to many late night chats, meeting each other secretly, spending time together in/outside college(bunking lectures), eventually leading us to falling in love with each other with the official relationship anniversary being 13th Feb 2014. Over the last 8 years, we have come across many ups and downs in life, but we have weathered the storms and stuck to each other. The years gone by have taught us many things life. There was a time when Kamakshee had to move to Australia for work and the phase of long distance relationship was upon us. Due to the time difference and lack of giving each other time, we had innumerable fights, arguments, misunderstandings which was very difficult to handle, which grew even more when I had to travel to LA for work. But as they say, what is meant to last will heal and grow stronger and we are here together and on the verge of tying the knot. We seek your blessings and wishes as we enter our new phase of our lives!!
        </p>
      </div>
    </div>
  );
}

export default Story;
