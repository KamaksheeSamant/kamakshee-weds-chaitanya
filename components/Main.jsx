import React, { useState,useEffect } from "react";
// import { collection, getDocs } from "@firebase/firestore";
import Link from "next/link";
import Image from "next/image";
import Timmer from "./Timmer";
import Vl from "./Vl";
// import { db } from '../firebase.config';

function Main() {
  // const {students,setStudents} = useState([]);
  // const studentsRef = collection(db,"students");
  // useEffect(()=>{
  //   const getStudents = async() =>{
  //     const data = await getDocs(studentsRef);
  //     console.log(">>>>>",data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     // setStudents();
  //     // console.log("students >>>>>",students);
  //   }
  //   getStudents();
  // },[studentsRef,setStudents,students]);
  return (
    <div id="main" className="w-full h-fit text-center pt-28 mainEnd">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
        <div className="flex flex-col justify-center">
          <div>
            <Image
              className="w-60 h-60 max-w-[200px]"
              src="/assets/bappa.png"
              alt="logo"
              width="200"
              height="200"
            />
          </div>
          <Timmer />
          <p className=" py-1 text-lg tracking-widest text-[#daa520]">
            Together with our families
          </p>
          <h1 className="py-4 text-[#daa520] font-serif">KAMAKSHEE</h1>
          <p className="py-1 text-lg tracking-widest text-[#daa520]">
            (D/o. Shri Deepak and Smt. Aarti Samant)
          </p>
          <h1 className="py-4 text-[#daa520] font-serif">AND</h1>
          <h1 className="py-2 text-[#daa520] font-serif">CHAITANYA</h1>
          <p className="py-1 text-lg tracking-widest text-[#daa520]">
            (S/o. Shri Suhas and Smt. Vidya Gunishastri)
          </p>
          <p className="py-4 text-lg tracking-widest text-[#daa520]">
            joyfully invite you to our wedding celebration
          </p>
          <Vl />
          <h2 className="py-2 text-[#daa520]">December 17, 2022</h2>
          <p className="py-1 text-lg tracking-widest text-[#daa520]">
            At Suryavanshi Banquet
          </p>
          <Link href="/#wedding" target="_self">
            <div className="cursor-pointer border-2 border-[#daa520] text-[#daa520] p-4 max-w-[250px] m-auto my-10">
              More details
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
