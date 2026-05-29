import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function VitrineCriativa() {
  return (
    <>
      <Head>
        <title>Vitrine Criativa - São João na Serra Negra</title>
        <meta name="title" content="Vitrine Criativa - São João" />
      </Head>

      <Navbar />

      <main className="vitrine-page">
        <div className="vitrine-container">
          <div className="vitrine-content-wrapper">
            {/* Coluna 1: Texto e Botão */}
            <div className="vitrine-info-card fade-in-animation">
              <p>
                A <strong>Vitrine Criativa</strong> é uma iniciativa da
                Secretaria de Planejamento e Inovação de Bezerros, realizada em
                parceria com a Secretaria de Turismo e Cultura de Bezerros e o
                SEBRAE/PE. O projeto tem como objetivo promover a exposição e a
                comercialização de obras do artesanato local, fortalecendo a
                identidade cultural e impulsionando o desenvolvimento econômico
                do município.
              </p>
              <p>
                Durante o São João na Serra Negra, um dos eventos mais
                tradicionais do município, a Vitrine se destaca como espaço
                estratégico para apresentação e venda das peças artesanais,
                atraindo visitantes de diversas regiões do Brasil e até do
                exterior.
              </p>
              <p>
                A <strong>Vitrine Criativa – Edição São João 2026</strong> está
                localizada no Polo de Eventos da Serra Negra. Conheça os
                expositores e venha prestigiar o talento e a originalidade dos
                nossos artesãos.
              </p>

              <a href="/#mapa" className="vitrine-btn-mapa">
                <i className="bx bx-map"></i> Ver no Mapa
              </a>
            </div>

            {/* Coluna 2: Galeria Mosaico (Bento Grid) */}
            <div className="vitrine-bento-grid fade-in-animation">
              <div className="bento-item bento-large">
                <img src="/vitrine1.jpg" alt="Artesanato em Destaque" />
              </div>
              <div className="bento-item">
                <img src="/vitrine2.jpg" alt="Arte Local 1" />
              </div>
              <div className="bento-item">
                <img src="/vitrine3.jpg" alt="Arte Local 2" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="divisoria"></div>

      <Footer />
    </>
  );
}
