import React from 'react'
import Image from 'next/image';
import projetonetflix from '../public/image/clonenetflix.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
const projectoRick = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={projetonetflix}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Projeto Clone do Netflix</h2>
          <h3>React.js / Tailwind css</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-xl tracking-widest uppercase text-[#888C81]  font-mono'>#Projeto</p>
          <h2 className='py-4'>Visão geral</h2>
          <p>
          Este projeto consiste na criação de um clone do Netflix utilizando tecnologias como React.js, Tailwind CSS e integrando a API The Movie DB para obter informações sobre filmes, séries e programas de TV.
          </p>
          <a
            href='https://github.com/ViniciusfAraujo/netflix-react'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>GitHub</button>
          </a>
          <a
            href='https://netflix-react-lyart.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Site</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologias</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind css
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Voltar</p>
        </Link>
      </div>
    </div>
  )
}

export default projectoRick