import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Progressbar = ({percent,name}) => {

    AOS.init({
        anchorPlacement:"top"
    })

    const loading = {
        width: `${percent}%`,
    }

  return <div className='w-[95%] br2:w-[45%] h-16 overflow-hidden'>
            <div className='flex'>
                <p className='w-1/2'>{name}</p>
                <p className='w-1/2 flex justify-end'>{percent}%</p>
            </div>
            <div className='w-full h-2 bg-gray-200 overflow-hidden relative rounded-[10px]'>
                <div data-aos="fade-right" style={loading} className= 'relative rounded-[10px] w-10 h-full bg-[#149ddd] absolut '></div>
            </div>
    </div>
}

export default Progressbar