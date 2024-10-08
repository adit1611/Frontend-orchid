import React, { useEffect } from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

function Display() {

  useEffect(() => {
    const eyes = document.querySelectorAll('.eye');
    
    const handleMouseMove = (e) => {
      eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX);
        const pupilX = Math.cos(angle) * (rect.width / 4);
        const pupilY = Math.sin(angle) * (rect.height / 4);

        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div data-scroll data-scroll-section
    data-scroll-speed=".1" className='h-screen w-full p-40 text-black font-extrabold bg-[#CDEA68] '>
      <div className='h-full justify-center mx-60 my-10'>
        <h1 className='absolute text-center -mt-48 uppercase -ml-48 -z-0'>
          <span className='text-[160px]'>Ready</span><br />
          <span className='text-[160px] -ml-28'>to start
          </span><br />
          <span className='text-[160px] -ml-36'>the project ?
          </span>
        </h1>
        <div className='h-80 w-80 rounded-full flex items-center justify-center -mt-10 ml-10 z-10'>
          <div className='flex place-items-center justify-center gap-28'>
            <div className='eye-container h-60 w-60 rounded-full bg-white flex items-center justify-center -mt-14'>
              <div className='eye h-28 w-28 bg-black rounded-full flex items-center justify-center'>
                <div className='pupil w-5 h-5 rounded-full bg-white'></div>
              </div>
            </div>
            <div className='eye-container h-60 w-60 rounded-full bg-white flex items-center justify-center'>
              <div className='eye h-28 w-28 bg-black rounded-full flex items-center justify-center'>
                <div className='pupil w-5 h-5 rounded-full bg-white'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="h-16 w-80 text-center uppercase bg-gray-800 flex  text-lg p-4  rounded-3xl hover:bg-black gap-10 mx-[40%] my-20 relative group">
      <span className='text-white'>View All Case Studies</span>
  <div className="bg-white h-2 w-2 text-center -py-1 -px-1.5 text-transparent text-xs rounded-full group-hover:text-black rotate-45 mt-2 scale-2 transform transition-transform duration-300 group-hover:scale-150 group-hover:h-6 group-hover:w-6 group-hover:text-lg">
  <FaArrowUpLong/>
  </div>
  </button>
    </div>
  );
}

export default Display;
