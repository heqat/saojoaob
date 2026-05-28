import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicosUteis() {
  return (
    <>
      <Head>
        <title>Nossos Serviços - São João na Serra Negra 2026</title>
        <meta
          name="title"
          content="Nossos Serviços - São João na Serra Negra 2026"
        />
      </Head>

      <Navbar />

      <main>
        <section id="servicos-uteis">
          <div className="services-grid">
            {/* ITEM 1 - VITRINE */}
            <div className="service-card">
              <img
                src="/BANDEIRA-01.png"
                className="card-bandeira"
                alt="Bandeirinhas"
              />
              <p className="nome-servico">VITRINE CRIATIVA</p>
              <p className="texto-servico">
                Espaço dedicado para a comercialização do artesanato local, com
                foco em produtos de grande apelo cultural. A ação é apoiada pela
                Sala do Empreendedor de Bezerros, em parceria com o SEBRAE.
                <br />
                <br />
                <strong>Local:</strong> Polo de Eventos da Serra Negra.
              </p>
            </div>

            {/* ITEM 2 - CAT */}
            <div className="service-card">
              <img
                src="/BANDEIRA-02.png"
                className="card-bandeira"
                alt="Bandeirinhas"
              />
              <p className="nome-servico">CENTRO DE TURISMO (CAT)</p>
              <p className="texto-servico">
                O Centro de Atendimento ao Turista é um ponto de apoio e
                informação ao visitante durante os dias de festa.
                <br />
                <br />
                <strong>Local:</strong> Entrada do Polo Cultural.
              </p>
            </div>

            {/* ITEM 3 - RECICLAR */}
            <div className="service-card">
              <img
                src="/BANDEIRA-03.png"
                className="card-bandeira"
                alt="Bandeirinhas"
              />
              <p className="nome-servico">RECICLAR É MASSA</p>
              <p className="texto-servico">
                Projeto voltado à educação ambiental, incentivo à reciclagem e
                apoio aos recicladores que atuam durante os dias de São João,
                coletando e separando o lixo gerado pelos forrozeiros.
                <br />
                <br />
                <strong>Local:</strong> Corredor de estandes de serviços.
                <br />
                <strong>Horário:</strong> 09h às 22h.
              </p>
            </div>

            {/* ITEM 4 - CIDADANIA */}
            <div className="service-card">
              <img
                src="/BANDEIRA-01.png"
                className="card-bandeira"
                alt="Bandeirinhas"
              />
              <p className="nome-servico">CENTRAL CIDADANIA</p>
              <p className="texto-servico">
                Oferece serviços sociais com equipe psicossocial para receber
                denúncias e orientar sobre violação de direitos (mulher, idoso,
                criança, LGBTQIAPN+).
                <br />
                <br />
                <strong>Contato:</strong> (81) 99970-2943.
              </p>
            </div>

            {/* ITEM 5 - SAÚDE */}
            <div className="service-card">
              <img
                src="/BANDEIRA-02.png"
                className="card-bandeira"
                alt="Bandeirinhas"
              />
              <p className="nome-servico">SAÚDE E VIGILÂNCIA</p>
              <p className="texto-servico">
                As urgências relacionadas à saúde devem ser encaminhadas ao
                ponto de atendimento específico na Serra Negra.
                <br />
                <br />
                <strong>Vigilância:</strong> Fiscaliza normas sanitárias e de
                segurança, incluindo higiene de alimentos, bebidas e instalações
                do evento.
                <br />
                <strong>Contato:</strong> (81) 98292-9713.
              </p>
            </div>

            {/* ITEM 6 - EMERGÊNCIA */}
            <div className="service-card card-emergency">
              <p className="nome-servico">NÚMEROS ÚTEIS</p>
              <div className="emergency-list">
                <div className="emergency-item">SAMU: 192</div>
                <div className="emergency-item">
                  SAMU LOCAL: (81)3727-8350 OU (81)98384-4303
                </div>
                <div className="emergency-item">BOMBEIROS: 193</div>
                <div className="emergency-item">POLÍCIA: 190</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
