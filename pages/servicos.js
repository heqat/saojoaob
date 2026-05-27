import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicosUteis() {
  return (
    <>
      <Head>
        <title>Nossos Serviços - Carnaval do Papangu 2026</title>
        <meta
          name="title"
          content="Nossos Serviços - Carnaval do Papangu 2026"
        />
      </Head>

      <Navbar />

      <main>
        <section id="servicos-uteis">
          <div className="services-grid">
            {/* ITEM 1 - VITRINE */}
            <div className="service-card card-v1">
              <img
                src="/ppg1.png"
                className="card-element"
                alt="Elemento Decorativo"
              />
              <p className="nome-servico">VITRINE CRIATIVA</p>
              <p className="texto-servico">
                Espaço dedicado para a comercialização do artesanato local, com
                foco em produtos voltados para as festividades carnavalescas ou
                de grande apelo cultural. A ação é apoiada pela Sala do
                Empreendedor de Bezerros, em parceria com o SEBRAE.
                <br />
                <br />
                <strong>Local:</strong> Rua Dr. José Mariano, ao lado da Praça
                da Bandeira e da Igreja Matriz.
              </p>
            </div>

            {/* ITEM 2 - CAT */}
            <div className="service-card card-v2">
              <img src="/ppg2.png" className="card-element" alt="Papangu" />
              <p className="nome-servico">CENTRO DE TURISMO (CAT)</p>
              <p className="texto-servico">
                O Centro de Atendimento ao Turista é um ponto de apoio e
                informação ao visitante durante os quatro dias de carnaval.
                <br />
                <br />
                <strong>Local:</strong> Junto à Vitrine Criativa, ao lado da
                Praça da Bandeira e da Igreja Matriz.
              </p>
            </div>

            {/* ITEM 3 - RECICLAR */}
            <div className="service-card card-v3">
              <img src="/ppg3.png" className="card-element" alt="Eco Folia" />
              <p className="nome-servico">RECICLAR É MASSA</p>
              <p className="texto-servico">
                Projeto do Eco Folia voltado à educação ambiental, incentivo à
                reciclagem e apoio aos recicladores que atuam durante os dias de
                carnaval, coletando e separando o lixo gerado pelos foliões.
                <br />
                <br />
                <strong>Local:</strong> Ao lado do CAT, no corredor de estandes
                de serviços e artesanato.
                <br />
                <strong>Horário:</strong> 09h às 22h.
              </p>
            </div>

            {/* ITEM 4 - CIDADANIA */}
            <div className="service-card card-v4">
              <img src="/ppg4.png" className="card-element" alt="Cidadania" />
              <p className="nome-servico">CENTRAL CIDADANIA</p>
              <p className="texto-servico">
                Oferece serviços sociais com equipe psicossocial para receber
                denúncias e orientar sobre violação de direitos (mulher, idoso,
                criança, LGBTQIAPN+). Também disponibiliza materiais de
                sensibilização e prevenção das campanhas do ciclo carnavalesco.
                <br />
                <br />
                <strong>Local:</strong> Rua Dr. José Mariano, junto à Vitrine
                Criativa, ao lado da Praça da Bandeira.
                <br />
                <strong>Contato:</strong> (81) 99970-2943.
              </p>
            </div>

            {/* ITEM 5 - SAÚDE */}
            <div className="service-card card-v5">
              <img src="/ppg5.png" className="card-element" alt="Saúde" />
              <p className="nome-servico">SAÚDE E VIGILÂNCIA</p>
              <p className="texto-servico">
                As urgências relacionadas à saúde devem ser encaminhadas ao
                ponto de atendimento específico durante o carnaval.
                <br />
                <strong>Ponto de Atendimento:</strong> Rua da Matriz, em frente
                às Lojas Americanas.
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
            <div className="service-card card-emergency card-v6">
              <img
                src="/ppg6.png"
                className="card-element"
                style={{ filter: "brightness(0) invert(1)" }}
                alt="Emergência"
              />
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
        <div className="divisoria-overlap">
          <img src="/faixa-2.png" alt="Divisória decorativa" loading="lazy" />
        </div>
        <div className="divisoria"></div>
      </main>
      <Footer />
    </>
  );
}
