import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      pergunta: "Quais serão os dias de São João na Serra Negra?",
      resposta:
        "O São João na Serra Negra acontecerá nos dias 13, 14, 20, 21, 23, 24, 27 e 28 de junho de 2026. Prepare-se para viver o São João mais alto, mais frio e mais aconchegante do mundo!",
    },
    {
      pergunta: "Quais serão os dias do São João do Sítio à Cidade?",
      resposta:
        "O São João do Sítio à Cidade percorrerá diversas comunidades rurais de Bezerros ao longo do mês de junho, e nós temos um encontro marcado nos dias 03, 05, 10, 11, 17, 25 e 26, então já anota na agenda!",
    },
    {
      pergunta: "Como chegar à Serra Negra?",
      resposta:
        "A Serra Negra está localizada a aproximadamente 10 km do centro de Bezerros. O acesso pode ser feito por meio de carro e moto. Siga as sinalizações e aproveite o caminho até um dos cenários mais bonitos do Agreste pernambucano.",
    },
    {
      pergunta: "É seguro levar crianças?",
      resposta:
        "Com certeza! O São João da Serra Negra é um evento pensado para toda a família. Recomendamos apenas que crianças estejam sempre acompanhadas por um responsável e que seja combinado um ponto de encontro em caso de desencontro.",
    },
    {
      pergunta: "Com que roupa eu devo ir?",
      resposta:
        "A Serra Negra possui um clima frio, especialmente no fim da tarde e à noite. Nossa dica é apostar em roupas confortáveis e agasalhos, assim você poderá aproveitar a festa com maior tranquilidade.",
    },
    {
      pergunta:
        "Posso circular com recipientes de vidro nas imediações do São João da Serra Negra?",
      resposta:
        "Não. Por questões de segurança, não é permitida a circulação com recipientes de vidro na área do evento. Prefira embalagens plásticas ou reutilizáveis para contribuir com a segurança e o bem-estar de todos.",
    },
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Fecha se já estiver aberto
    } else {
      setActiveIndex(index); // Abre o novo e fecha o anterior
    }
  };

  return (
    <>
      <Head>
        <title>FAQ - São João na Serra Negra 2026</title>
        <meta name="title" content="FAQ - São João na Serra Negra 2026" />

        <meta property="og:url" content="https://saojoao.pe.gov.br/faq" />
        <meta
          property="og:title"
          content="FAQ - São João na Serra Negra 2026"
        />
        <meta property="twitter:url" content="https://saojoao.pe.gov.br/faq" />
        <meta
          property="twitter:title"
          content="FAQ - São João na Serra Negra 2026"
        />
      </Head>

      <Navbar />

      <main>
        <section id="faq">
          <div className="container d-flex flex-column align-items-center">
            <p className="page-subtitle fade-in-animation">
              Tudo o que você precisa saber para curtir a folia com
              tranquilidade.
            </p>

            <div className="faq-container">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  } fade-in-animation`}
                  style={{ animationDelay: `${index * 0.1}s` }} // Efeito cascata
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="question-text">{item.pergunta}</span>
                    <span className="icon-toggle">
                      <i className="bx bx-plus"></i> {/* Ícone do Boxicons */}
                    </span>
                  </button>

                  <div className="faq-answer">
                    <div className="answer-content">{item.resposta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="divisoria"></div>
      </main>

      <Footer />
    </>
  );
}
