import React, { useEffect } from "react";

const EyeFollow = () => {


    

  return (
    <div className="flex justify-center space-x-16">
      <div className="eye relative w-36 h-36 bg-white rounded-full border-2 border-black flex items-center justify-center overflow-hidden">
        <div className="pupil absolute w-12 h-12 bg-black rounded-full"></div>
      </div>
      <div className="eye relative w-36 h-36 bg-white rounded-full border-2 border-black flex items-center justify-center overflow-hidden">
        <div className="pupil absolute w-12 h-12 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default EyeFollow;
