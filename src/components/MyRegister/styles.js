import styled from 'styled-components';
import { mixins } from "../../styles/mixins"


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1000px;
`;

export const Card = styled.div`

    width: 60%;
    height: 70%;
    min-height: 35em;
    justifyContent: space-between;
    margin-top: 10em;
    
    background-color: white;
    padding-left: 2em;
    border-radius: 2rem;
    border-color: ${mixins.colors.secondary}; 
    border: 2px solid ${mixins.colors.secondary};
    overflow: auto;

    @media only screen and (max-width: 1200px) {
        height: 100%;
        width: 90%;
        min-height: 70em;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        transform: translateY(20%);
        align-items: center;
        padding-top: 10px;
      }  

    display: flex;
`;
