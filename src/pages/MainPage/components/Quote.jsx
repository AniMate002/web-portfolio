import React from 'react'
import globe from "../../../images/globe.jpg"

const Quote = () => {
  return (
    <div className='absolute lg:bottom-20 bottom-4 md:bottom-10 z-10'>
        <p className='lg:w-[100px] w-[200px] text-[#808080] text-[10px] xl:text-sm'>Every line of code is a step into the void, and every idea is an experiment with the future.</p>
        <img src={globe} className='w-10 mt-2 md:w-16 md:mt-4'/>
    </div>
  )
}

export default Quote