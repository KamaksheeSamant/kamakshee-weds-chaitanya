import Head from 'next/head'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import Story from '../components/Story'
import Wedding from '../components/Wedding'
import Navigation from '../components/Navigation'
import RSVP from '../components/RSVP'

// import Image from 'next/image';
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kamakshee weds chaitanya</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <Main/>
      <div className="bg-[#48d8a4] h-[120px] angle1"></div>
      <Story/>
      <div className="bg-[#7689d8] h-[120px] angle2"></div>
      <Wedding/>
      <div className="bg-orange-400 h-[120px] angle3"></div>
      <Navigation/>
      <div className="bg-[#d84242] h-[120px] angle4"></div>
      <RSVP/>
      <footer className="bg-[#d84242] w-full h-fit text-center pt-10 pb-10">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center">
        <div>
            <p className=" text-sm tracking-widest text-[white]">
              © 2022 By Kamakshee & Chaitanya. Proudly created with love.
            </p>
        </div>
      </div>
      </footer>
    </div>
  )
}