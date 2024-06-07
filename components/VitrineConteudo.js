import React from 'react';
import './VitrineCriativa.css';

const VitrineCriativa = () => {
  return (
    <div className="presentation-page">
      <div className="summary-section">
        <h1>Resumo</h1>
        <p>A Vitrine Criativa é uma iniciativa promovida pela Secretaria de Administração e Inovação de Bezerros, em parceria com a Secretaria de Turismo e Cultura de Bezerros e o SEBRAE/PE, e envolve a exposição e comercialização de obras de artesanato. A Vitrine Criativa já contou com 13 edições, desde 2021, divididas entre os principais eventos da cidade, como Carnaval, São João, Circuito das Estações, entre outros, possibilitando a integração dos artesãos locais no desenvolvimento econômico da cidade. 
Especialmente no São João na Serra Negra, esses artesãos têm a oportunidade de expor suas obras para pessoas de todo país e do mundo através da visibilidade oferecida pelo evento. Dessa forma, valorizando a produção artesanal; incentivando a criação e o desenvolvimento de novos produtos; resgatando, preservando e difundindo valores culturais; promovendo a integração entre os segmentos de produção e a comercialização do artesanato; e, criando oportunidades para a realização de negócios da sua cadeia produtiva. 
A Vitrine Criativa edição São João 2024 pode ser encontrada no Pólo de Eventos da Serra Negra. Verifique a localização no mapa.</p>
      </div>
      <div className="image-carousel">
        <img src="imagem1.jpg" alt="Imagem 1" />
        <img src="imagem2.jpg" alt="Imagem 2" />
        <img src="imagem3.jpg" alt="Imagem 3" />
        {/* Adicione mais imagens conforme necessário */}
      </div>
    </div>
  );
};

export default VitrineCriativa;
