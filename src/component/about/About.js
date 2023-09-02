import React, { useEffect, useState } from 'react'
import { BsCircleFill } from "react-icons/bs";
import {skills} from "./Data"
import Progressbar from './Progressbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {

    AOS.init({
        duration: 1000,
        once: true
    })


  return <div className='w-full h-[315vh] pt-5 overflow-hidden' id='about'>
            <h1 className='text-blue-950 text-3xl  ml-3 w-12 h-14 border-b-[3px] border-b-[#149ddd]'>About</h1>
            <p data-aos="fade-left" className='mt-7 ml-3 w-[95%]'>
            Hello <br></br>
            I am Ehsan Alavi
            I got my math diploma from Izadi High School in Qom.<br></br>
            I am currently studying computer science in the bachelor's degree.<br></br>
            I love programming and my work because I create anything I want from nothing.<br></br>
            I love solving puzzles and mind games like mafia.
            </p>
            <div  className='w-full'>
                <img data-aos="fade-right" src='../../../img/profile2.JPG' className='h-80 w-[90%] ml-[5%] mt-5'/>
                <div>
                    <h1  data-aos="fade-right" className='text-blue-950 text-3xl mt-8 ml-3'>Web Developer</h1>
                    <p data-aos="fade-right" className='mt-1 ml-3 w-[95%]'>
                        I have been working as a self-taught programmer for 2 years
                    </p>
                    <ul data-aos="fade-left" className='mt-3 pl-3 w-full list-disc h-80 flex flex-col-reverse justify-around'>
                        <li className='flex items-center w-full'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><span className='font-bold mr-2 flex items-center h-6'>Freelance:</span>Available</li>
                        <li className='flex items-center w-full'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><span className='font-bold mr-2 flex items-center h-6'>Gmail:</span>e.alavi1380@gmail.com</li>
                        <li className='flex items-center w-full'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><span className='font-bold mr-2 flex items-center h-6'>Degree:</span>Junior</li>
                        <li className='flex items-center w-full'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><span className='font-bold mr-2 flex items-center h-6'>Age:</span>21</li>
                        <li className='flex items-center w-full'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><span className='font-bold mr-2 flex items-center h-6'>City:</span>Qom</li>
                        <li className='flex items-center w-full'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><span className='font-bold mr-2 flex items-center h-6'>Phone:</span>+98934156323</li>
                        <li className='flex items-center w-full'><BsCircleFill className='text-[10px] mr-1 text-[#149ddd]'/><span className='font-bold mr-2 flex items-center h-6'>Birthday:</span>2/2/2002</li>
                    </ul>
                </div>
            </div>
            <div className='w-full h-[110vh] bg-blue-50'>
                <h1 className='text-blue-950 text-3xl mt-8 ml-3 w-12 h-14 border-b-[3px] border-b-[#149ddd]'>Skills</h1>
                <div className='mt-5 w-full h-[83%] px-[2.5%] flex flex-col-reverse justify-between '>
                        {
                            skills.map(item => {
                                return <Progressbar percent = {item.percent} name={item.name}/>
                            })
                        }
                </div>
            </div>
  </div>
}

export default About