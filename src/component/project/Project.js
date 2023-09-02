import React from 'react'
import { BsCircleFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Project = () => {


    AOS.init({
        duration: 1000,
        once: true
    })


  return <div className='w-full h-[130vh] pt-5 overflow-x-hidden' id='projects'>
            <h1  data-aos="fade-left" className='text-blue-950 text-3xl  ml-3 w-12 h-14 border-b-[3px] border-b-[#149ddd]'>Projects</h1>
            <h3  data-aos="fade-right" className='ml-3 mt-5'>Hint : to see any project click on title</h3>
            <div className='w-full h-[80%] flex flex-col-reverse justify-around px-5'>
                <div data-aos="fade-right">
                    <a className='flex items-center' href='https://cafe-gamma.vercel.app'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><p className='text-2xl'>Cafe</p></a>
                    <p className='ml-6'>React Js , REDUX , HTML , Css are used in this app</p>
                </div>
                <div data-aos="fade-left">
                    <a className='flex items-center' href='https://my-resturant-tawny.vercel.app/'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><p className='text-2xl'>My Resturant</p></a>
                    <p className='ml-6'>my resturant is resposive website and I using Sass , Css and html </p>
                </div>
                <div data-aos="fade-right">
                    <a className='flex items-center' href='https://landingpage-woad-alpha.vercel.app/'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><p className='text-2xl'>Landing Page</p></a>
                    <p className='ml-6'>this project create with ReactJs and Css</p>
                </div>
                <div data-aos="fade-left">
                    <a className='flex items-center' href='https://delpazir-restaurant.vercel.app/'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><p className='text-2xl'>Delpazir Restaurant</p></a>
                    <p className='ml-6'>React Js , REDUX , HTML , Css are used in this app</p>
                </div>
            </div>
  </div>
}

export default Project