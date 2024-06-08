import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/styles.module.css'; // Certifique-se de importar o arquivo CSS

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src='/VITRINE/VITRINE1.JPG'
          alt="Primeira imagem"
        />
        <Carousel.Caption>
          <h3>Título da Imagem 1</h3>
          <p>Descrição da Imagem 1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src='/VITRINE/VITRINE2.JPG'
          alt="Segunda imagem"
        />
        <Carousel.Caption>
          <h3>Título da Imagem 2</h3>
          <p>Descrição da Imagem 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Adicione mais itens de carrossel conforme necessário */}
    </Carousel>
  );
}

export default CarouselComponent;