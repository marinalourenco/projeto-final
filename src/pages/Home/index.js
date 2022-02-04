import React from 'react';
import AccordionDepoimento from '../../components/AccordionDepoimento';
import CarrouselPokemon from '../../components/CarrouselPokemon';
import ModalPokemon from '../../components/ModalPokemon';
import Shopping from '../../components/Shopping'
// import { Container } from './styles';

function Home() {
  return (
  <React.Fragment>
    <CarrouselPokemon />
    <Shopping />
    <AccordionDepoimento />
    <ModalPokemon />
  </React.Fragment>
  );
}

export default Home;