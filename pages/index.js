import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import CardPalco from "../components/CardPalco";
import CardCidade from "../components/CardCidade";
import CardSitio from "../components/CardSitio";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import marca from "../public/marca2.png";
import devassa from "../public/devassa.png";
import kuat from "../public/kuat.png";
import governo from "../public/governo.png";
import fundarpe from "../public/fundarpe.png";
import empetur from "../public/empetur.png";
import sesc from "../public/sesc-senac.png";

export default function Home() {
  useEffect(() => {
    const btnPlayVideo = document.getElementById("btn-play-video");
    const containerVideo = document.getElementById("container-video");

    btnPlayVideo.addEventListener("click", handlePlayVideo);

    function handlePlayVideo() {
      event.preventDefault();
      btnPlayVideo.style.display = "none";
      containerVideo.innerHTML = `<iframe width=100% height=100% src="https://www.youtube.com/embed/EmgkGqSWJRI?autoplay=1" title="Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }

    const btnArrow = document.getElementById("btn-arrow");
    const sectionApresentacao = document.getElementById("apresentacao");

    btnArrow.addEventListener("click", handleClickBtnArrow);

    function handleClickBtnArrow() {
      sectionApresentacao.scrollIntoView();
    }
  });

  return (
    <>
      <Head>
        <title>São João 2025 - Bezerros-PE</title>
        <meta name="title" content="São João 2025 - Bezerros-PE"></meta>
      </Head>

      <Navbar />

      <main>
        <section id="hero">
          <div
            className="bg-hero"
            data-parallax="scroll"
            data-image-src="/bg-hero.jpg"
          >
            <div className="container d-flex justify-content-center align-items-center">
              <Image
                className="bg-hero-marca"
                src={marca}
                alt="marca são joão"
              ></Image>
            </div>
            <button type="button" id="btn-arrow" className="arrow-down">
              <i className="bx bx-chevron-down bx-fade-down display-1 text-white"></i>
            </button>
          </div>
        </section>
        <div className="divisoria"></div>
        <section id="apresentacao">
          <div className="container d-flex w-100 justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center text-center my-5 text-white">
              <h1 className="m-titulo-secao mb-4">O SÃO JOÃO NA SERRA NEGRA</h1>
              <p className="m-apresentacao-texto">
                Distante 100 km do Recife, o município de Bezerros, no Agreste,
                também é conhecido como um dos polos juninos mais autênticos do
                interior, mantendo viva a tradição do forró pé de serra. O São
                João mais frio, mais alto e mais aconchegante do mundo, na Serra
                Negra, tem como tema "DAQUI DO ALTO, TUDO É MAIS BONITO!", uma
                referência às belas paisagens naturais, ao sabor peculiar das
                comidas típicas, a cultura dos grupos culturais e os pontos
                turísticos que atraem milhares de pessoas todos os anos. São
                aproximadamente 10 km entre a cidade e o Pólo Cultural. Com
                temperatura média de 16 graus e sensação térmica que chega a 12
                graus, o São João na Serra Negra tornou-se um evento consolidado
                no calendário festivo do estado.
              </p>
              <h2 className="m-titulo-programacaotxt mb-4">
                PATRIMÔNIO CULTURAL IMATERIAL
              </h2>
              <p className="m-apresentacao-texto">
                O São João na Serra Negra é uma das festas mais tradicionais no
                interior de Pernambuco, atraindo forrozeiros de todos os cantos
                do Brasil e até do mundo. Embalada pelo ritmo do forró
                autêntico, a festa tornou-se Patrimônio Cultural Imaterial de
                Pernambuco, a partir da Resolução Nº 1.897, aprovada em 19 de
                abril de 2023, pela Assembléia Legislativa de Pernambuco
                (Alepe).
              </p>
            </div>
          </div>
        </section>
        <div className="divisoria"></div>
        <section id="clipe">
          <div
            id="container-video"
            className="d-flex justify-content-center align-items-center container-video"
            data-parallax="scroll"
            data-image-src="/bg-balao.jpg"
          >
            <button
              id="btn-play-video"
              type="button"
              className="m-btn-play-video"
            >
              <i className="bx bx-play-circle bx-tada display-1 text-white"></i>
            </button>
          </div>
        </section>

        <div className="divisoria"></div>

        <section id="programacao">
          <div className="">
            <div className="m-container-palcos-serra d-flex justify-content-center align-items-center flex-column">
              <div className="m-container-titulo">
                <h2 className="m-titulo-secao mt-5 text-center">PROGRAMAÇÃO</h2>
                <h3 className="m-titulo-programacao">SERRA NEGRA</h3>
              </div>
              <div className="container mt-3">
                <ul
                  className="nav nav-tabs justify-content-center"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active m-button-programacao palcos"
                      id="palcos-tab1"
                      data-bs-toggle="tab"
                      data-bs-target="#palcos-tab1-pane"
                      type="button"
                      role="tab"
                      aria-controls="palcos-tab1-pane"
                      aria-selected="true"
                    >
                      Palco Principal
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link m-button-programacao palcos"
                      id="palcos-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#palcos-tab2-pane"
                      type="button"
                      role="tab"
                      aria-controls="palcos-tab2-pane"
                      aria-selected="false"
                    >
                      Palco Cultural
                    </button>
                  </li>
                </ul>

                <div className="tab-content d-flex justify-content-center mb-5">
                  <div
                    className="tab-pane fade show active"
                    id="palcos-tab1-pane"
                    role="tabpanel"
                    aria-labelledby="palcos-tab1"
                    tabIndex="0"
                  >
                    <div className="d-flex justify-content-center flex-wrap">
                      <CardPalco
                        nome={[
                          "rei do cangaço", "marcão noventa", "alcymar", "novinho da paraiba", "maciel melo",
                        ]}
                        horario={["", " ", "", "", ""]}
                        dia="Sábado"
                        data="14/06"
                      />
                      <CardPalco
                        nome={[
                          "pau no xote", "liv morais", "luiz fidelis", "santana", "fabio carneirinho",
                        ]}
                        horario={["", " ", "", "", ""]}
                        dia="Domingo"
                        data="15/06"
                      />
                      <CardPalco
                        nome={[
                          "daniel gouveia", "cristina amaral", "henrique barbosa", "lady falcão", "dudu do acordeon",
                        ]}
                        horario={["", " ", "", "", ""]}
                        dia="Sábado"
                        data="21/06"
                      />
                      <CardPalco
                        nome={[
                          "walter lins", "juarez", "higor henrique", "ciel santos", "cezzinha"
                        ]}
                        horario={["", " ", "", "", ""]}
                        dia="Domingo"
                        data="22/06"
                      />
                      <CardPalco
                        nome={[
                          "almir rouche", "assisão", "geraldinho lins", "nena queiroga", "irah caldeira"
                        ]}
                        horario={["", " ", "", "", ""]}
                        dia="Segunda"
                        data="23/06"
                      />
                      <CardPalco
                        nome={[
                          "luizinho moreno", "morganna bernardo", "mestrinho", "bruninho lima", "geraldo azevedo"
                        ]}
                        horario={["", " ", " ", " ", ""]}
                        dia="Sábado"
                        data="28/06"
                      />
                      <CardPalco
                        nome={[
                          "amazan", "anderson alves", "waldonys", "petrucio amorim", "Joyce Alane"
                        ]}
                        horario={["", " ", "", "", ""]}
                        dia="Domingo"
                        data="29/06"
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="palcos-tab2-pane"
                    role="tabpanel"
                    aria-labelledby="palcos-tab2"
                    tabIndex="0"
                  >
                    <div className="d-flex justify-content-center flex-wrap">
                      <CardPalco
                        nome={[
                          "quadrilha", "banda de pífanos", "trio pé de serra", "quadrilha folcpopular", "trio pé de serra"
                        ]}
                        horario={[
                          "", " ", "", "", ""
                        ]}
                        dia="Sábado"
                        data="14/06"
                      />
                      <CardPalco
                        nome={[
                          "jamile", "clara elliys", "quadrilha", "zé barreto", "marcos montez"
                        ]}
                        horario={[
                          "", " ", "", "", ""
                        ]}
                        dia="Domingo"
                        data="15/06"
                      />
                      <CardPalco
                        nome={[
                          "michel", "cabila tamborete de forró", "quadrilha misturant", "vitor ferrari", "elas cantam gonzaga"
                        ]}
                        horario={[
                          "", " ", "", "", ""
                        ]}
                        dia="Sábado"
                        data="21/06"
                      />
                      <CardPalco
                        nome={[
                          "trio asa branca", "quadrilha", "papanguarte", "emerson cavalcanti", "elian do acordeon"
                        ]}
                        horario={[
                          "", " ", "", "", ""
                        ]}
                        dia="Domingo"
                        data="22/06"
                      />
                      <CardPalco
                        nome={[
                          "samara", "trio lampião a gás", "farra dos tops", "quadrilha folcpopular", "batalhão 44"
                        ]}
                        horario={[
                          "", " ", "", "", ""
                        ]}
                        dia="Segunda"
                        data="23/06"
                      />
                      <CardPalco
                        nome={[
                          "amanda leão", "dadau forró de 3", "eu, tu e elas", "quadrilha misturart", "trio pé de serra"
                        ]}
                        horario={[
                          "", " ", "", "", ""
                        ]}
                        dia="Sábado"
                        data="28/06"
                      />
                      <CardPalco
                        nome={[
                          "manoel da concertina", "os thalentos", "quadrilha riacho das almas", "quadrilha", "trio kabas da peste"
                        ]}
                        horario={["", " ", "", "", ""]}
                        dia="Domingo"
                        data="29/06"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
                    <div className="divisoria"></div>
            <div className="d-flex justify-content-center align-items-center flex-column m-container-palcos-cidade">
              <h3 className="m-titulo-programacao">SÍTIO À CIDADE</h3>
              <div className="container mt-3">
                <div className="container-card">
                  <div className="d-flex justify-content-center flex-wrap">
                    <CardSitio
                      nome={[
                        " EM BREVE!",
                      ]}
                      horario={[" "]}
                      dia="Sítio dos Remédios"
                      data="06/06"
                    />

                    <CardSitio
                      nome={[
                        "EM BREVE!",
                      ]}
                      horario={[""]}
                      dia="Areias"
                      data="11/06"
                    />
                    <CardSitio
                      nome={[
                        "EM BREVE!",
                      ]}
                      horario={[" "]}
                      dia="Cajazeiras"
                      data="13/06"
                    />
                    <CardSitio
                      nome={[
                        "EM BREVE!",
                      ]}
                      horario={[" "]}
                      dia="Boas Novas"
                      data="17/06"
                    />
                    <CardSitio
                      nome={[
                        "EM BREVE!",
                      ]}
                      horario={[" "]}
                      dia="Encruzilhada"
                      data="18/06"
                    />
                    <CardSitio
                      nome={[
                        "EM BREVE!",
                      ]}
                      horario={["19:00", "20:00", "21:30"]}
                      dia="Sapucarana"
                      data="26/06"
                    />

                    <CardCidade
                      nome={["EM BREVE!"]}
                      horario={[" "]}
                      dia="Centro da Cidade"
                      data="07/07"
                    />
                  </div>
                </div>
              </div>
              <div className="divisoria"></div>
            </div>

          

          
          </div>
        </section>

       
       
        <section id="mapa"> 
          <div className="d-flex flex-column justify-content-center align-items-center m-container-mapa">
            <h2 className="m-titulo-secao-linha mt-5 mb-5">MAPA</h2>
            <iframe
              loading="lazy"
              className="container mb-5"
              width="100%"
              height="100%"
              src="https://www.google.com/maps/d/u/0/embed?mid=17ylFCMfPZAy4kWIwmMJBi6WriHAnsZg&ehbc=2E312F"
            ></iframe>
          </div>
        </section>
        <div className="divisoria"></div>
       <section id="faq" className="pb-5">
  <div className="container d-flex justify-content-center align-items-center flex-column">
    <h2 className="m-titulo-secao-maior mt-5 mb-5">
      PERGUNTAS E RESPOSTAS
    </h2>
    <h2 className="m-titulo-secao-menor mt-5 mb-5">FAQ</h2>
    <div className="container accordion accordion-flush" id="accordionFlushExample">
    
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading14">
          <button
            className="accordion-button collapsed text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse14"
            aria-expanded="false"
            aria-controls="flush-collapse14"
          >
            Preciso pagar ingresso para participar dos shows?
          </button>
        </h2>
        <div
          id="flush-collapse14"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading14"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Não! O São João na Serra Negra é um evento gratuito e aberto ao público. Todos os shows e atrações culturais são acessíveis sem cobrança de ingresso.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading15">
          <button
            className="accordion-button collapsed text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse15"
            aria-expanded="false"
            aria-controls="flush-collapse15"
          >
            Como chegar à Serra Negra durante o evento?
          </button>
        </h2>
        <div
          id="flush-collapse15"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading15"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            O acesso pode ser feito por transporte próprio ou pelas vans durante os dias de festa. Informações sobre os horários e pontos de embarque são divulgadas nas redes sociais do evento.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading16">
          <button
            className="accordion-button collapsed text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse16"
            aria-expanded="false"
            aria-controls="flush-collapse16"
          >
            O evento é seguro para famílias e crianças?
          </button>
        </h2>
        <div
          id="flush-collapse16"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading16"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Sim. O São João na Serra Negra conta com segurança reforçada, presença da Guarda Municipal, Polícia Militar, equipes de saúde e estrutura voltada para receber todos os públicos com conforto e tranquilidade.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading17">
          <button
            className="accordion-button collapsed text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse17"
            aria-expanded="false"
            aria-controls="flush-collapse17"
          >
            Vai ter espaço para artesanato e comidas típicas?
          </button>
        </h2>
        <div
          id="flush-collapse17"
          className="accordion-collapse collapse"
          aria-labelledby="flush-heading17"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Sim! A festa valoriza a cultura local, com feirinhas de artesanato, comidas típicas, bebidas e muito forró pé de serra. É uma oportunidade de vivenciar o melhor do São João tradicional.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        <div className="divisoria"></div>

      
      </main>
      <Footer />
    </>
  );
}
