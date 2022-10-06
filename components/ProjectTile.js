import React from 'react'
import Modal from './Modal'
import { useState, useEffect } from 'react'
import Link from 'next/link'

function ProjectTile({ link, image, title }) {
    const [openModal, setOpenModal] = useState(false)

    const toggleLightbox = () => {
        setOpenModal(modal => !modal)
    }


    return (
        <div className='flex flex-col items-center'>
            <Link href={link}>
                <div className='w-[300px] h-[200px] bg-gray-800 rounded-lg mb-3 transform transition-all hover:scale-105 cursor-pointer'>
                    <img src={image} className='h-full w-full rounded-lg' />
                </div>
            </Link>
            <h2 className='text-lg font-semibold'>{title}</h2>

            {/* {openModal && (<Modal></Modal>)} */}

        </div>
    )
}

export default ProjectTile