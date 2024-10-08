import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-0">
        {/* Left section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold leading-tight md:text-8xl">
            EYE-
            <br />
            OPENING
          </h2>
        </div>

        {/* Right section */}
        <div className="grid grid-cols-2 gap-8 text-sm">
          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <span className="font-semibold">S:</span>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Behance</a>
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>

          {/* Address and Links */}
          <div className="flex flex-col space-y-4">
            <div>
              <span className="font-semibold">L:</span>
              <p>202-1965 W 4th Ave</p>
              <p>Vancouver, Canada</p>
            </div>
            <div>
              <p>30 Chukarina St</p>
              <p>Lviv, Ukraine</p>
            </div>
            <div>
              <span className="font-semibold">E:</span>
              <a href="mailto:hello@ochi.design" className="hover:underline">hello@ochi.design</a>
            </div>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col space-y-4">
            <span className="font-semibold">M:</span>
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Our work</a>
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Insights</a>
            <a href="#" className="hover:underline">Contact us</a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-10 text-center text-gray-500 text-xs">
        <p>© ochi design 2024. <a href="#" className="hover:underline">Legal Terms</a></p>
        <p className="mt-2">Website by Obys</p>
      </div>
    </footer>
  );
};

export default Footer;
