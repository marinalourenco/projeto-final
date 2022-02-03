import React from 'react';
import FormRegister from '../FormRegister';
import ImageProfile from '../ImageProfile';
import { Container, Card } from './styles';

function MyRegister() {
  return (
      <Container>
        <Card>
          <ImageProfile/>
          <FormRegister/>
        </Card>
      </Container>
  );
}

export default MyRegister;