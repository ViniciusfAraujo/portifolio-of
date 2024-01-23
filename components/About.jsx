import Image from "next/image";
import React from "react";

const About = () => {
    return(
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className=" col-span-2">
                    <p className=" uppercase text-xl tracking-widest text-[#A69958] font-mono">#Sobre</p>
                    <h2 className="py-4 text-[#F2EFEB]">Quem Sou eu</h2>
                    <p className="py-2 text-gray-400">Olá, meu nome é Vinicius, tenho 23 anos e moro na cidade de São Paulo, capital. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na FAM - Faculdade das Américas. Estou em busca da minha primeira oportunidade na área de tecnologia se tornando desenvolvedor web,  estou animado e ansioso para dar meu primeiro passo na área de tecnologia.</p>
                </div>
                <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex item-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className=" rounded-xl m-auto" src="/image/fotominha1.jpg" alt="/" width='350' height='200'/>
                </div>
            </div>
        </div>
    )
}

export default About