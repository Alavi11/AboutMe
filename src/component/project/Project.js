import React from 'react'
import { BsCircleFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Project = () => {


    AOS.init({
        duration: 1000,
        once: true
    })


  return <div className='w-full h-[800px] br2:h-[700px] br4:pt-24 mt-1 overflow-x-hidden br4:px-0' id='projects'>
            <h1  data-aos="fade-left" className='text-blue-950 text-3xl  ml-3 w-12 h-14 border-b-[3px] border-b-[#149ddd]'>Projects</h1>
            <h3  data-aos="fade-right" className='ml-3 mt-5'>Hint : to see any project click on title</h3>
            <div className='w-full h-[80%] br2:h-[50%] flex flex-col-reverse br2:flex-row flex-wrap justify-around px-5 br2:mt-8 overflow-y-scroll'>
                <div data-aos="fade-right" className='br2:w-1/2'>
                    <a className='flex items-center' href='https://github.com/Alavi11/netflix'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><p className='text-2xl'>NetFlix</p></a>
                    <p className='ml-6 max-w-xs'>React, Tailwind, Axios , Node ,Express ,JWT</p>
                </div>
                <div data-aos="fade-right" className='br2:w-1/2'>
                    <a className='flex items-center' href='https://github.com/Alavi11/Social_Media'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><p className='text-2xl'>Social Media</p></a>
                    <p className='ml-6 max-w-xs'>React, Axios , context are is used in the front part of the project and Node , Express , Mongoose and JWT and etc are used in the back part of the project and the structure of Access-Token and Refresh-Token is implemented.</p>
                </div>
                
                <div data-aos="fade-right" className='br2:w-1/2 br2:h-20'>
                    <a className='flex items-center' href=''><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><p className='text-2xl'>Admin DashBoard</p></a>
                    <p className='ml-6 max-w-xs'>React and Tailwind and ReChart</p>
                </div>
            </div>
  </div>
}

export default Project