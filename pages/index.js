import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { artistas } from "../components/data/artistasConfirmados";
import { programacaoGeral } from "../components/programacaoCompleta";
import { blocosData } from "../components/blocosData";
import { sitioCidade, cidade } from "../components/sitioCidade";

import marcaPrefeitura from "../public/marca-prefeitura.png";

export default function Home() {
  const router = useRouter();

  const nomesOficiaisPalcos = {};

  const [busca, setBusca] = useState("");
  const [abaAtiva, setAbaAtiva] = useState("apresentacao");
  const [videoRodando, setVideoRodando] = useState(false);

  const [abaSitioCidade, setAbaSitioCidade] = useState("sitio");

  const [diaAtivo, setDiaAtivo] = useState(programacaoGeral[0]?.data || "");

  const [palcoFiltro, setPalcoFiltro] = useState("Todos");
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const dropdownRef = useRef(null);

  const diasDisponiveis = [
    ...new Set(programacaoGeral.map((item) => item.data)),
  ];

  const eventosDoDia = programacaoGeral.filter(
    (item) => item.data === diaAtivo,
  );

  const palcosDoDia = [
    "Todos",
    ...new Set(eventosDoDia.map((item) => item.palco)),
  ];

  const eventosFiltrados = eventosDoDia.filter((evento) => {
    if (palcoFiltro === "Todos") return true;
    return evento.palco === palcoFiltro;
  });

  const eventosPorPalco = eventosFiltrados.reduce((acc, evento) => {
    if (!acc[evento.palco]) {
      acc[evento.palco] = [];
    }
    acc[evento.palco].push(evento);
    return acc;
  }, {});

  const ordenarHorarioEvento = (a, b) => {
    const getMinutos = (time) => {
      if (!time) return 0;
      let [horas, minutos] = time.split(":").map(Number);

      if (horas < 5) horas += 24;

      return horas * 60 + minutos;
    };

    return getMinutos(a.horario) - getMinutos(b.horario);
  };

  // Aplica a nova ordenação
  Object.keys(eventosPorPalco).forEach((palco) => {
    eventosPorPalco[palco].sort(ordenarHorarioEvento);
  });

  const [dataBlocoAtiva, setDataBlocoAtiva] = useState(
    blocosData[0]?.data || "",
  );

  const datasUnicasBlocos = [...new Set(blocosData.map((item) => item.data))];

  const blocosFiltrados = blocosData
    .filter((item) => item.data === dataBlocoAtiva)
    .sort((a, b) => a.horario.localeCompare(b.horario));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownAberto(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("baile");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>São João 2026 - Bezerros-PE</title>
        <meta name="title" content="São João 2026 - Bezerros-PE"></meta>
        <link rel="preload" href="/logo-grande.png" as="image" />
      </Head>

      <Navbar />

      <main>
        <section
          className={`hero-interativo d-flex flex-column align-items-center ${
            abaAtiva === "apresentacao" ? "bg-festa" : "bg-homenageado"
          }`}
        >
          <div
            className="container d-flex justify-content-center mt-3 position-relative"
            style={{ zIndex: 10, flex: "0 0 auto" }}
          >
            <div className="toggle-container shadow-sm">
              <button
                className={`toggle-btn ${
                  abaAtiva === "apresentacao" ? "ativo" : ""
                }`}
                onClick={() => setAbaAtiva("apresentacao")}
              >
                🎭 A FESTA
              </button>
              <button
                className={`toggle-btn ${
                  abaAtiva === "embaixador" ? "ativo" : ""
                }`}
                onClick={() => setAbaAtiva("embaixador")}
              >
                🎉 EMBAIXADOR
              </button>
            </div>
          </div>

          <div className="container conteudo-fixo w-100 flex-grow-1 d-flex justify-content-center position-relative">
            {abaAtiva === "apresentacao" && (
              <div className="fade-in-animation w-100">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 col-12 text-white text-center mb-3 mb-lg-0">
                    <Image
                      src="/logo-grande.png"
                      alt="Logo São João na Serra Negra"
                      width={250}
                      height={130}
                      priority
                      loading="eager"
                      className="mx-auto mb-1 img-logo-principal"
                    />
                    <p className="m-apresentacao-texto">
                      “Daqui do alto, tudo é mais bonito!” - É com essa certeza
                      que Bezerros promove mais uma edição do São João mais
                      autêntico do interior, com valorização da arte, cultura,
                      história e tradição. O São João na Serra Negra atrai,
                      todos os anos, milhares de turistas, visitantes e
                      forrozeiros de Pernambuco, do Brasil e do mundo que buscam
                      aproveitar a tradicionalidade do forró pé-de-serra,
                      atrelado ao clima frio, alto e aconchegante que só a Serra
                      Negra sabe oferecer. Com temperatura média de 16 graus e
                      sensação térmica que chega a 12 graus, a festividade conta
                      com oito dias de festas, nas datas de 13, 14, 20, 21, 23,
                      24, 27 e 28 de junho.
                    </p>

                    <p className="m-apresentacao-texto">
                      Bezerros espera por você de braços abertos para vivenciar
                      o São João mais alto, mais frio e mais aconchegante do
                      mundo!!!
                    </p>

                    <div className="button-container justify-content-center mt-2">
                      {/* <a className="m-btn-historia" href="/historia">
                        HISTÓRIA
                      </a> */}
                      <a className="m-btn-historia" href="/servicos">
                        SERVIÇOS
                      </a>
                      <a className="m-btn-historia" href="/faq">
                        FAQ
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-6 col-12">
                    <div className="video-wrapper shadow-lg">
                      {!videoRodando ? (
                        <div
                          className="video-capa d-flex justify-content-center align-items-center flex-column"
                          onClick={() => setVideoRodando(true)}
                        >
                          <button className="m-btn-play-video">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="80"
                              height="80"
                              fill="white"
                              className="bi bi-play-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.89 2.59a.5.5 0 0 1 0 .814l-3.89 2.59a.5.5 0 0 1-.52-.038l-.001-4.016z" />
                            </svg>
                          </button>
                          <span className="texto-ver-video mt-3">
                            ASSISTA AO VÍDEO
                          </span>
                        </div>
                      ) : (
                        <iframe
                          className="hero-video-frame"
                          src="https://www.youtube.com/embed/arN2FUfL4gU?si=cqnBlgDQFbUCCR4z&autoplay=1"
                          title="Vídeo São João Bezerros"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {abaAtiva === "embaixador" && (
              <div className="fade-in-animation w-100 h-100">
                <div className="row align-items-center justify-content-center h-100">
                  <div className="col-lg-12 col-12 d-flex justify-content-center">
                    {" "}
                    <div className="hero-homenageado-wrapper">
                      <div className="hero-homenageado-foto"></div>

                      <div className="hero-homenageado-card text-white text-center">
                        <div className="homenageado-header">
                          <div className="homenageado-nome">
                            <h3>SANTANNA</h3>
                            <div className="homenageado-titulo">O Cantador</div>
                          </div>

                          <div className="homenageado-spacer"></div>

                          <div className="homenageado-selo">
                            <span className="badge-patrimonio">
                              EMBAIXADOR 2026
                            </span>
                          </div>
                        </div>

                        <div className="hero-homenageado-texto">
                          <p className="texto-artista">
                            O Embaixador Oficial do São João na Serra Negra em
                            2026 é o artista Santanna - O Cantador. Nascido em
                            Juazeiro do Norte, no Ceará, em 29 de fevereiro de
                            1960, Cícero Pereira de Souza, consagrado como
                            Santanna, nosso embaixador representa a música
                            nordestina na autenticidade e originalidade do
                            verdadeiro forró. Cantor e compositor, com mais de
                            100 mil cópias vendidas do CD “Xote Pé de Serra”,
                            Santanna é considerado um dos maiores artistas
                            brasileiro do forró, tendo suas canções celebradas
                            em várias regiões do país.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            className="arrow-down"
            onClick={handleScrollDown}
          >
            <i className="bx bx-chevron-down bx-fade-down display-1 text-white"></i>
          </button>
        </section>
        <div className="divisoria"></div>

        <section
          id="programacao"
          className="py-5"
          style={{ minHeight: "80vh" }}
        >
          <div className="container">
            <h2 className="m-titulo-programacao mb-5 text-center">
              PROGRAMAÇÃO OFICIAL
            </h2>

            <p className="programacao-aviso text-center mb-4">
              Os horários das apresentações ainda serão divulgados oficialmente.
            </p>

            <div className="controls-container fade-in-animation">
              {diasDisponiveis.map((data) => (
                <button
                  key={data}
                  className={`tab-btn ${diaAtivo === data ? "active" : ""}`}
                  onClick={() => setDiaAtivo(data)}
                >
                  {data}
                </button>
              ))}

              <div className="filter-wrapper" ref={dropdownRef}>
                <button
                  className="filter-btn"
                  onClick={() => setDropdownAberto(!dropdownAberto)}
                >
                  <i className="bx bx-filter-alt"></i>
                  {palcoFiltro === "Todos" ? "TODOS OS PALCOS" : palcoFiltro}
                  <i
                    className={`bx bx-chevron-down ${dropdownAberto ? "bx-rotate-180" : ""}`}
                    style={{ transition: "0.3s" }}
                  ></i>
                </button>

                <ul
                  className={`filter-dropdown ${dropdownAberto ? "show" : ""}`}
                >
                  {palcosDoDia.map((palco) => (
                    <li
                      key={palco}
                      className={`filter-item ${palcoFiltro === palco ? "selected" : ""}`}
                      onClick={() => {
                        setPalcoFiltro(palco);
                        setDropdownAberto(false);
                      }}
                    >
                      {palco}
                      {palcoFiltro === palco && <i className="bx bx-check"></i>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="programacao-content">
              {Object.keys(eventosPorPalco).length > 0 ? (
                Object.keys(eventosPorPalco).map((palco) => (
                  <div key={palco} className="palco-section fade-in-animation">
                    <h3 className="palco-title">
                      {nomesOficiaisPalcos[palco] ? (
                        <>
                          {nomesOficiaisPalcos[palco]}{" "}
                          <br className="d-md-none" />
                          <span
                            style={{
                              fontSize: "0.6em",
                              opacity: 0.8,
                              fontWeight: "normal",
                              marginLeft: "10px",
                            }}
                          >
                            ({palco})
                          </span>
                        </>
                      ) : (
                        palco
                      )}
                    </h3>

                    <div className="cards-grid">
                      {eventosPorPalco[palco].map((evento) => (
                        <div key={evento.id} className="prog-card">
                          <div className="card-header-time">
                            <span className="time-badge">
                              <i className="bx bx-time-five"></i>{" "}
                              {evento.horario}
                            </span>
                            {evento.tag && (
                              <span className="genre-badge">{evento.tag}</span>
                            )}
                          </div>
                          <div className="card-body">
                            <h4 className="artist-name">{evento.artista}</h4>
                          </div>
                          <div className="card-footer">
                            <i className="bx bx-calendar"></i> {evento.data}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-white mt-5">
                  <p>Nenhuma programação encontrada para este filtro.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="divisoria"></div>

        <section id="sitio-cidade" className="py-5">
          <div className="container">
            <h2 className="m-titulo-programacao mb-5 text-center">
              SÍTIO À CIDADE
            </h2>

            <div className="sitio-tabs">
              <button
                className={`tab-btn ${
                  abaSitioCidade === "sitio" ? "active" : ""
                }`}
                onClick={() => setAbaSitioCidade("sitio")}
              >
                SÍTIOS
              </button>

              <button
                className={`tab-btn ${
                  abaSitioCidade === "cidade" ? "active" : ""
                }`}
                onClick={() => setAbaSitioCidade("cidade")}
              >
                CIDADE
              </button>
            </div>

            {abaSitioCidade === "sitio" && (
              <div className="sitio-grid">
                {sitioCidade.map((evento) => (
                  <div key={evento.id} className="sitio-card">
                    <div className="sitio-header">
                      <span className="sitio-data">{evento.data}</span>

                      <h3 className="sitio-local">
                        <i className="bx bxs-map"></i>
                        {evento.local}
                      </h3>
                    </div>

                    <div className="sitio-programacao">
                      {evento.programacao.length > 0 ? (
                        evento.programacao.map((item, index) => (
                          <div key={index} className="sitio-programacao-item">
                            <span className="sitio-hora">
                              <i className="bx bx-time-five"></i> {item.horario}
                            </span>

                            <span className="sitio-atracao">
                              {item.atracao}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="sitio-em-breve">
                          Programação em breve
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {abaSitioCidade === "cidade" && (
              <div className="sitio-grid">
                {cidade.map((evento) => (
                  <div key={evento.id} className="sitio-card">
                    <div className="sitio-header">
                      <h3 className="sitio-local">
                        <i className="bx bxs-map"></i>
                        {evento.local}
                      </h3>
                    </div>

                    <div className="sitio-em-breve">Programação em breve</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <div className="divisoria"></div>

        <section id="mapa">
          <div className="d-flex flex-column justify-content-center align-items-center m-container-mapa">
            <h2 className="m-titulo-secao mt-4 mb-4">
              <div className="ilustracao mapa"></div>
              MAPA
            </h2>
            <iframe
              loading="lazy"
              className="mb-5 map-frame"
              src="https://www.google.com/maps/d/u/0/embed?mid=17ylFCMfPZAy4kWIwmMJBi6WriHAnsZg&ehbc=2E312F"
            ></iframe>
          </div>
        </section>

        <div className="divisoria"></div>

        <section id="patrocinio" className="py-4">
          <div className="container d-flex justify-content-center">
            <Image
              src="/regua.png"
              alt="Patrocinadores, Apoio e Realização"
              width={1200}
              height={300}
              className="img-fluid"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "800px",
              }}
            />
          </div>
        </section>

        <div className="divisoria"></div>
      </main>
      <Footer />
    </>
  );
}
