import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function matchingEnigne() {
    return (
        <>
            <div className="flex max-w-[400px] md:max-w-[700px] mx-auto mb-16 mt-24">
                <div className='relative z-20 items-center  flex flex-col lg:flex lg:flex-row  space-x-6 md:space-x-12 '>
                    <div className='w-[70%]'>
                        <h1 className='text-2xl md:text-5xl font-bold mb-4'>Matching Engine</h1>
                        <p className='mb-4 '>
                            During my time at Enjins I worked on creating a Matching Engine for the biggest debt collection agency in the Netherlands, CIB.
                            The most important data for CIB is the contact information of their debtors.
                        </p>
                        <p className='mb-4'> I built a Matching Engine which matches the same debtor among their different clients and enriches verified contact information.</p>

                        <p className='mb-2'>The found matches together with the enriched contact info served as important input for the {""}
                            <Link href='/projects/decision-support'>
                                <a className='cursor-pointer underline'>
                                    Decision Support Engine
                                </a>
                            </Link>.
                        </p>


                        <p className='mt-4 text-white font-semibold mb-2'>Working with the following technologies:</p>
                        <ul className="list-disc ml-8 mb-2">
                            <li>Python</li>
                            <li>SQL (Postgres)</li>
                            <li>Airflow</li>
                            <li>AWS</li>
                            <li>Kubernetes</li>
                        </ul>



                    </div>

                    <div className=' md:space-y-4 mt-8'>
                        <Image src="/MEE.png" width={250} height={250} className='' />
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

export default matchingEnigne