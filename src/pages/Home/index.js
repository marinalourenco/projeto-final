import React from 'react';
import CarrouselPokemon from '../../components/Carrousel';
import ModalPokemon from '../../components/ModalPokemon';
import Shopping from '../../components/Shopping'
// import { Container } from './styles';

function Home() {
  return (
  <React.Fragment>
    <CarrouselPokemon />
    <Shopping />
    <ModalPokemon />
  </React.Fragment>
  );
}

export default Home;