import SignIn from "../0.login/SigIn"
import HomeImage from "/public/brandbird.png"
import '/home/kartik/E/vs/React/koiNiHotaHai/route/src/style.css'
import React, { useState } from 'react';

const Portfolio = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleJoinClick = () => {
    setShowSignIn(true);
  };

  return (
    <div className="relative w-screen h-screen">
        <img src="/public/newwb.jpg" className="absolute -z-1"></img>
      <div className={`absolute top-52 left-[20%] w-80 h-96 text-4xl text-cyan-800 font-bold p-8 pt-14 bg-gradient-to-b from-slate-600 via-orange-400 to-slate-600 text-center rounded-lg duration-500 hover:z-10 hover:duration-500 hover:scale-105 glowing-border ${showSignIn ? 'opacity-0' : 'opacity-100'}`}>
        <div>
          Welcome! to Anime-Verse. Join Anime verse community
        </div>
        <button onClick={handleJoinClick} className="mt-10 p-2 w-full text-xl bg-sky-700 rounded-lg">
          JOIN
        </button>
      </div>

      <div className={`absolute top-52 left-[50%] w-80 h-96 p-8 py-20 bg-gradient-to-b from-slate-600 via-orange-400 to-slate-600 text-center text-4xl font-bold rounded-lg duration-500 hover:z-10 hover:duration-500 hover:scale-105 glowing-border ${showSignIn ? 'opacity-0' : 'opacity-100'}`}>
        <div>Don't want to Sign in now, just proceed here..</div>
        <a href="/" className="mt-32 p-2 w-full text-center text-xl bg-sky-700 rounded-lg">
          Continue
        </a>
      </div>
      <div className={`absolute top-28 left-[35%] p-6  w-80 h-96 bg-gradient-to-b from-slate-600 via-orange-400 to-slate-600 text-center text-4xl font-bold rounded-lg duration-500 hover:z-10 hover:duration-500 hover:scale-105 glowing-border ${showSignIn ? 'opacity-0' : 'opacity-100'}`}>
        Ready to dive back into the world of anime? Discover, rate, and review anime on AnimeVerse.
        <div className="text-center mt-4">
        </div>
      </div>
      {showSignIn && (
        <div className="form w-screen h-screen flex justify-center items-center ">
          
          <SignIn />
        </div>
      )}
    </div>
  )
}

export default Portfolio;






        // <div className="h-screen w-screen overflow-y-hidden bg-gradient-to-r from-[#65738B] to-[#252B33]">
        //     <div className="absolute -top-20 -left-48 h-max-screen scale-75 HomeBgImage">
        //         <img src={HomeImage} alt="Home Image"/>
        //     </div>
        //     <div className="absolute right-5 top-44">
        //         <SignIn />
        //     </div>
        // </div>