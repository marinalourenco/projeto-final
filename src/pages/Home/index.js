import React from 'react';
import CarrouselDepoimento from '../../components/AccordionDepoimento';
import CarrouselPokemon from '../../components/CarrouselPokemon';
import ModalPokemon from '../../components/ModalPokemon';
import Shopping from '../../components/Shopping'
// import { Container } from './styles';

function Home() {
  return (
  <React.Fragment>
    <CarrouselPokemon />
    <Shopping />
    <CarrouselDepoimento />
    <ModalPokemon />
  </React.Fragment>
  );
}

export default Home;