import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

function Card() {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const handleHover = (index) => {
        setVisibleIndex(index); // Show text when hovering
    };

    const handleHoverLeave = () => {
        setVisibleIndex(null); // Hide text when hover is removed
    };

    return (
        <div data-scroll
        data-scroll-speed="-0.6" className='h-fit w-full bg-white'>
            <h1 className='font-["Founders Grotext"] text-6xl font-semibold m-10'>Featured projects</h1>
            <hr className='h-1 w-full bg-slate-400 border-0'/>
            <div className='h-[80%] w-full'>
                <ul className='p-16 list-disc list-outside grid grid-cols-2 gap-2'>
                    {[
                        { title: 'Cardboard Spaceship', img: './src/assets/CS_Website_1-663x551.png' },
                        { title: 'AH2 & Matt Horn', img: './src/assets/Frame-481692-1-663x551.png' },
                        { title: 'Fyde', img: './src/assets/Fyde_Illustration_Crypto_2-663x551.png' },
                        { title: 'Vise', img: './src/assets/Vise_front2-663x551.jpg' },
                        { title: 'Trawa', img: './src/assets/Frame-3875-663x551.jpg' },
                        { title: 'Premium Blend', img: './src/assets/PB-Front-4-663x551.png' }
                    ].map((project, index) => (
                        <li key={index} className='h-[80vh] w-[50vw] p-10 font-bold text-lg'>
                            <p className='-ml-10 font-normal'>{project.title}</p>
                            <div className='h-[75vh] w-[50vw] mt-10 -ml-10 relative overflow-hidden'>
                                <div 
                                    onMouseEnter={() => handleHover(index)}
                                    onMouseLeave={handleHoverLeave}
                                    className='relative h-full'
                                >
                                    {/* Image Container */}
                                    <div 
                                        className='h-[65vh] w-[40vw] bg-stone-200 transform scale-100 transition-transform duration-500 hover:scale-95 flex items-center justify-center rounded-xl'
                                    >
                                        <img src={project.img} className='h-[60vh] w-[40vw] transform scale-95 hover:scale-100 rounded-xl'/>
                                    </div>

                                    {/* Conditionally Render Text - Centered in the screen */}
                                    {visibleIndex === index && (
                                        <motion.h1
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
                                            className='text-6xl font-semibold text-[#CDEA68] fixed top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2'
                                        >
                                            {project.title}
                                        </motion.h1>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='h-[40vh] w-full mb-40 relative z-40'>
                {/* Button with hover animation */}
                <button className="h-16 w-72 text-center uppercase bg-gray-800 flex text-lg mt-60 ml-[40%] mb-40 p-4 rounded-3xl hover:bg-black gap-8 relative group">
                    <span className='text-white'>View All Case Studies</span>
                    <div className="bg-white h-2 w-2 text-center -py-1 -px-1.5 text-transparent text-xs rounded-full group-hover:text-black rotate-45 mt-2 scale-2 transform transition-transform duration-300 group-hover:scale-150 group-hover:h-6 group-hover:w-6 group-hover:text-lg">
                        <FaArrowUpLong />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Card;
