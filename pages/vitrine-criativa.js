// VitrineCria.jsx
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CarouselComponent from '../components/CarouselComponent';
import { useRouter } from 'next/router'; // Importe o useRouter do next/router

// Importe o CSS
import styles from '../styles/styles.module.css';

export default function VitrineCria() {
    const router = useRouter(); // Utilize o useRouter para navegação

    return (
        <>
            <Head>
                <title>Vitrine Criativa</title>
                <meta name="title" content="Vitrine Criativa" />

                <meta property="og:url" content="https://carnaval.bezerros.pe.gov.br/homenageados" />
                <meta property="og:title" content="Vitrine Criativa - São João Bezerros 2024" />
                <meta property="twitter:url" content="https://carnaval.bezerros.pe.gov.br/homenageados" />
                <meta property="twitter:title" content="Vitrine Criativa - São João Bezerros 2024" />
            </Head>

            <Navbar />

            <main style={{ display: 'flex', justifyContent: 'space-between', padding: '50px', marginTop: '100px' }}>
  <div style={{ flex: '1', marginRight: '20px' }}> 
    <h1 style={{ textAlign: 'center' }}>Vitrine Criativa</h1> 
    <p className={styles.justificado}>
      A Vitrine Criativa é uma iniciativa promovida pela Secretaria de Administração e Inovação de Bezerros, em parceria com a Secretaria de Turismo e Cultura de Bezerros e o SEBRAE/PE, e envolve a exposição e comercialização de obras de artesanato. A Vitrine Criativa já contou com 13 edições, desde 2021, divididas entre os principais eventos da cidade, como Carnaval, São João, Circuito das Estações, entre outros, possibilitando a integração dos artesãos locais no desenvolvimento econômico da cidade. <br /><br />
      Especialmente no São João na Serra Negra, esses artesãos têm a oportunidade de expor suas obras para pessoas de todo país e do mundo através da visibilidade oferecida pelo evento. Dessa forma, valorizando a produção artesanal; incentivando a criação e o desenvolvimento de novos produtos; resgatando, preservando e difundindo valores culturais; promovendo a integração entre os segmentos de produção e a comercialização do artesanato; e, criando oportunidades para a realização de negócios da sua cadeia produtiva. <br /><br />
      A Vitrine Criativa edição São João 2024 pode ser encontrada no Pólo de Eventos da Serra Negra. Verifique a <a href={router.pathname + '/pagina-com-mapa'} className="map-link">localização no mapa</a>.
    </p>
  </div>
  <div style={{ flex: '1', marginLeft: '20px', marginTop: '20px' }}>
    <CarouselComponent />
  </div>
</main>
            <Footer />
        </>
    )
}
