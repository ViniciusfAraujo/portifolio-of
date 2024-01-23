import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import PdfButton from "./buttonCurriculo/PdfButton";
import Link from "next/link";
import React from "react";

const Main = () =>{
    return(
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className=" uppercase text-sm tracking-widest text-gray-400">VAMOS NOS CONECTAR</p>
                    <h1 className="py-4 text-[#F2EFEB] font-sans">Olá, eu sou <span className=" text-[#A69958]">Vinicius Araujo</span></h1>
                    <h1 className="py-2 text-[#F2EFEB] font-sans">Desenvolvedor web</h1>
                    <p className=" py-4 text-gray-400 max-w-[70%] m-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio. Iusto at, minus necessitatibus cum possimus quo illo numquam rem iure alias, veritatis accusantium quia autem assumenda odio eaque, provident maxime neque placeat? Voluptatibus praesentium repellendus earum blanditiis officia. 
                    </p>

                    <div className="flex items-center justify-between max-w-[330px] m-auto gap-4 py-4" >
                        <Link href="https://www.linkedin.com/in/vinicius-araujo-304601269/" target="_blank">
                            <div className=" rounded-full shadow-md shadow-gray-400 bg-[#D9D1C7]  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaLinkedinIn/>
                            </div>
                        </Link>

                        <Link href="https://github.com/ViniciusfAraujo" target="_blank">
                            <div className=" rounded-full shadow-md shadow-gray-400  bg-[#D9D1C7] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaGithub/>
                            </div>
                        </Link>

                        <Link href="https://www.instagram.com/viniciusar13/" target="_blank">
                            <div className=" rounded-full shadow-md shadow-gray-400 bg-[#D9D1C7] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                <FaInstagram/>
                            </div>
                        </Link>
                        
                        <div>
                            <PdfButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main