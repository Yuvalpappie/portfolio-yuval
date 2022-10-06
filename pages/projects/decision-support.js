import React from 'react'
import Image from 'next/image'

function DecisionSupport() {
    return (
        <>
            <div className="flex max-w-[400px] md:max-w-[700px] mx-auto mb-16 mt-24">
                <div className='relative z-20  flex flex-col lg:flex lg:flex-row  space-x-6 md:space-x-12 '>
                    <div className='w-[70%]'>
                        <h1 className='text-2xl md:text-5xl font-bold mb-4'>Decision Support</h1>
                        <p className='mb-4 '>
                            During my time at Enjins I worked on creating a Decision Support Engine for the biggest debt collection agency in the Netherlands, CIB.
                            Every day CIB has to make thousends of decisions after their workflow on how to proceed with people who are not paying their debt.
                        </p>

                        <p className='mb-4'>
                            Based on their historical data, I created an Analytics Database, wrote ETL scripts and created the DSE in order to optimize their workflow.
                        </p>

                        <p className='mb-2'>This deployed model resulted in automating <b>75% </b>of their decisions which translated to replacing the work of <b>3 FTE</b>.
                        </p>


                        <p className='mt-4 text-white font-semibold mb-2'>Working with the following technologies:</p>
                        <ul class="list-disc ml-8 mb-2">
                            <li>Python</li>
                            <li>SQL (Postgres)</li>
                            <li>Airflow</li>
                            <li>AWS</li>
                            <li>Kubernetes</li>
                            <li>Random Forest</li>
                        </ul>



                    </div>

                    <div className=' md:space-y-4 mt-16'>
                        <Image src="/DSE.png" width={250} height={250} className='' />
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

export default DecisionSupport