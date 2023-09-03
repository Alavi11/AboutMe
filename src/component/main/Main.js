import React from 'react'
import Right from '../right/Right'
import Menu from '../menu/Menu'
import MenuRes from '../menu/MenuRes'


const Main = () => {


  return <div className='w-full h-screen flex relative overflow-hidden'>
        <Right/>
        <div  className='br4:hidden'>
            <Menu/>
        </div>
        <div  className='hidden w-full fixed top-0 z-40 br4:flex'>
            <MenuRes/>
        </div>
    </div>
       
}

export default Main