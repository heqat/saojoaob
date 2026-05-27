import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      pergunta: "Quando serão os dias de festa do Carnaval do Papangu 2026?",
      resposta:
        "A festa oficial começa na sexta-feira de carnaval, mas as prévias e o clima de folia tomam conta da cidade semanas antes. Fique ligado na nossa programação oficial para não perder os blocos de rua, as prévias e nosso Baile Municipal.",
    },
    {
      pergunta: "Como chegar em Bezerros?",
      resposta:
        "Bezerros fica localizada no Agreste de Pernambuco, às margens da BR-232, a cerca de 100km de Recife e 30km de Caruaru. O acesso é fácil e duplicado, com diversas opções de ônibus saindo do Terminal Integrado de Passageiros (TIP) em Recife.",
    },
    {
      pergunta: "É seguro levar crianças?",
      resposta:
        "Sim! O Carnaval de Bezerros é conhecido por ser um dos mais familiares e seguros do estado. Temos o polo infantil e horários mais tranquilos durante o dia, ideal para apresentar a cultura dos Papangus aos pequenos com tranquilidade.",
    },
    {
      pergunta: "Com que roupa eu vou?",
      resposta:
        "Use roupas leves e confortáveis, o clima está bem quente e a grande concentração de pessoas deixam o local ainda mais abafado.",
    },
    {
      pergunta:
        "Posso circular com recipientes de vidro nas imediações do palco principal?",
      resposta: "Não, não é permitido.",
    },
    {
      pergunta: "Onde será o local de apoio para emergências?",
      resposta:
        "Teremos quatro pontos de apoio: Ao lado da Matriz; atrás do palco do QG do Frevo; atrás do palco da Centenária; em frente à casa de mulher. Também temos a UPA 24h em pleno funcionamento. Mais informações e contatos disponíveis em 'Serviços' ",
    },
  ];

  // Função para alternar (abrir/fechar)
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
        <title>FAQ - Carnaval do Papangu 2025</title>
        <meta name="title" content="FAQ - Carnaval do Papangu 2026" />

        <meta
          property="og:url"
          content="https://carnaval.bezerros.pe.gov.br/faq"
        />
        <meta property="og:title" content="FAQ - Carnaval do Papangu 2026" />
        <meta
          property="twitter:url"
          content="https://carnaval.bezerros.pe.gov.br/faq"
        />
        <meta
          property="twitter:title"
          content="FAQ - Carnaval do Papangu 2026"
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
        <div className="divisoria-overlap">
          <img src="/faixa-2.png" alt="Divisória decorativa" loading="lazy" />
        </div>
      </main>

      <Footer />
    </>
  );
}
