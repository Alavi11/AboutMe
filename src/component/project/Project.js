import React from 'react'
import { BsCircleFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Project = () => {


    AOS.init({
        duration: 1000,
        once: true
    })


  return <div className='w-full h-[800px] br2:h-[700px] br4:pt-24 pt-5 overflow-x-hidden br4:px-0' id='projects'>
            <h1  data-aos="fade-left" className='text-blue-950 text-3xl  ml-3 w-12 h-14 border-b-[3px] border-b-[#149ddd]'>Projects</h1>
            <h3  data-aos="fade-right" className='ml-3 mt-5'>Hint : to see any project click on title</h3>
            <div className='w-full h-[80%] br2:h-[50%] flex flex-col-reverse br2:flex-row flex-wrap justify-around px-5 br2:mt-8'>
                <div data-aos="fade-right" className='br2:w-1/2'>
                    <a className='flex items-center' href='https://github.com/Alavi11/Amlak'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><p className='text-2xl'>Estate</p></a>
                    <p className='ml-6 max-w-xs'>React, TypeScript, Tailwind, Axios are is used in the front part of the project and Node and Express are used in the back part of the project.<br/>Routing and login sections and registration and restriction of routes have been done in this project</p>
                </div>
                <div data-aos="fade-left" className='br2:w-1/2'>
                    <a className='flex items-center' href='https://my-resturant-tawny.vercel.app/'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><p className='text-2xl'>My Resturant</p></a>
                    <p className='ml-6 max-w-xs'>my resturant is resposive website and I using Sass , Css and html </p>
                </div>
                <div data-aos="fade-right" className='br2:w-1/2 br2:h-20'>
                    <a className='flex items-center' href='https://landingpage-woad-alpha.vercel.app/'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><p className='text-2xl'>Landing Page</p></a>
                    <p className='ml-6 max-w-xs'>this project create with ReactJs and Css</p>
                </div>
                <div data-aos="fade-left" className='br2:w-1/2'>
                    <a className='flex items-center' href='https://delpazir-restaurant.vercel.app/'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><p className='text-2xl'>Delpazir Restaurant</p></a>
                    <p className='ml-6 max-w-xs'>React Js , REDUX , HTML , Css are used in this app</p>
                </div>
            </div>
  </div>
}

export default Project