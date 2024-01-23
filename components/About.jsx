import Image from "next/image";
import React from "react";

const About = () => {
    return(
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className=" col-span-2">
                    <p className=" uppercase text-xl tracking-widest text-[#888C81] font-mono">#Sobre</p>
                    <h2 className="py-4 text-[#0D0D0D] ">Quem sou eu?</h2>
                    <p className="py-2 text-[#3D403A]">Olá, meu nome é Vinicius, tenho 23 anos e resido na vibrante cidade de São Paulo, capital. No momento, estou dedicado ao curso de Análise e Desenvolvimento de Sistemas na renomada FAM - Faculdade das Américas. Estou em busca da minha primeira oportunidade profissional na área de tecnologia, com o objetivo de me tornar um desenvolvedor. Estou animado e ansioso para iniciar esta trajetória.
                    Destaco-me por minha adaptabilidade, habilidades interpessoais, capacidade de trabalho em equipe e proatividade. Tenho um forte  em dedicação em estudar React e Node, e estou atualmente aprimorando minhas habilidades em Python. Nas horas vagas, leio livros, escuto podcasts e assisto animes.
                    Meu desejo é me tornar um profissional exemplar na área de desenvolvimento, buscando constantemente aprimorar minhas habilidades e conhecimentos. Estou comprometido em trilhar um caminho de crescimento profissional e contribuir significativamente para os desafios que a tecnologia apresenta. Estou ansioso para as oportunidades que o futuro reserva e para dar o meu melhor como desenvolvedor. </p>
                </div>
                <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex item-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className=" rounded-xl m-auto" src="/image/fotominha1.jpg" alt="/" width='350' height='200'/>
                </div>
            </div>
        </div>
    )
}

export default About