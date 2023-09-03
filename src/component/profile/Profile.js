import React from 'react'

const Profile = () => {
  return <div className='w-full br4:w-1/4 h-2/5 br4:h-full br4:mb-4 br4:flex-row flex items-center justify-center flex-col'>
        <div className='w-28 h-28 br4:w-16 br4:h-16 br4:mr-4 rounded-[50%] bg-gray-700 flex items-center justify-center mt-3'>
            <img src='../../../img/profile1.JPG' className='w-24 h-24 br4:w-16 br4:h-16  rounded-[50%]'/>
        </div>
        <p className='text-white text-2xl br4:text-xl mt-3'>Ehsan Alavi</p>
  </div>
}

export default Profile