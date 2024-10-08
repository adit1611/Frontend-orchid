import React, { useState } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div data-scroll-section>
      <div
        data-scroll
        data-scroll-speed="-0.3"
        className="w-screen h-[90vh] bg-slate-300"
      >
        <div className="w-full h-[50vh] font-['Founders Grotext'] text-6xl font-bold uppercase pt-10 m-10 leading-[6vw] tracking-tighter text-[#212121]">
          <h1>We create</h1>

          <div className="flex w-full">
            <img
              src="./src/assets/content-image01.jpg"
              className="h-28 w-[9vw] rounded-lg mx-4"
              alt="Content"
            />
            <h1 className="w-full">eye-opening</h1>
          </div>
          <h1>presentations</h1>
        </div>
        <div className="border-t-2 border-s-teal-200 flex justify-between p-10 text-lg">
          <span>For public and private companies</span>
          <span>From the first pitch to IPO</span>
          <div className="flex space-x-4 hover:text-white">
            <div
              className={`h-10 w-44 text-center pt-1.5 border-2 border-stone-200 uppercase rounded-full ${
                isHover ? "bg-slate-700" : "bg-none"
              } transition-all duration-300`}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <a href="#">start the project</a>
            </div>
            <div
              className={`h-8 w-8 text-center p-2 border-2 border-stone-200 uppercase rounded-full rotate-45 ${
                isHover ? "bg-slate-700" : "bg-none"
              } transition-all duration-300`}
            >
              <FaArrowUpLong />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
