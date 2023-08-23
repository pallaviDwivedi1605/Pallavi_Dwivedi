import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Card = ({image,label,tech,desc}:any) => {
  return (
    <div className=' group w-80 h-96 bg-white border relative rounded-2xl'>
        <div className=' rounded-t-2xl h-2/3 w-full transition-all duration-300 ease-in-out bg- group-hover:opacity-10'><Image className=' rounded-t-2xl' src={image} alt='image' fill={true} /></div>
        <div className=' rounded-b-2xl h-1/3 transition-all duration-300 ease-in-out group-hover:h-2/3 absolute bottom-0 w-full bg-white pt-2 flex flex-col items-center gap-2'>
            <h3 className='text-xl font-semibold tracking-wide'>{label}</h3>
            <p className=' tetx-lg font-medium'>{tech}</p>
            <p className='hidden group-hover:block'>{desc}</p>
            <Button name={"Visit Me"} href={"#"} />
        </div>
    </div>
  )
}

export default Card