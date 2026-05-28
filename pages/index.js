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

import marcaPrefeitura from "../public/marca-prefeitura.png";

export default function Home() {
  const router = useRouter();

  const nomesOficiaisPalcos = {
    "QG do Frevo": "Polo Lucas Cardoso",
    "Palco Cultural": "Polo Mestre J. Borges",
    "Palco Centenária": "Polo Mestre Lula Vassoureiro",
    "Palco São Sebastião": "Polo Ronaldo Souto Maior",
    "Espaço Frevo": "Polo Malvina Salvador",
    "Forró do Papangu": "Polo Zezé e Zezita",
    "Espaço Kids": "Polo Infantil",
    "Polo Mercado Barra Branca": "Polo Mercado Barra Branca",
  };

  const [busca, setBusca] = useState("");
  const [abaAtiva, setAbaAtiva] = useState("apresentacao");
  const [videoRodando, setVideoRodando] = useState(false);

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
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
                    <div className="logog mx-auto mb-1"></div>

                    <p className="m-apresentacao-texto">
                      Distante 100 km do Recife, o município de Bezerros, no
                      Agreste, também é conhecido como um dos polos juninos mais
                      autênticos do interior, mantendo viva a tradição do forró
                      pé de serra. O São João mais frio, mais alto e mais
                      aconchegante do mundo, na Serra Negra, tem como tema
                      "DAQUI DO ALTO, TUDO É MAIS BONITO!", uma referência às
                      belas paisagens naturais, ao sabor peculiar das comidas
                      típicas, a cultura dos grupos culturais e os pontos
                      turísticos que atraem milhares de pessoas todos os anos.
                    </p>

                    <p className="m-apresentacao-texto">
                      São aproximadamente 10 km entre a cidade e o Pólo
                      Cultural. Com temperatura média de 16 graus e sensação
                      térmica que chega a 12 graus, o São João na Serra Negra
                      tornou-se um evento consolidado no calendário festivo do
                      estado.
                      <strong> A SERRA NEGRA ESPERA POR VOCÊ!!! </strong>
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
                          src="https://www.youtube.com/embed/U3bWmghjFoE?si=osIz3G4vE0rtyJRe?autoplay=1"
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
                            <h3>MILEIDE</h3>
                          </div>

                          <div className="homenageado-spacer"></div>

                          <div className="homenageado-selo">
                            <span className="badge-patrimonio">
                              HOMENAGEADA 2026
                            </span>
                          </div>
                        </div>

                        <div className="hero-homenageado-texto">
                          <p className="texto-artista">
                            O Carnaval do Papangu 2026 presta homenagem a
                            Mileide Santos, artista da terra que comanda o grupo
                            FolcPopular há 25 anos. À frente de um projeto
                            transformador, Mileide impacta a vida de pessoas
                            apaixonadas pela dança e pela cultura popular, que
                            ajudam a embalar o maior e melhor carnaval do
                            interior do Brasil.
                          </p>
                          <p className="texto-artista">
                            Bezerros lhe espera de braços abertos para curtir
                            com a gente uma festa plural, feita para todos os
                            públicos e para todas as formas de viver o Carnaval.
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
        <div className="divisoria-overlap">
          <img src="/faixa-2.png" alt="Divisória decorativa" loading="lazy" />
        </div>
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
        {/* 
        <section id="blocos" className="py-5" style={{ minHeight: "80vh" }}>
          <div className="container">
            <h2 className="m-titulo-programacao mb-5 text-center text-white">
              BLOCOS
            </h2>

            <div
              className="tabs-container fade-in-animation mb-4"
              style={{ gap: "10px" }}
            >
              {datasUnicasBlocos.map((data) => (
                <button
                  key={data}
                  className={`tab-btn ${dataBlocoAtiva === data ? "active-b" : ""}`}
                  onClick={() => setDataBlocoAtiva(data)}
                  style={{ fontWeight: "bold", minWidth: "80px" }}
                >
                  {data}
                </button>
              ))}
            </div>

            <div className="blocos-content fade-in-animation">
              {blocosFiltrados.length > 0 ? (
                <div className="blocos-grid">
                  {blocosFiltrados.map((bloco) => (
                    <div key={bloco.id} className="bloco-card">
                      <div className="bloco-header">
                        <i className="bx bx-time-five"></i>
                        <span>{bloco.horario}</span>
                      </div>

                      <div className="bloco-body">
                        <h4 className="bloco-nome">{bloco.nome}</h4>
                        {bloco.descricao && (
                          <p className="bloco-desc">{bloco.descricao}</p>
                        )}
                      </div>

                      <div className="bloco-footer">
                        <i className="bx bxs-map-pin bx-sm"></i>
                        <span className="local-text">{bloco.local}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-white mt-5">
                  <p>Nenhum bloco cadastrado para esta data.</p>
                </div>
              )}
            </div>
          </div>
        </section>
        */}
        <div className="divisoria-overlap">
          <img src="/faixa-2.png" alt="Divisória decorativa" loading="lazy" />
        </div>
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
        {/* 
        <div className="divisoria-overlap">
          <img src="/faixa-2.png" alt="Divisória decorativa" loading="lazy" />
        </div>
       
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
         */}
        <div className="divisoria-overlap">
          <img src="/faixa-2.png" alt="Divisória decorativa" loading="lazy" />
        </div>
      </main>
      <Footer />
    </>
  );
}
