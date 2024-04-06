import React, {useEffect, useState} from 'react';
import './Home.css'
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import User from '../projects/user/User';
import AcerteAlvo from '../projects/acerteAlvo/AcerteAlvo';
import Barbearia from '../projects/barbearia/Barbearia';
import Mecado from '../projects/mercado/Mercado';
export default function Home() {

useEffect(() => {
    const linkProjectos = document.querySelectorAll('.projetos p');
    console.log(linkProjectos)
}, []);

const projetos = [
    'User',
    'AcerteAlvo',
    'Barbearia',
    'Mercaco'
];


    return (

        <main className="home">

            <nav className='icon_links' >
                <a href="">
                    <MdEmail />
                </a>
                <a href="">
                    <FaGithub />
                </a>
                <a href="">
                    <FaLinkedin />
                </a>
            </nav>

            <p className='text_desenvolvedor'>Desenvolvedo de Software</p>

            <div className='painel_img_texto_sobre'>
              <Mecado />
            </div>

            <div className='painel_projetos'>
                <h2>Projetos</h2>

                <div className='projetos'>
                    <p>Home</p>
                    <p>Acerte o Alvo</p>
                    <p>Barbearia</p>
                    <p>Carrinho API</p>
                </div>
            </div>


            <div className='painel_nome_data'>
                <p>wewewwe2024</p>
            </div>

        </main>
    )
}