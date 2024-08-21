import React, { useState ,useRef} from 'react'
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import {useGlobalcontext} from "../../Context"
import Typewriter from "typewriter-effect";


const Right = () => {
  

  const [open , setOpen] = useState(false)
  const {handelopeningmenu} = useGlobalcontext()

  const handelshowmenu = () =>{
    setOpen(!open)
    handelopeningmenu()
  }


  return <div className="w-full h-full relative bg-right" id='home'>
        <div className='br1:left-[20%] br2:left-[25%] br3:left-[32%]  br4:top-[43%] absolute top-1/3 left-[10%] flex flex-col items-start text-white'>
            <p className='text-4xl'>Ehsan Alavi</p>
            <p className='text-2xl ml-[3px] flex justify-start w-80'>i'm <span className='ml-2 text-2xl border-b-[2.5px] border-[#149ddd]'>
              <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("React and Node")
                            .start();
                    }}
              />
              </span>
              <span className='ml-1 text-2xl'>Developer</span>
            </p>
        </div>
        <div className='br4:hidden w-9 h-9 rounded-[50%] bg-[#149ddd] flex items-center justify-center text-white text-xl fixed top-5 right-3 z-50'
          onClick={handelshowmenu}
        >
          {
            open ? <RxCross2/> : <AiOutlineMenu/> 
          }
        </div>
  </div>
}

export default Right