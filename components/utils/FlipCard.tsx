import React from 'react'
import Image from 'next/image';

const FlipCard = ({image,name,desc,skill}:any) => {
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <div className=' h-2/3 bg-white rounded-t-2xl relative pt-1'><Image className=' rounded-t-2xl absolute' src={image} alt='image' fill={true} /></div>
        <div className=' h-1/3 rounded-b-2xl flex items-center flex-col pt-2 gap-1'>
          <h3 className='text-xl font-semibold tracking-wide'>{name}</h3>
          <p className='text-lg font-medium'>{skill}</p>
        </div>
      </div>
      <div className="flip-card-back flex flex-col gap-3 justify-center items-center shadow-inner">
        <p>{desc}</p>
      </div>
    </div>
  </div>
  );
}

export default FlipCard