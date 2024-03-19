import Image from 'next/image'
import React from 'react'
import projetoRick from '../public/image/projetoRicy.png'
import projetonetflix from '../public/image/clonenetflix.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#888C81]  font-mono'>#Projetos</p>
            <h2 className='py-4'>Meus Projetos</h2>
            <div className='grid md:grid-cols-2 gap-8 '>
                <ProjectItem title='Rick and Morty' backgroudImg={projetoRick} projectUrl="/projetoRick" />
                <ProjectItem title='Clone Netflix' backgroudImg={projetonetflix} projectUrl="/projetoNetflix" />
            </div>
        </div>
    </div>
  )
}

export default Projects