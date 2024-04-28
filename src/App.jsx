import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar';
import Home from './pages/1.home/Home';
import Services from './pages/2.services/Services';
import Portfolio from './pages/3.portfolio/Portfolio';
import Contact from './pages/4.contact/Contact';
import Footer from './components/footer/Footer'
import SlidingLoginForm from './pages/0.login/toggleLogin'
import SigIn from "./pages/0.login/SigIn"

function App() {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
      <div>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/show' element={<Services />} />
              <Route exact path='/login' element={<Portfolio />} />
              <Route exact path='/about' element={<Contact 
                     userId="sandy"
                     emailId="sandy4645@gmail.com"
                     password="sandyFromDelhi"
              />} />
            </Routes>
          </Router>
      </div>
      




    // <div className="w-screen flex h-screen overflow-hidden relative">
    //   <div className="w-[25%] border border-green-400 bg-gradient-to-r from-gray-300 to-[#4ca2cd]">
    //         <p className='text-emerald-700 font-extrabold font-mono text-4xl mt-[10rem]'>
    //           Welcome To anime Verce!
    //           <ul className="list-disc" >
    //             <li>binge watch your fav Anime</li>
    //             <li>Lauda Lasan</li>
    //             <li>And Bhat</li>
    //           </ul>
    //         </p>
    //   </div>
    //   <div className="w-[75%] border border-pink-600 relative bg-gradient-to-r from-[#4ca2cd] to-gray-700 via-purple-400">
    //     <div className="shadoWala -z-1 w-[95%] h-[85%] absolute bottom-0">

    //     </div>
    //     <img src={Image} className="pr-0 w-full h-full object-cover absolute" />
    //   </div>
    //   <div
    //     className="absolute top-[10rem] right-[24rem]"
    //     onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
    //   >
    //     <SigIn />
    //   </div>
    // </div>
  );
}

export default App;
