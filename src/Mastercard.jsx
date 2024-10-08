import React from 'react'

function Mastercard() {
  return (
    <div data-scroll
    data-scroll-speed="-0.3" className='h-1/2 w- full p-20 '>
        <div className='flex gap-5'>
            <div className='card h-[60vh] w-[40vw] bg-[#004d43] rounded-xl'>
            <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' className='m-[25%] h-20 w-36'/>
             <div className ='h-10 w-fit rounded-3xl border-2 border-yellow-600 text-lg mt-40 ml-10 px-5 text-yellow-600'>©2018-2019</div>
            </div>
            <div className='card h-[60vh] w-[30vw] bg-[#212121] rounded-xl'>
            <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' className='m-[25%] h-20 w-36' />
             <div className ='h-10 w-fit rounded-3xl border-2 border-white text-lg mt-48 text-white px-4 ml-12 inset-0 transform hover:transition-transform duration-700 hover:ease-in-out hover:translate-y-0 hover:bg-white hover:text-black'>Rating 5.0 on Clutch</div>
            </div>
            <div className='card h-[60vh] w-[30vw] bg-[#212121] rounded-xl'>
            <img src='\src\assets\logo003.png' className='m-[25%] h-40 w-40'/>
             <div className=' h-10 w-fit rounded-3xl border-2 border-white text-lg mt-28 ml-14 text-white px-4  inset-0 transform hover:transition-transform duration-700 hover:ease-in-out hover:translate-y-0 hover:bg-white hover:text-black'>Bussiness Bootcamp Alumuni</div>
            
            </div>
        </div>
    </div>

  )
}

export default Mastercard