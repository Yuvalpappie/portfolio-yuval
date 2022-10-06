import React from 'react'
import Image from 'next/image'


function Hero() {
    return (
        <>
            <div className='relative z-20 items-center flex  space-x-6 md:space-x-12 '>
                <div>
                    <Image src="/yuval.jpg" width={180} height={180} className='rounded-full' alt='yuval' />
                </div>

                <div className='space-y-2 md:spac-y-4'>
                    <h1 className='text-2xl md:text-5xl font-bold'>Hi, I&apos;m <span className='text-primary'>Yuval </span></h1>
                    <p className=' text-lg md:text-xl'>A passionate Software Engineer from Amsterdam</p>
                </div>

            </div>

            {/* BackBlur */}
            <div className="absolute w-full max-w-lg z-0">
                <div className="absolute  -left-4 sm:w-[600px] md:w-[800px] w-[400px] h-[150px] mt-10 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-[20%] animate-blob"></div>
            </div >
        </>
    )
}

export default Hero