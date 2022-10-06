import Image from 'next/image'
import React from 'react'

function Ownboard() {
    return (
        <>
            <div className="flex max-w-[400px] md:max-w-[700px] mx-auto mb-16 mt-24">
                <div className='relative z-20 items-center  flex flex-col lg:flex lg:flex-row  space-x-6 md:space-x-12 '>
                    <div className='w-[80%]'>
                        <h1 className='text-2xl md:text-5xl font-bold mb-4'>Ownboard</h1>
                        <p className='mb-4 '>
                            Developed the first version of a MVP for a HR tech startup focussing on employee onboarding software. Ownboard solves the problem of creating, maintaning and monitoring onboarding processes.
                            It makes it easy for managers to create tracks from templates and montitor the progress of the employees, while giving new employees a great and guided onboarding experience.
                        </p>

                        <p className='mb-2'> I designed and implemented the datamodel, challenged the feature list, and built the MVP that can be tested within organisations.</p>

                        <p className='mt-4 text-white font-semibold mb-2'>Working with the following technologies:</p>
                        <ul class="list-disc ml-8 mb-2">
                            <li>NextJS</li>
                            <li>Firebase</li>
                            <li>TailwindCSS</li>
                        </ul>



                    </div>

                    <div className=' md:space-y-4'>
                        <Image src="/card.png" width={220} height={300} className='rounded-lg' />
                    </div>

                </div>

                {/* BackBlur */}
                <div className="absolute w-full max-w-lg z-0">
                    <div className="absolute  -left-4 w-[800px] h-[200px] bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-[20%] animate-blob"></div>
                </div >
            </div>
        </>
    )
}

export default Ownboard