import React, { useEffect, useState } from 'react'

function Play() {
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
     <div className='w-full h-full overflow-hidden'>
        
    <div data-scroll data-scroll-section
    data-scroll-speed="-.8" className="bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover w-full h-screen bg-center mb-10  ">
        <div className='flex  place-items-center justify-center  gap-10 py-[20vh]'>
        <div className='h-80 w-80 rounded-full bg-white flex items-center justify-center'>
        <div className='eye h-40 w-40 bg-black rounded-full flex items-center justify-center text-white text-left'>
            <div className='pupil w-6 h-6 rounded-full bg-white'></div>
        </div>
        </div>
        <div className='h-80 w-80 rounded-full bg-white flex items-center justify-center'>
        <div className='eye h-40 w-40 bg-black rounded-full flex items-center justify-center text-white text-left'>
            <div className='pupil w-6 h-6 rounded-full bg-white'></div>
        </div>
        </div>
        </div>
    </div>
     </div>
  )
}

export default Play