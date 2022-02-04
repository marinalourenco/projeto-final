import styled from 'styled-components';
import { mixins } from "../../styles/mixins"

export const Container = styled.div`
  margin-top: 3.125rem;
  padding: 6.250rem;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 1.625rem;
  line-height: 3.375rem;
  color: ${mixins.colors.secondary};
`

export const Content = styled.div`
  display: flex;
  min-width: 10rem;
  width: auto;
  background: ${mixins.colors.white};
  border-radius: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  padding:  3.125rem 0;
  border-radius: 0.5rem;
  border-color: ${mixins.colors.secondary}; 
  border: 2px solid ${mixins.colors.secondary};
    table {
      width: 80%;
      text-align: center;
      .qtdProduct {
        display: flex;
        align-items: center;
        justify-content: center;
        @media(max-width: 600px) {
          flex-direction: column;
          width: 50px;
        }
        .btni {
          border: none;
          margin-right: 0.5rem;
          background-color: #fff;
          color: ${mixins.colors.secondary};
          @media(max-width: 600px) {
            margin-right:0;
          }
        }
        .btnd {
          border: none;
          margin-left: 0.5rem;
          background-color: #fff;
          color: ${mixins.colors.secondary};
          @media(max-width: 600px) {
            margin-left:0;
          }
        }
        
      }
      
      .btnRemove{
        border: 0.2rem solid ${mixins.colors.secondary};
        border-radius: 0.5rem;
        background: #fff;
        width: 3rem;
        height: 3rem;
        .iconRemove{
          color: ${mixins.colors.secondary};
        }
      }
      h3 {
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 1.25rem;
        line-height: 1.688rem;
        color: ${mixins.colors.secondary};
        @media(max-width: 600px) {
          font-size: 0.75rem;
        }
      }
      p {
        font-family: Poppins;
        font-style: normal;
        font-weight: 700;
        font-size: 1.2rem;
        color: ${mixins.colors.secondary};
        @media(max-width: 600px) {
          font-size: 0.75rem;
        }
      }
      input {
        width: 4.875rem;
        height: 3.625rem !important;
        text-align: center;
        background: #fff;
        font-size: 1.25rem;
        color: ${mixins.colors.secondary};
        border-radius: 0.625rem;
        border: 0.2rem solid ${mixins.colors.secondary};
        @media(max-width: 600px) {
          width: 1.75rem;
          height: 1.75rem !important;
        }
      }
      td {
        background: #fff;
        width: auto;
        border-bottom: 2px solid ${mixins.colors.secondary};
      }
      th {
        background: #fff;
        width: auto;
      }
      img {
        width: 3.75rem;
        @media(max-width: 600px) {
          width: 2.5rem;
        }
      }
      div {
        display: flex;
        @media(max-width: 600px) {
          width: 20px;
        }
      }
      
    }
  
`;

export const ContainerCepCompra = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.813rem;
  `

export const DivBotoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.813rem;
`


export const DivCompra = styled.div`
  width: 550px;
  height: 125px;
  border-radius: 10px;
  border-color: #004278; 
  border: 2px solid #004278;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  h3{
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.688rem;
    color: #004278;
  }
  button{
    margin-left: 1rem;
    border: none;
    width: 15rem;
    height: 3.438rem;
    background: #05D733;
    border-radius: 0.5rem;
    font-size: 1rem;
    text-align: center;
    color: ${mixins.colors.white};
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    
  }
`

export const ButtonPrimario = styled.button`
  border: none;
  width: 15.625rem;
  height: 3.438rem;
  background: #004278;
  border-radius: 0.5rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  color: ${mixins.colors.white};
     
`
export const ButtonSecundario = styled(ButtonPrimario)`
  background: ${mixins.colors.background};
  border: 0.125rem solid #004278;
  margin-left: 0.875rem;
  color: ${mixins.colors.secondary};
      
`
export const Total = styled.div`
  display: flex;
  align-items: baseline;  
  span {
    color: ${mixins.colors.background};
    font-weight: bold;
  }
  
  strong {
    font-size: 1.75rem;
    margin-left: 0.313rem;
  }
`;