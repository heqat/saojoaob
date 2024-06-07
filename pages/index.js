import Head from 'next/head'
import Image from 'next/image';
import { useEffect } from 'react'
import CardPalco from '../components/CardPalco';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

import marca from '../public/marca2.png'
import devassa from '../public/devassa.png'
import kuat from '../public/kuat.png'
import pitu from '../public/pitu.png'
import governo from '../public/governo.png'
import fundarpe from '../public/fundarpe.png'
import empetur from '../public/empetur.png'

import MapComponent from '../components/MapComponent';

export default function Home() {
  useEffect(() => {
    const btnPlayVideo = document.getElementById('btn-play-video');
    const containerVideo = document.getElementById('container-video');

    btnPlayVideo.addEventListener('click', handlePlayVideo);

    function handlePlayVideo() {
      event.preventDefault();
      btnPlayVideo.style.display = 'none';
      containerVideo.innerHTML = `<iframe width=100% height=100% src="https://www.youtube.com/embed/EmgkGqSWJRI?autoplay=1" title="Teaser" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    }

    const btnArrow = document.getElementById('btn-arrow');
    const sectionApresentacao = document.getElementById('apresentacao');

    btnArrow.addEventListener('click', handleClickBtnArrow);

    function handleClickBtnArrow() {
      sectionApresentacao.scrollIntoView();
    }


  });

  return (
    <>
      <Head>
        <title>São João 2023 - Bezerros-PE</title>
        <meta name="title" content="São João 2023 - Bezerros-PE"></meta>
      </Head>

      <Navbar />

      <main>
        <section id='hero'>
          <div className='bg-hero' data-parallax="scroll" data-image-src="/bg-hero.jpg">
            <div className='container d-flex justify-content-center align-items-center'>
              <Image className='bg-hero-marca' src={marca} alt='marca são joão'></Image>

            </div>
            <button type="button" id="btn-arrow" className="arrow-down"><i className='bx bx-chevron-down bx-fade-down display-1 text-white'></i></button>

          </div>

        </section>

        <section id='apresentacao'>
          <div className='container d-flex w-100 justify-content-center align-items-center'>
            <div className='d-flex flex-column justify-content-center align-items-center text-center my-5 text-white'>
              <h1 className='m-titulo-secao mb-4'>O SÃO JOÃO NA SERRA NEGRA</h1>
              <p className='m-apresentacao-texto'>Distante 100 km do Recife, o município de Bezerros, no Agreste, também é conhecido como um dos polos juninos mais autênticos do interior, mantendo viva a tradição do forró pé de serra. O São João mais frio, mais alto e mais aconchegante do mundo, na Serra Negra, tem como tema "DAQUI DO ALTO, TUDO É MAIS BONITO!", uma referência às belas paisagens naturais, ao sabor peculiar das comidas típicas, a cultura dos grupos culturais e os pontos turísticos que atraem milhares de pessoas todos os anos. São aproximadamente 10 km entre a cidade e o Pólo Cultural. Com temperatura média de 16 graus e sensação térmica que chega a 12 graus, o São João na Serra Negra tornou-se um evento consolidado no calendário festivo do estado.</p>
              <h2 className='m-titulo-programacao mb-4'>PATRIMÔNIO CULTURAL IMATERIAL</h2>
              <p className='m-apresentacao-texto'>O São João na Serra Negra é uma das festas mais tradicionais no interior de Pernambuco, atraindo forrozeiros de todos os cantos do Brasil e até do mundo. Embalada pelo ritmo do forró autêntico, a festa tornou-se Patrimônio Cultural Imaterial de Pernambuco, a partir da Resolução Nº 1.897, aprovada em 19 de abril de 2023, pela Assembléia Legislativa de Pernambuco (Alepe).</p>

            </div>
          </div>
        </section>

        <section id='clipe'>
          <div id='container-video' className='d-flex justify-content-center align-items-center container-video' data-parallax="scroll" data-image-src="/bg-balao.jpg">
            <button id='btn-play-video' type='button' className='m-btn-play-video'>
              <i className='bx bx-play-circle bx-tada display-1 text-white'></i>
            </button>
          </div>
        </section>

        <section id='programacao'>
          <div className='d-flex justify-content-center align-items-center flex-column'>

            <h2 className='m-titulo-secao mt-5 text-center'>PROGRAMAÇÃO</h2>

            <div className='m-container-palcos'>
              <div className='container mt-5'>
                <h3 className='m-titulo-programacao'>POLOS</h3>
                <ul className="nav nav-tabs justify-content-center" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active m-button-programacao palcos" id="palcos-tab1" data-bs-toggle="tab" data-bs-target="#palcos-tab1-pane" type="button" role="tab" aria-controls="palcos-tab1-pane" aria-selected="true">Palco Principal</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link m-button-programacao palcos" id="palcos-tab2" data-bs-toggle="tab" data-bs-target="#palcos-tab2-pane" type="button" role="tab" aria-controls="palcos-tab2-pane" aria-selected="false">Palco Cultural</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link m-button-programacao palcos" id="palcos-tab3" data-bs-toggle="tab" data-bs-target="#palcos-tab3-pane" type="button" role="tab" aria-controls="palcos-tab3-pane" aria-selected="false">Sítio a Cidade</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link m-button-programacao palcos" id="palcos-tab4" data-bs-toggle="tab" data-bs-target="#palcos-tab4-pane" type="button" role="tab" aria-controls="palcos-tab4-pane" aria-selected="false">Centro da Cidade</button>
                  </li>
                </ul>

                <div className="tab-content d-flex justify-content-center mb-5">
                  <div className="tab-pane fade show active" id="palcos-tab1-pane" role="tabpanel" aria-labelledby="palcos-tab1" tabIndex="0">

                    <div className='d-flex justify-content-center flex-wrap'>
                      <CardPalco nome={["Forró Rei do Cangaço", "Daniel Gouveia", "Carlinhos Melo", "Jorge de Altinho", "Fábio Carneirinho"]} horario={["12:00", "14:00", "16:00", "18:00", "20:00"]} dia="Sábado" data="10/06" />
                      <CardPalco nome={["Higor Henrique", "Walter Lins", "Victor Ferrari", "Cezzinha", "Santanna, O Cantador"]} horario={["12:00", "14:00", "16:00", "18:00", "20:00"]} dia="Domingo" data="11/06" />
                      <CardPalco nome={["Michel Deniz", "Banda de Pau e Corda", "Aduílio Mendes", "Alcymar Monteiro", "Nena Queiroga"]} horario={["12:00", "14:00", "16:00", "18:00", "20:00"]} dia="Sábado" data="17/06" />
                      <CardPalco nome={["Morganna Bernardo", "Geraldinho Lins", "Lady Falcão", "Eliane do forró", "Jamile Oliveira"]} horario={["12:00", "14:00", "16:00", "18:00", "20:00"]} dia="Domingo" data="18/06" />
                      <CardPalco nome={["Ciel Santos", "Petrúcio Amorim", "Irah Caldeira", "Marcão Noventta", "Anderson Alves"]} horario={["12:00", "14:00", "16:00", "18:00", "20:00"]} dia="Sexta" data="23/06" />
                      <CardPalco nome={["Samara Costa", "Pau no Xote", "Dudu do Acordeon", "Henrique Barbosa", "Nádia Maia"]} horario={["12:00", "14:00", "16:00", "18:00", "20:00"]} dia="Sábado" data="24/06" />
                      <CardPalco nome={["Amannda Leão", "Cristina Amaral", "Almir Rouche", "Benil", "Magnatas do forró"]} horario={["12:00", "14:00", "16:00", "18:00", "20:00"]} dia="Domingo" data="25/06" />

                    </div>

                  </div>
                  <div className="tab-pane fade" id="palcos-tab2-pane" role="tabpanel" aria-labelledby="palcos-tab2" tabIndex="0">

                    <div className='d-flex justify-content-center flex-wrap'>
                      <CardPalco nome={["trio manoel da concertina", "matheus e catirina", "batalhão 44", "renilda cardoso", "quadrilha folcpopular"]} horario={["13:00", "14:30", "15:00", "15:30", "16:30"]} dia="Sábado" data="10/06" />
                      <CardPalco nome={["dadal e forró de três", "banda de pífano são josé dos bezerros", "quadrilha junina estilizada filhos do barro", "clara ellys", "luizinho moreno", "trio kabras da peste"]} horario={["13:00", "14:30", "15:00", "15:30", "16:30", "17:00"]} dia="Domingo" data="11/06" />
                      <CardPalco nome={["valdinho paz", "matheus e catirina", "lunas costa, biu lourenço e mateus aboiador", "quadrilha recorda junina", "douglas leon", "ed carlos"]} horario={["13:00", "14:30", "15:00", "15:30", "16:30", "17:00"]} dia="Sábado" data="17/06" />
                      <CardPalco nome={["kaio lima", "banda de pífano são josé dos bezerros", "batalhão 44", "banda cheiro de sanfona", "quadrilha junina é por amor"]} horario={["13:00", "14:30", "15:00", "15:30", "16:30"]} dia="Domingo" data="18/06" />
                      <CardPalco nome={["farra dos tops", "matheus e catirina", "quadrilha folcpopular", "neno do acordeon", "quadrilha festejando santo antônio"]} horario={["13:00", "14:30", "15:00", "15:30", "16:30"]} dia="Sexta" data="23/06" />
                      <CardPalco nome={["andré ferraz", "quadrilha junina é por amor", "quadrilha festejando santo antônio", "os talentos", "kaká kantareli"]} horario={["13:00", "14:30", "15:00", "15:30", "16:30"]} dia="Sábado" data="24/06" />
                      <CardPalco nome={["emerson cavalcante", "matheus e catirina", "batalhão 44", "trio nildo e seu regional", "grupo cultural papanguarte"]} horario={["13:00", "14:30", "15:00", "15:30", "16:30"]} dia="Domingo" data="25/06" />

                    </div>

                  </div>
                  <div className="tab-pane fade" id="palcos-tab3-pane" role="tabpanel" aria-labelledby="palcos-tab3" tabIndex="0">

                    <div className='d-flex justify-content-center flex-wrap'>
                      <CardPalco nome={["Apresentação escolar", "programação religiosa", "forró rei do cangaço", "forró dos bossas"]} horario={["16:00", "18:30", "21:00", "22:20"]} dia="Cajazeiras" data="13/06" />
                      <CardPalco nome={["Matheus e Catirina", "dadal e forró de três", "walter lins"]} horario={["18:00", "19:00", "20:20"]} dia="Sítio Areias" data="14/06" />
                      <CardPalco nome={["Apresentação escolar", "matheus e catirina", "kaká kantareli", "trio nildo e seu regional"]} horario={["17:00", "18:00", "19:00", "20:30"]} dia="Sítio dos Remédios" data="15/06" />
                      <CardPalco nome={["Apresentação escolar", "matheus e catirina", "higor henrique", "trio asa branca"]} horario={["15:00", "18:00", "19:00", "20:50"]} dia="Boas Novas" data="20/06" />
                      <CardPalco nome={["Matheus e Catirina", "quadrilha junina é por amor", "elian do acordeon", "michel deniz"]} horario={["18:00", "19:00", "20:00", "21:30"]} dia="Sapucarana" data="21/06" />
                      <CardPalco nome={["Matheus e Catirina", "gil teclas", "samara costa"]} horario={["18:00", "19:00", "20:50"]} dia="Encruzilhada" data="22/06" />

                    </div>

                  </div>

                  <div className="tab-pane fade" id="palcos-tab4-pane" role="tabpanel" aria-labelledby="palcos-tab4" tabIndex="0">

                    <div className='d-flex justify-content-center flex-wrap'>
                      <CardPalco nome={["Higor Henrique", "Lipe Lucena", "Wallas Arrais"]} horario={["20:00", "22:00", "00:00"]} dia="Sábado" data="01/07" />
                      
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

        </section>

        <section id='patrocinio' className='mt-5 mb-5'>
          <div className='container text-center'>
            <div className='row align-items-center'>
              <div className='col m-2'>
                <Image src={devassa} width={85} alt={'devassa'}></Image>
              </div>
              <div className='col m-2'>
                <Image src={kuat} width={85} alt={'kuat'}></Image>
              </div>
              <div className='col m-2'>
                <Image src={pitu} width={85} alt={'pitu'}></Image>
              </div>
              <div className='col m-2'>
                <Image src={fundarpe} width={85} alt={'fundarpe'}></Image>
              </div>
              <div className='col m-2'>
                <Image src={empetur} width={85} alt={'empetur'}></Image>
              </div>
              <div className='col m-2'>
                <Image src={governo} width={85} alt={'governo'}></Image>
              </div>
            </div>
          </div>
        </section>

        <section id='mapa'>
          <div className='d-flex flex-column justify-content-center align-items-center m-container-mapa'>
            <h2 className='m-titulo-secao mt-5 mb-5'>MAPA</h2>
            <iframe loading='lazy' className='container mb-5' width="100%" height="100%" src="https://www.google.com/maps/d/u/0/embed?mid=17ylFCMfPZAy4kWIwmMJBi6WriHAnsZg&ehbc=2E312F"></iframe>
          </div>
        </section>



        
        <section id='faq' className='pb-5'>
          <div className='container d-flex justify-content-center align-items-center flex-column'>
            <h2 className='m-titulo-secao mt-5 mb-5'>FAQ</h2>
            <div className="container accordion accordion-flush" id="accordionFlushExample">

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading1">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
                    Quais serão os dias de festa do São João 2023 de Bezerros?
                  </button>
                </h2>
                <div id="flush-collapse1" className="accordion-collapse collapse" aria-labelledby="flush-heading1" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Serão nos dias 10, 11, 17, 18, 23, 24 e 25 de junho.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading2">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                    Como será a estrutura da festa?
                  </button>
                </h2>
                <div id="flush-collapse2" className="accordion-collapse collapse" aria-labelledby="flush-heading2" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Confira nosso <a href='#mapa'>mapa</a> com as informações necessárias para localizações durante o período junino.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading4">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                    Posso entrar com cooler, isopor, caixa ou bolsa térmica no polo do são joão na serra negra?
                  </button>
                </h2>
                <div id="flush-collapse3" className="accordion-collapse collapse" aria-labelledby="flush-heading3" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Não, não pode. De acordo com o item I do Art. 4 do <a href='/DECRETO-N.2.556-DE-22-DE-MAIO-DE-2023.pdf' target='_blank'>Decreto Nº 2.556/2023</a>, está terminantemente proibida ao público e aos comerciantes a utilização de cooler, isopor, bolsa e caixa térmica para comidas e bebidas, bem como todo e qualquer objeto que de alguma forma atrapalhe, dificulte ou impeça o fluxo de pessoas em todo o espaço das festividades.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading4">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                    Qual será o local de apoio para emergências no São João?
                  </button>
                </h2>
                <div id="flush-collapse4" className="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Todos equipamentos de saúde do município tiveram suas equipes reforçadas, bem como terão centro de apoio montados para atender as demandas do São João conforme localização no <a href='#mapa'>mapa</a>.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading5">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                    Onde posso encontrar materiais de artesanato e cultura local da cidade de Bezerros?
                  </button>
                </h2>
                <div id="flush-collapse5" className="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Durante o São João 2023 haverá a comercialização de peças exclusivas dos artesãos locais, tanto os turistas quanto os bezerrenses podem encontrar esse espaço na Vitrine Criativa, com localização conforme o <a href='#mapa'>mapa</a>.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading6">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                    Recipientes de vidro são permitidos no polo do são joão na serra negra?
                  </button>
                </h2>
                <div id="flush-collapse6" className="accordion-collapse collapse" aria-labelledby="flush-heading6" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Não, não é permitido. De acordo com o item IV do Art. 4 do <a href='/DECRETO-N.2.556-DE-22-DE-MAIO-DE-2023.pdf' target='_blank'>Decreto Nº 2.556/2023</a>, está terminantemente proibida ao público e aos comerciantes a utilização e comercialização de bebidas e comidas em recipientes de vidros.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading7">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                    Mesas e cadeiras são permitidas na área do evento do São João na Serra Negra?
                  </button>
                </h2>
                <div id="flush-collapse7" className="accordion-collapse collapse" aria-labelledby="flush-heading7" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Não, não é permitido. De acordo com o item II do Art. 4 do <a href='/DECRETO-N.2.556-DE-22-DE-MAIO-DE-2023.pdf' target='_blank'>Decreto Nº 2.556/2023</a>, está terminantemente proibida a utilização de mesas, cadeiras e afins por parte do público em geral, bem como pelos comerciantes nas proximidades e arredores das barracas.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading8">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
                    Posso ligar qualquer tipo de som ou paredões, dentro e no entorno, do evento e dos estacionamentos?
                  </button>
                </h2>
                <div id="flush-collapse8" className="accordion-collapse collapse" aria-labelledby="flush-heading8" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Não, não pode. De acordo com o item VII do Art. 4 do <a href='/DECRETO-N.2.556-DE-22-DE-MAIO-DE-2023.pdf' target='_blank'>Decreto Nº 2.556/2023</a>, está terminantemente proibido o uso de qualquer tipo de som e paredões dentro, no entorno do evento e nos estacionamentos.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading9">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9">
                    Drogas ilícitas, armas de fogo e armas brancas são permitidas dentro do evento?
                  </button>
                </h2>
                <div id="flush-collapse9" className="accordion-collapse collapse" aria-labelledby="flush-heading9" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Não, não pode. De acordo com o item V do Art. 4 do <a href='/DECRETO-N.2.556-DE-22-DE-MAIO-DE-2023.pdf' target='_blank'>Decreto Nº 2.556/2023</a>, está terminantemente proibido armas de fogo, armas brancas, drogas e menores desacompanhados de pessoas responsáveis.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading10">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse10" aria-expanded="false" aria-controls="flush-collapse10">
                    É permitida a entrada e uso do capacete dentro da área do evento na Serra Negra?
                  </button>
                </h2>
                <div id="flush-collapse10" className="accordion-collapse collapse" aria-labelledby="flush-heading10" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Não, não é permitido. De acordo com o item VI do Art. 4 do <a href='/DECRETO-N.2.556-DE-22-DE-MAIO-DE-2023.pdf' target='_blank'>Decreto Nº 2.556/2023</a>, está terminantemente proibida a entrada e permanência na área do evento com uso de capacete.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading11">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse11" aria-expanded="false" aria-controls="flush-collapse11">
                    É permitido a utilização de fogos de artifícios dentro e no entorno, do evento e dos estacionamentos?
                  </button>
                </h2>
                <div id="flush-collapse11" className="accordion-collapse collapse" aria-labelledby="flush-heading11" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Não, não pode. De acordo com o item III do Art. 4 do <a href='/DECRETO-N.2.556-DE-22-DE-MAIO-DE-2023.pdf' target='_blank'>Decreto Nº 2.556/2023</a>, está terminantemente proibido a utilização de fogos de artifícios por particulares.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading12">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse12" aria-expanded="false" aria-controls="flush-collapse12">
                    Ônibus e micro-ônibus podem subir para a serra negra?
                  </button>
                </h2>
                <div id="flush-collapse12" className="accordion-collapse collapse" aria-labelledby="flush-heading12" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Não, não pode. De acordo com o Art. 2 do <a href='/DECRETO-N.2.556-DE-22-DE-MAIO-DE-2023.pdf' target='_blank'>Decreto Nº 2.556/2023</a>, fica proibido o transporte coletivo por meio de ônibus e micro-ônibus para o evento na Serra Negra.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-heading13">
                  <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse13" aria-expanded="false" aria-controls="flush-collapse13">
                    Onde posso estacionar meu carro de forma gratuita na Serra Negra?
                  </button>
                </h2>
                <div id="flush-collapse13" className="accordion-collapse collapse" aria-labelledby="flush-heading13" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Os estacionamentos permitidos estarão sinalizados ao longo da via, como também podem ser localizados no <a href='#mapa'>mapa</a>.</div>
                </div>
              </div>

            </div>
          </div>
        </section>
        

      </main>
      <Footer />


    </>
  )
}
