import React from 'react'
import CodeImg from "../../../images/code.png"
import LineImg from "../../../images/line.png"

const RightBottom = () => {
  return (
    <div className='absolute right-10 bottom-10 hidden xl:block'>
        <img src={CodeImg} className='absolute top-[80px] w-[80px] left-0'/>
        <img src={LineImg} className='w-[120px]'/>
    </div>
  )
}

export default RightBottom