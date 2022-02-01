import React from 'react';
import ModalPokemon from '../../components/ModalPokemon';
import Shopping from '../../components/Shopping'
// import { Container } from './styles';

function Home() {
  return (
  <React.Fragment>
    <Shopping />
    <ModalPokemon />
  </React.Fragment>
  );
}

export default Home;