import React from 'react'
import "./Home.css"
import ReactSimplyCarouselExample from "./Carusel";
import { useRef } from 'react';


function Home() {
  
const scollToRef = useRef();
  // const App = () => {
  //   const scollToRef = useRef();
  //   return (
  //     <div className="container">
  //       <button onClick={() => scollToRef.current.scrollIntoView()}>
  //         Scroll
  //       </button>
  //       <div ref={scollToRef}>scroll Me</div>
  //     </div>
  //   );
  // };

  return (
    <div>
      <div id='main-img'>
        <img id='image' src="https://wallpaperboat.com/wp-content/uploads/2020/10/23/57974/real-estate-07.jpg" alt="" />
      </div>
      <div id='position-divs'>
          <h1 id='intrudoction'>
            "Unlocking your real estate dreams, one property at a time!"
          </h1>
          <h1>stomtape yabem sharmota</h1>
      </div>
      <div id='carusle'>
        <ReactSimplyCarouselExample />
      </div>
      <div id='about-us-section' ref={scollToRef}>
        <h1>About-us</h1>
        <h2 id='about-us'>
        Welcome to PROperty! We are a dedicated team of professionals committed to providing exceptional service and outstanding results. With extensive market knowledge and personalized guidance, we make your real estate journey smooth and stress-free. Whether buying, selling, or investing, trust us to deliver transparent communication, integrity, and expertise. Contact us today to turn your real estate dreams into reality.
        </h2>
      </div>
    </div>
  )
}




export default Home