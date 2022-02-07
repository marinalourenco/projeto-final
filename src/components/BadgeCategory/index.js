import React from 'react';
import Button from 'react-bootstrap/Button'
import { useSearch } from '../../hooks/useSearch';
import { Container } from "./styles.js";


function BadgeCategory() {
    const { handleChangeType} = useSearch()
  return (
    <Container>

        <Button 
            checked={true} 
            onClick={() => handleChangeType("Água")} 
            variant="primary">Água
        </Button> 
        <Button 
            checked={true} 
            onClick={() => handleChangeType("Rocha")} 
            variant="secondary">Rocha
        </Button>
        <Button 
            checked={true} 
            onClick={() => handleChangeType("Planta")} 
            variant="success">Planta
        </Button> 
        <Button 
            checked={true} 
            onClick={() => handleChangeType("Fogo")} 
            variant="danger">Fogo
        </Button>
        <Button 
            checked={true} 
            onClick={() => handleChangeType("Elétrico")} 
            variant="warning" text="dark">Elétrico
        </Button>
        <Button 
            checked={true} 
            onClick={() => handleChangeType("Gelo")} 
            variant="info">Gelo
        </Button>
        <Button 
            checked={true} 
            onClick={() => handleChangeType("Normal")} 
            variant="outline-secondary" text="dark">Normal
        </Button>
        <Button 
            checked={true} 
            onClick={() => handleChangeType("Fantasma")} 
            variant="dark">Fantasma
        </Button>
        <Button 
            checked={true} 
            onClick={() => handleChangeType("Inseto")} 
            variant="success">Inseto
        </Button> 
        <Button 
            checked={true} 
            onClick={() => handleChangeType("Dragão")} 
            variant="primary">Dragão
        </Button>
        <Button 
            checked={true} 
            onClick={() => handleChangeType("Terra")} 
            variant="danger">Terra
        </Button>
        <Button 
            checked={true} 
            onClick={() => handleChangeType("Venenoso")} 
            variant="success">Venenoso
        </Button> 
        <Button 
            checked={true} 
            onClick={() => handleChangeType("Voador")} 
            variant="outline-secondary" text="dark">Voador
        </Button>
    </Container>
  );
}

export default BadgeCategory;