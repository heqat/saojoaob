import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Image from "next/image";


import marca from '../public/selo.png'

export default function PatrimonioCultural() {

    useEffect(() => {
        const btnArrow = document.getElementById('btn-arrow');
        const sectionApresentacao = document.getElementById('patrimonio');

        btnArrow.addEventListener('click', handleClickBtnArrow);

        function handleClickBtnArrow() {
            sectionApresentacao.scrollIntoView();
        }
    }, [])

    return (
        <>
            <Head>
                <title>Patrimônio Cultural - São João 2023 - Bezerros-PE</title>
                <meta name="title" content="Patrimônio Cultural - São João 2023 - Bezerros-PE"></meta>
            </Head>
            <Navbar />
            <main>
                <section id='hero'>
                    <div className='bg-hero' data-parallax="scroll" data-image-src="/bg-patrimonio.jpg">
                        
                        <button type="button" id="btn-arrow" className="arrow-down"><i className='bx bx-chevron-down bx-fade-down display-1 text-white'></i></button>

                    </div>
                </section>
                <section id='patrimonio' className='pt-5 mb-5'>
                    <div className='container d-flex justify-content-center align-items-center flex-column'>

                        <h1 className="m-titulo-secao titulo mb-5 text-center">Patrimônio Cultural Imaterial de Pernambuco</h1>

                        <p className="m-apresentacao-texto text-white">O São João na Serra Negra é uma das festas mais tradicionais no interior de Pernambuco, atraindo forrozeiros de todos os cantos do Brasil e até do mundo. Embalada pelo ritmo do forró autêntico, a festa tornou-se Patrimônio Cultural Imaterial de Pernambuco, a partir da Resolução Nº 1.897, aprovada em 19 de abril de 2023, pela Assembléia Legislativa de Pernambuco (Alepe).</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}