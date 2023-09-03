import React from 'react'
import Profile from '../profile/Profile'
import { AiOutlineHome , AiOutlineGithub,AiOutlineUser,AiOutlineFile,AiOutlineFolderOpen } from "react-icons/ai";
import {useGlobalcontext} from "../../Context"
import { HashLink } from 'react-router-hash-link';



const MenuRes = () => {

  return <div className='w-full h-20 z-40 bg-gray-900 flex items-center'>
                  <Profile/>
                  <div className='w-full'>  
                      <ul className='w-full h-3/4 ml-5 justify-around flex'>
                      <a href='https://github.com/Alavi11'><li className='menuli flex justify-start text-gray-400 w-full cursor-pointer'><div className='lastch duration-500'><AiOutlineGithub className='mr-3' size={"20px"}/></div><p className=' duration-500 firstch'>Git</p></li></a>

                          <HashLink smooth to='/#projects'><li className='menuli flex justify-start text-gray-400 w-full cursor-pointer'><div className='lastch duration-500'><AiOutlineFile className='mr-3' size={"20px"}/></div><p className='firstch duration-500'>Projects</p></li></HashLink>

                          <HashLink smooth to='/#about'><li className='menuli flex justify-start text-gray-400 w-full cursor-pointer'><div className='lastch duration-500'><AiOutlineUser className='mr-3' size={"20px"}/></div><p className='firstch duration-500'>About</p></li></HashLink>

                          <HashLink smooth to='/#home'><li className='menuli flex justify-start text-gray-400 w-full cursor-pointer'><div className='lastch duration-500'><AiOutlineHome className='mr-3' size={"20px"}/></div><p className='firstch duration-500'>Home</p></li>
                          </HashLink>
                      </ul>
                  </div>
                  
        </div>
  
}

export default MenuRes