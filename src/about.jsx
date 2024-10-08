import React from 'react'
import "./App.css"
import { FaArrowUpLong } from 'react-icons/fa6'
function About() {
  return (
    <div data-scroll data-scroll-section
    data-scroll-speed="-.3" className='w-full bg-[#cdea68] rounded-t-[14px] block'>
    <div className='h-80  p-10 text-[3.5vw] font-medium leading-[4.5vw] text-justify rlative'>
    <h1>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds, sell products, explain complex ideas,</span> and <span className='underline'>hire great peo-ple</span>.</h1>
    </div>
    <div className='h-80 w-full border-t-2 border-zinc-200 border-b-2 flex items-center justify-between px-10 mt-10 text-lg gap-20 text-justify'>
            <p className='w-[20vw] -mt-40'>What you can expect:</p>
            <p className='w-[20vw] mt-10'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.

            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            <p className='w-[20vw] '>S:<br/>

            <div className="relative inline-block">
      <span 
        style={{
          background: 'linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 3px no-repeat',
          transition: '0.5s',
          '--d': '0%' // Initial state for the underline
        }}
        onMouseEnter={(e) => e.target.style.setProperty('--d', '100%')}
        onMouseLeave={(e) => e.target.style.setProperty('--d', '0%')}
      >
        Linkedin
      </span>
    </div>
    <br/>
    <div className="relative inline-block">
      <span 
        style={{
          background: 'linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 3px no-repeat',
          transition: '0.5s',
          '--d': '0%' // Initial state for the underline
        }}
        onMouseEnter={(e) => e.target.style.setProperty('--d', '100%')}
        onMouseLeave={(e) => e.target.style.setProperty('--d', '0%')}
      >
        Instagram
      </span>
    </div>
    <br/>
    <div className="relative inline-block">
      <span 
        
        style={{
          background: 'linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 3px no-repeat',
          transition: '0.5s',
          '--d': '0%' // Initial state for the underline
        }}
        onMouseEnter={(e) => e.target.style.setProperty('--d', '100%')}
        onMouseLeave={(e) => e.target.style.setProperty('--d', '0%')}
      >
        Behance
      </span>
    </div>
    <br/>
    <div className="relative inline-block">
      <span 
        
        style={{
          background: 'linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 3px no-repeat',
          transition: '0.5s',
          '--d': '0%' // Initial state for the underline
        }}
        onMouseEnter={(e) => e.target.style.setProperty('--d', '100%')}
        onMouseLeave={(e) => e.target.style.setProperty('--d', '0%')}
      >
        Facebook
      </span>
    </div>
            
            </p>
            
    </div>
        <div className='w-full flex justify-between mt-10 p-10'>
            <div className='w-1/2'>
                <h1 className='text-5xl font-semibold'>Our approach:</h1>
                <button className="h-16 w-56 text-center uppercase bg-gray-800 flex  text-lg p-4 mt-10 rounded-3xl hover:bg-black gap-8 relative group">
                <span className='text-white'>Read more</span>
        <div className="bg-white h-2 w-2 text-center -py-1 -px-1.5 text-transparent text-xs rounded-full group-hover:text-black rotate-45 mt-2 scale-2 transform transition-transform duration-300 group-hover:scale-150 group-hover:h-6 group-hover:w-6 group-hover:text-lg">
          <FaArrowUpLong />
        </div>
      </button>
            </div>
            <div >
                <img src='/src\assets\Homepage-Photo-663x469.jpg' className='rounded-2xl'/>
            </div>
        </div>
    </div>
  )
}

export default About