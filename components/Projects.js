import React from 'react'
import ProjectTile from './ProjectTile'

function Projects() {

    const projects = [
        {
            title: 'Snibble',
            link: '/projects/snibble',
            image: '/snb.png',
        },
        {
            title: 'Ownboard',
            link: '/projects/ownboard',
            image: '/ownboard.png',
        },
        {
            title: 'Decision Support Engine',
            link: '/projects/decision-support',
            image: '/DSE.png',
        },
        {
            title: 'Matching Engine',
            link: '/projects/matching-engine',
            image: '/MEE.png',
        },

    ]

    return (
        <div className='mt-16 w-full ' id='projects'>

            <div className='mb-6'>
                <p className='text-xl font-bold tracking-widest'>
                    PROJECTS
                </p>
                <div className='w-[12px] h-[10px] bg-primary mt-0.5'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
                {projects.map((project, index) => (
                    <ProjectTile key={index} link={project.link} image={project.image} title={project.title} />
                ))}
            </div>




        </div>
    )
}

export default Projects