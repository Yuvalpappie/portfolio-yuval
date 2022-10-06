import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';



function Contact() {
    return (
        <div className='mt-16 pb-24' id="contact">

            <p className=' text-xl font-bold tracking-widest'>
                CONTACT
            </p>
            <div className='w-[12px] h-[10px] bg-primary mt-0.5'></div>

            <div className='flex items-center mt-4 space-x-2'>
                <EnvelopeIcon className='w-5 h-5' />
                <p className=''>pappieyuval@gmail.com</p>
            </div>
            <div className='flex space-x-4 mt-4'>
                <Link href='https://www.linkedin.com/in/yuval-pappie-30025673/'>
                    <a target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                        <FaLinkedin size={'30px'} color={'#00B8AD'} className='cursor-pointer' />
                    </a>
                </Link>
                <Link href='https://twitter.com/pappie_yuval'>
                    <a target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                        <FaTwitter size={'30px'} color={'#00B8AD'} className='cursor-pointer' />
                    </a>
                </Link>
                <Link href='https://github.com/Yuvalpappie'>
                    <a target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                        <FaGithub size={'30px'} color={'#00B8AD'} className='cursor-pointer' />
                    </a>
                </Link>


            </div>



        </div >
    )
}

export default Contact