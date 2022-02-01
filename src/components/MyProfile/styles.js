import styled from 'styled-components';
import { mixins } from "../../styles/mixins"


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 55%;
    height: 60%;
    background-color: white;
    padding-left: 2em;
    border-radius: 2rem;
    border-color: ${mixins.colors.secondary}; 
    border: 2px solid ${mixins.colors.secondary};
    
    display: flex;
    flex-direction: column:
    
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
