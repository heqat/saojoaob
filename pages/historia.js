import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Historia() {
  const [activeId, setActiveId] = useState("");

  const slides = [
    {
      id: "origem",
      ano: "ORIGEM",
      titulo: "História",
      texto:
        "O Município de Bezerros, no Agreste, é reconhecido nacionalmente como à Terra do Papangu e tem um dos carnavais mais tradicionais e autênticos do interior do Brasil. É o terceiro maior polo carnavalesco de Pernambuco, reunindo milhares de foliões todos os anos. Os papangus são figuras mascaradas e que trazem consigo à riqueza cultural das tradições populares passadas de geração em geração ao longo de anos, misturando  imaginário coletivo do povo bezerrense, misturando.",
    },
    {
      id: "nome",
      ano: "O NOME",
      titulo: "Surge o Papangu",
      texto:
        "O tempo passou e a brincadeira ganhou vida entre os moradores. Quando os mascarados surgiam nas ruas para pedir a comida, as crianças gritavam para seus familiares: 'Lá vem os papa-angu!'. Foi dessa expressão popular que surgiu o tradicional nome do Papangu, hoje o grande anfitrião do carnaval de Bezerros.",
    },
    {
      id: "hoje",
      ano: "HOJE",
      titulo: "Patrimônio Cultural Imaterial",
      texto:
        "O Carnaval do Papangu de Bezerros é referência pela originalidade e autenticidade do próprio anfitrião que é Patrimônio Cultural Imaterial de Pernambuco, conforme Lei Estadual Nº 13.773/20209. O nome é uma junção das palavras “papa” + “angu”, traduzindo o costume de pedir comida de milho (angu) nas residências.",
    },
    {
      id: "hist, mov e enc",
      ano: "TEMA",
      titulo: "HISTÓRIA, MOVIMENTO E ENCANTO",
      texto:
        "Em 2026, o Carnaval do Papangu de Bezerros tem como tema central “História, Movimento e Encanto” que destaca os elementos marcantes de sua trajetória: a tradição centenária, o mistério das máscaras, a dança pelas ruas e o colorido dos festejos carnavalescos.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    slides.forEach((slide) => {
      const element = document.getElementById(slide.id);
      if (element) observer.observe(element);
    });

    const footerElement = document.getElementById("footer");
    if (footerElement) observer.observe(footerElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>História - Carnaval 2026</title>
      </Head>

      <Navbar />

      <div className="historia-wrapper">
        <div className="background-fixed"></div>
        <div className="background-overlay"></div>

        <div className="scroll-indicators">
          {slides.map((slide) => (
            <a href={`#${slide.id}`} key={slide.id} className="indicator-group">
              <span className="indicator-label">{slide.titulo}</span>
              <div
                className={`indicator-dot ${
                  activeId === slide.id ? "active" : ""
                }`}
              ></div>
            </a>
          ))}

          {/* Indicador do Footer */}
          <a href="#footer" className="indicator-group">
            <span className="indicator-label">Rodapé</span>
            <div
              className={`indicator-dot ${
                activeId === "footer" ? "active" : ""
              }`}
            ></div>
          </a>
        </div>

        {/* --- SLIDES --- */}
        {slides.map((slide) => (
          <section id={slide.id} key={slide.id} className="historia-section">
            <div className="historia-card">
              <span className="historia-ano">{slide.ano}</span>
              <h2 className="historia-titulo">{slide.titulo}</h2>
              <p className="historia-texto">{slide.texto}</p>

              <img
                src="/ornamento.svg"
                alt="Detalhe"
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  right: "-30px",
                  width: "100px",
                  opacity: 0.2,
                  transform: "rotate(-15deg)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </section>
        ))}

        <section
          id="footer"
          className="historia-section"
          style={{ height: "auto", padding: 0, minWidth: "100vw" }}
        >
          <div style={{ width: "100%" }}>
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}
