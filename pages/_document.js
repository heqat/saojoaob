import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:description" content="A mágica do São João ganha vida na encantadora Serra Negra de Bezerros, em Pernambuco. Neste cenário montanhoso, a festa tradicional se desenrola com suas ruas adornadas, danças animadas, gastronomia típica e um clima de pura animação. A combinação única entre a beleza natural da região e a cultura nordestina cria um ambiente festivo que encanta moradores e visitantes, tornando o São João na Serra Negra uma experiência inesquecível." />
        <meta property="og:image" content="https://saojoao.bezerros.pe.gov.br/marca.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:description" content="A mágica do São João ganha vida na encantadora Serra Negra de Bezerros, em Pernambuco. Neste cenário montanhoso, a festa tradicional se desenrola com suas ruas adornadas, danças animadas, gastronomia típica e um clima de pura animação. A combinação única entre a beleza natural da região e a cultura nordestina cria um ambiente festivo que encanta moradores e visitantes, tornando o São João na Serra Negra uma experiência inesquecível." />
        <meta property="twitter:image" content="https://saojoao.bezerros.pe.gov.br/marca.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&family=Roboto:wght@500&display=swap" rel="stylesheet" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />

        <meta name="description" content="A mágica do São João ganha vida na encantadora Serra Negra de Bezerros, em Pernambuco. Neste cenário montanhoso, a festa tradicional se desenrola com suas ruas adornadas, danças animadas, gastronomia típica e um clima de pura animação. A combinação única entre a beleza natural da região e a cultura nordestina cria um ambiente festivo que encanta moradores e visitantes, tornando o São João na Serra Negra uma experiência inesquecível." />
        <link rel="icon" href="/favicon.ico" />

        <Script id='gtag' async src="https://www.googletagmanager.com/gtag/js?id=G-DCX9RD432X" strategy='afterInteractive' />
        <Script id='gtag-code' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-DCX9RD432X');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script strategy='beforeInteractive' src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js' />
        <Script strategy='beforeInteractive' src='https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js' />
      </body>
    </Html>
  )
}
