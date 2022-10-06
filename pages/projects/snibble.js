import Image from 'next/image'
import React from 'react'

function Snibble() {
    return (
        <>
            <div className="flex max-w-[400px] md:max-w-[700px] mx-auto mb-16 mt-24">
                <div className='relative z-20 items-center  flex flex-col lg:flex lg:flex-row  space-x-6 md:space-x-12 '>
                    <div className='w-[70%]'>
                        <h1 className='text-2xl md:text-5xl font-bold mb-4 '>Snibble</h1>
                        <p className='mb-4 '>
                            Solo founder of the mobile social app for discovering the best dishes of the city recommended by the people you trust such as friends, chefs and food experts.
                            This solved the problem of the lack of trust with the current restaurant review platforms and the focus on specific dishes.

                        </p>
                        <p className='mb-2'> I designed and built the the app from scratch to launch in 3 months and scaled the the userbase to 600+ users in Amsterdam.</p>
                        <a href='https://www.snibble.co' target="_blank" rel="noopener noreferrer" className='text-primary underline'>
                            Visit the Snibble website here
                        </a>
                        <p className='mt-4 text-white font-semibold mb-2'>Working with the following technologies:</p>
                        <ul className="list-disc ml-8 mb-2">
                            <li>React Native</li>
                            <li>Firebase</li>
                            <li>(Tailwind)CSS</li>
                            <li>Google Maps & Places API</li>
                            <li>Algolia for search and recommendations</li>
                        </ul>



                    </div>

                    <div className=' md:space-y-4 mt-4'>
                        <Image src="/home2.png" width={190} height={400} className='' alt='Snibble' />
                    </div>

                </div>

                {/* BackBlur */}
                <div className="absolute w-full max-w-lg z-0">
                    <div className="absolute  -left-4 sm:w-[600px] md:w-[800px] w-[400px] h-[150px] mt-10 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-[20%] animate-blob"></div>
                </div >
            </div>
        </>
    )
}

export default Snibble