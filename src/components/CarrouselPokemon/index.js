import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
// import { Container } from './styles';

function CarrouselPokemon() {
  return (
    <Carousel indicators={false} className="w-100">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={banner1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={banner2}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  );
}

export default CarrouselPokemon;