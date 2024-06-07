import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function VitrineCriativa() {
    return (
        <>
            <Head>
                <title>Vitrine Criativa</title>
                <meta name="title" content="Vitrine Criativa" />

                <meta property="og:url" content="https://carnaval.bezerros.pe.gov.br/homenageados" />
                <meta property="og:title" content="Vitrine Criativa - São João Bezerros 2024" />
                <meta property="twitter:url" content="https://carnaval.bezerros.pe.gov.br/homenageados" />
                <meta property="twitter:title" content="Vitrine Criativa - São João Bezerros 2024" />
            </Head>

            <Navbar />

            <main>
                <section id="Vitrine Criativa" className="d-flex justify-content-center align-items-center flex-column">
                    <div className="container">
                        <h1 className="m-titulo-secao mt-5 text-white text-center">Vitrine Criativa</h1>

                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <div className="container-homenageado">
                                <img src="/jborges.png" className="imagem-artista"></img>
                            </div>
                            <div className="container-homenageado mt-4">
                                <img src="/texto-jborges.png" className="texto-artista"></img>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
            <Footer />
        </>
    )
}