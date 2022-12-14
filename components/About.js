import React from 'react'
import Link from 'next/link'

function About() {
    return (
        <div className='mt-16' id="about">

            <p className='text-xl font-bold tracking-widest font-play'>
                ABOUT
            </p>
            <div className='w-[12px] h-[10px] bg-primary mt-0.5'></div>

            <p className='mt-3'>
                I am an entrepreneurial engineer and self starter who likes building beautiful user facing software.
                I have a background in Machine Learning with a MSc in Business Analytics from the VU University of Amsterdam and worked for the past 3 years as a Data Scientist and Machine Learning Engineer at various companies.
                Next, I started my own company {""}
                <Link href='/projects/snibble'>
                    <a className='cursor-pointer underline'>
                        Snibble
                    </a>
                </Link>.
                I have a keen interest in Software Engineering, AI, Crypto, and Design.
            </p>
        </div>
    )
}

export default About