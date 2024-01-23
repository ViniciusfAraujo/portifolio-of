import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90){
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow)
    }, []);

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 shadow-2xl z-[100]'}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href='/'>
                    <Image src="/image/logoof.png" alt="logo" width='125' height='50'/>
                </Link>
                <div>
                    <ul className="hidden md:flex font-bold font-mono">
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Inicio</li>
                        </Link>
                        <Link href='/#about'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Sobre</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Skill</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Projetos</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Contato</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 h-screen w-full bg-black/50" : ''}>
                <div className={nav ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#3D403A] p-10 ease-in duration-500" : " fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src='/image/logoof.png' alt="/" width='87' height='35' />
                            <div onClick={handleNav}  className=" rounded-full shadow-lg p-3 cursor-pointer">
                                <AiOutlineClose className="text-white"/>
                            </div>
                        </div>
                        <div className=" border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, deleniti!</p>
                        </div>
                    </div>

                    <div className=" py-4 flex flex-col">
                        <ul className=" uppercase font-mono font-semibold">
                            <Link href='/'>
                                <li className="py-4 text-sm hover:scale-105 ease-in duration-150">Inicio</li>
                            </Link>
                            <Link href='/#about'>
                                <li className="py-4 text-sm hover:scale-105 ease-in duration-150">Sobre</li>
                            </Link>
                            <Link href='/#skills'>
                                <li className="py-4 text-sm hover:scale-105 ease-in duration-150">Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li className="py-4 text-sm hover:scale-105 ease-in duration-150">Projetos</li>
                            </Link>
                            <Link href='/#contact'>
                                <li className="py-4 text-sm hover:scale-105 ease-in duration-150">Contato</li>
                            </Link>
                        </ul>

                        <div className="border-b border-gray-300 my-4"></div>

                        <div className="pt-1">
                            <p className=" uppercase tracking-widest text-[#5651e5] ">Vamos nos conectar</p>
                            <div className=" flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <Link href="https://www.linkedin.com/in/vinicius-araujo-304601269/" target="_blank">
                                    <div className=" rounded-full shadow-lg shadow-gray-400 bg-[#D9D1C7] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn/>
                                    </div>
                                </Link>
                                <Link href="https://github.com/ViniciusfAraujo" target="_blank">
                                    <div className=" rounded-full shadow-lg shadow-gray-400 bg-[#D9D1C7] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub/>
                                    </div>
                                </Link>
                                <Link href="https://www.instagram.com/viniciusar13/" target="_blank">
                                    <div className=" rounded-full shadow-lg shadow-gray-400  bg-[#D9D1C7] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaInstagram/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar