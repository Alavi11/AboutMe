import React from 'react'

const Progressbar = ({percent,name}) => {

    const loading = {
        width: `${percent}%`,
    }

  return <div className='w-[95%] h-2 '>
            <p className='w-full'>{name}</p>
            <div className='w-full h-full bg-gray-200 overflow-hidden relative rounded-[10px]'>
                <div style={loading} className= 'rounded-[10px] w-10 h-full bg-[#149ddd] absolut '></div>
            </div>
    </div>
}

export default Progressbar