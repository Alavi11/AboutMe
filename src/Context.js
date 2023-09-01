import React, { useState } from 'react'
import { createContext , useContext} from 'react'


const AppContext = createContext()

const AppProvider = ({children})=>{

    const [openmenu,setOpenmenu] = useState(false)

    const handelopeningmenu = () =>{
        setOpenmenu(!openmenu)
    }
  


    return <AppContext.Provider value = {{openmenu,handelopeningmenu}} >{children}</AppContext.Provider>
}

export const useGlobalcontext = () =>{
    return useContext(AppContext)
}

export {AppProvider}