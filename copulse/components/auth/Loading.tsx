import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className=' w-full h-full flex flex-col items-center justify-center'>
        <Image 
        src="/loading.svg"
        alt='Logo'
        width={120}
        height={120}
        className='animate-pulse duration-700'
        />
        </div>
  )
}

export default Loading