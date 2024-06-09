import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/styles.module.css'; 
const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src='/VITRINE/carrinhos.png'
          alt="Primeira imagem"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src='/VITRINE/esp.png'
          alt="Segunda imagem"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src='/VITRINE/cordeis.png'
          alt="Segunda imagem"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src='/VITRINE/artesoes.png'
          alt="Segunda imagem"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src='/VITRINE/canc.png'
          alt="Segunda imagem"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src='/VITRINE/jsas.png'
          alt="Segunda imagem"
        />
       
      </Carousel.Item>
      {/* Adicione mais itens de carrossel conforme necessário */}
    </Carousel>
  );
}

export default CarouselComponent;