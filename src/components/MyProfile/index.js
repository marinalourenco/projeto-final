import React from 'react';
import FormProfile from '../FormProfile';
import ImageProfile from '../ImageProfile';
import { Container, Card } from './styles';


function MyProfile() {
  return (
      <Container>
        <Card>
          <ImageProfile/>
          <FormProfile/>
        </Card>
      </Container>
  );
}

export default MyProfile;