import React from 'react'
import globe from "../../../images/globe.jpg"

const Quote = () => {
  return (
    <div className='absolute bottom-20'>
        <p className='w-[100px] text-[#808080] text-sm'>Every line of code is a step into the void, and every idea is an experiment with the future.</p>
        <img src={globe} className='w-16 mt-4'/>
    </div>
  )
}

export default Quote