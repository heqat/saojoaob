import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/CarouselComponent";
import { useRouter } from "next/router";

import styles from "../styles/styles.module.css";

export default function VitrineCria() {
  const router = useRouter();

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
            A Vitrine Criativa é uma iniciativa promovida pela Secretaria de
            Administração e Inovação de Bezerros, em parceria com a Secretaria
            de Turismo e Cultura de Bezerros e o SEBRAE/PE, e envolve a
            exposição e comercialização de obras de artesanato. A Vitrine
            Criativa já contou com 13 edições, desde 2021, divididas entre os
            principais eventos da cidade, como Carnaval, São João, Circuito das
            Estações, entre outros, possibilitando a integração dos artesãos
            locais no desenvolvimento econômico da cidade. <br />
            <br />
            Especialmente no São João na Serra Negra, esses artesãos têm a
            oportunidade de expor suas obras para pessoas de todo país e do
            mundo através da visibilidade oferecida pelo evento. Dessa forma,
            valorizando a produção artesanal; incentivando a criação e o
            desenvolvimento de novos produtos; resgatando, preservando e
            difundindo valores culturais; promovendo a integração entre os
            segmentos de produção e a comercialização do artesanato; e, criando
            oportunidades para a realização de negócios da sua cadeia produtiva.{" "}
            <br />
            <br />A Vitrine Criativa edição São João 2024 pode ser encontrada no
            Pólo de Eventos da Serra Negra. Verifique a localização no{" "}
            <a href="/#mapa" className={`${styles.mapaCor} map-link`}>
              {" "}
               mapa
            </a>
            .
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