import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/CarouselComponent";
import styles from "../styles/styles.module.css";

export default function VitrineCria() {
  return (
    <>
      <Head>
        <title>Vitrine Criativa</title>
        <meta name="title" content="Vitrine Criativa" />
      </Head>

      <Navbar />

      <main className={styles.responsiveMain}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Vitrine Criativa</h1>
          <p className={`${styles.justificado} ${styles.text}`}>
            A Vitrine Criativa é uma iniciativa da Secretaria de Planejamento e Inovação de Bezerros, realizada em parceria com a Secretaria de Turismo e Cultura de Bezerros e o SEBRAE/PE. O projeto tem como objetivo promover a exposição e a comercialização de obras do artesanato local, fortalecendo a identidade cultural e impulsionando o desenvolvimento econômico do município.

            Desde 2022, o projeto já realizou mais de 20 edições, inseridas nos principais eventos do calendário bezerrense, como o Carnaval, o São João e o Circuito das Estações. A ação oferece aos artesãos oportunidades de visibilidade, integração e conexão com novos públicos e mercados.<br /><br />

            Durante o São João na Serra Negra, um dos eventos mais tradicionais do município, a Vitrine Criativa se destaca como espaço estratégico para apresentação e venda das peças artesanais, atraindo visitantes de diversas regiões do Brasil e até do exterior. A ação fortalece a cadeia produtiva do artesanato, incentiva a criação de novos produtos e fomenta a inovação no setor.<br /><br />

            Mais que um espaço de vendas, a Vitrine Criativa consolida-se como política pública de valorização cultural, incentivo ao empreendedorismo e fortalecimento da economia criativa.<br /><br />

            A Vitrine Criativa – Edição São João 2025 está localizada no Polo de Eventos da Serra Negra. Acesse o mapa, conheça os expositores e venha prestigiar o talento e a originalidade dos nossos artesãos.<br /><br />
          </p>
        </div>
        <div className={styles.carouselContainer}>
          <CarouselComponent />
        </div>
      </main>

      <div className="divisoria"></div>
      <Footer />
    </>
  );
}
