import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import marcaTuristica from '../public/marca-turistica.png'

import terraPapangu from '../public/terra-do-papangu.png'
import terraTradicoes from '../public/terra-de-tradicoes.png'
import terraBolos from '../public/terra-dos-bolos-e-doces.png'
import terraSerras from '../public/terra-das-serras.png'


export default function () {
    return (
        <>
            <Head>
                <title>Turismo - Bezerros - PE</title>
                <meta name="title" content="Turismo - Bezerros - PE"></meta>
            </Head>
            <main className="body">
                <Navbar />
                <header className="header-turismo container">
                    <div className="d-flex justify-content-center container-marca">
                        <Image src={marcaTuristica} className="marca-turistica" />
                    </div>
                    <nav className="w-100 mt-5 mb-5">
                        <div className='m-auto row'>

                            <a href="#terra-do-papangu" className="col p-0 m-0 text-center nav-link">
                                <div className='barra-colorida um'></div>
                                <span className="texto-nav">TERRA DO PAPANGU</span>

                            </a>

                            <a href="#terra-de-tradicoes" className="col p-0 m-0 text-center nav-link">
                                <div className='barra-colorida dois'></div>
                                <span className="texto-nav">TERRA DE TRADIÇÕES</span>

                            </a>

                            <a href="#terra-dos-bolos-e-doces" className="col p-0 m-0 text-center nav-link">
                                <div className='barra-colorida tres'></div>
                                <span className="texto-nav">TERRA DOS BOLOS E DOCES</span>

                            </a>

                            <a href="#terra-das-serras" className="col p-0 m-0 text-center nav-link">
                                <div className='barra-colorida quatro'></div>
                                <span className="texto-nav">TERRA DAS SERRAS</span>

                            </a>

                        </div>
                    </nav>
                </header>

                <section id="terra-do-papangu" className="mb-1">
                    <div className="row container m-auto">
                        <div className="col py-5 container-card-texto">
                            <p className="texto-card titulo display-5">TERRA DO PAPANGU</p>
                            <p className="texto-card">da arte e da cultura, que reune a criatividade do povo bezerrense!</p>

                        </div>
                        <div className="col container-imagem">
                            <Image src={terraPapangu} className="imagem-card" />
                        </div>
                    </div>
                </section>

                <section id="terra-de-tradicoes" className="mb-1">
                    <div className="row container m-auto mb-1">
                        <div className="col d-flex align-items-center">
                            <Image src={terraTradicoes} className="imagem-card" />
                        </div>
                        <div className="col py-5 container-card-texto">
                            <p className="texto-card titulo display-5">TERRA DE TRADIÇÕES</p>
                            <p className="texto-card"> da origem e da história de um povo aguerrido e altaneiro.</p>

                        </div>
                    </div>
                </section>

                <section id="terra-dos-bolos-e-doces" className="mb-1">
                    <div className="row container m-auto mb-1">
                        <div className="col py-5 container-card-texto">
                            <p className="texto-card titulo display-5">TERRA DOS BOLOS E DOCES</p>
                            <p className="texto-card">da culinária regional e do autêntico sabor familiar.</p>

                        </div>
                        <div className="col container-imagem d-flex align-items-center">
                            <Image src={terraBolos} className="imagem-card" />
                        </div>
                    </div>
                </section>

                <section id="terra-das-serras" className="mb-5">
                    <div className="row container m-auto mb-1">
                        <div className="col d-flex align-items-center">
                            <Image src={terraSerras} className="imagem-card" />
                        </div>
                        <div className="col py-5 container-card-texto">
                            <p className="texto-card titulo display-5">TERRA DAS SERRAS</p>
                            <p className="texto-card">da produção agrícola, dos campos floridos e do clima aconchegante.</p>

                        </div>
                    </div>
                </section>

                <Footer />

            </main>
        </>
    )
}