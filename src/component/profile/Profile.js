import React from 'react'

const Profile = () => {
  return <div className='w-full h-2/5 flex items-center justify-center flex-col'>
        <div className='w-28 h-28 rounded-[50%] bg-gray-700 flex items-center justify-center mt-3'>
            <img src='../../../img/profile1.JPG' className='w-24 h-24 rounded-[50%]'/>
        </div>
        <p className='text-white text-2xl mt-3'>Ehsan Alavi</p>
  </div>
}

export default Profile