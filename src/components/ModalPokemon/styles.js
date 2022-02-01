import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  border: solid 2px;
  border-color:${mixins.colors.secondary}; 
  background: ${mixins.colors.background};
  border-radius: 1.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .img{
    width: 7rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    img {
      max-width: 8rem;
    }
  }
  button {
    margin-top: 15px;
  }
  h2 {
    color: ${mixins.colors.secondary};
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
  }
  .descriptions {
    margin-top: 0.2rem;
    padding: 0;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${mixins.colors.secondary};
  }
  .values {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .cifr {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      color: ${mixins.colors.secondary};
      margin-top: 1.5rem;
    }
    .value {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 2.5rem;
      color: ${mixins.colors.secondary};
    }
    .valuesec {
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      color: ${mixins.colors.secondary};
      margin-top: 0.5rem;
    }
  }
  .car {
    border: none;
    background: ${mixins.colors.primary};
    color: ${mixins.colors.secondary};
    width: 17rem;
    height: 3rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 800;
    transition: filter 0.2s;
    :hover{
      background: ${mixins.colors.secondary};
      color: ${mixins.colors.primary};
      filter: brightness(0.8);
    }
  }
`