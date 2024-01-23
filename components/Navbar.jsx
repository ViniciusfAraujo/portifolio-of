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
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#F2EFEB]' : 'fixed w-full h-20 shadow-2xl z-[100] bg-[#F2EFEB]'}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href='/'>
                    <Image src="/image/Vinicius1.png" alt="logo" width='120' height='120'/>
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
                <div className={nav ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#F2EFEB] p-10 ease-in duration-500" : " fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src='/image/Vinicius1.png' alt="/" width='100' height='100' />
                            <div onClick={handleNav}  className=" rounded-full shadow-lg p-3 cursor-pointer">
                                <AiOutlineClose className="text-black"/>
                            </div>
                        </div>
                        
                    </div>

                    <div className=" py-4 flex flex-col">
                        <ul className=" uppercase font-mono font-semibold">
                            <Link href='/'>
                                <li onClick={() => setNav(false)}  className="py-4 text-sm hover:scale-105 ease-in duration-150">Inicio</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)}  className="py-4 text-sm hover:scale-105 ease-in duration-150">Sobre</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)}  className="py-4 text-sm hover:scale-105 ease-in duration-150">Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)}  className="py-4 text-sm hover:scale-105 ease-in duration-150">Projetos</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)}  className="py-4 text-sm hover:scale-105 ease-in duration-150">Contato</li>
                            </Link>
                        </ul>

                        <div className="border-b border-gray-300 my-4"></div>

                        <div className="pt-1">
                            <p className=" uppercase tracking-widest text-[#888C81]  ">Vamos nos conectar</p>
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