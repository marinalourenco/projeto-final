import { createGlobalStyle } from 'styled-components';
import { mixins } from './mixins';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body { 
    background: ${mixins.colors.background};
    -webkit-font-smoothing: antialiased;
  }
  
  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body, input, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
  button { 
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .react-modal-overlay{
    background: rgba(0, 0 , 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 456px;
    background: #FFF;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem; 
    border-radius: 25px;
    border: 2px solid ${mixins.colors.secondary};
    
  }
  .react-modal-content-description{
    width: 100%;
    max-width: 456px;
    background: transparent;
    position: relative;
    border-radius: 0.25rem; 
  }
  .btnClose {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8)
    }
  }
  .accordion{
    padding: 0 100px;
    .accordion-header{
      .accordion-button[aria-expanded="true"]{
        background-color: ${mixins.colors.primary};
        color: ${mixins.colors.secondary};
      }
      .accordion-button[aria-expanded="false"] {
          background-color: ${mixins.colors.secondary};
          color: #fff;
      }
  }
  }
  
`;
