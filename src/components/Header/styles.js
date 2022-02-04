import styled from 'styled-components';
import { mixins } from '../../styles/mixins';
import Lupa from '../../assets/lupa.svg';


export const User = styled.div`
  background: ${mixins.colors.primary};
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top:0;
  z-index:1;
@media(max-width: 600px) {
  height: 9.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.blue {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  
  .div {
    display: flex;
    align-items: center;
    img{
    width: 5.313rem;
    border-radius: 0.938rem;
    margin-right: 0.938rem;
      @media(max-width: 1080px) {
        width: 2.75rem;
      }
    }
    label {
      position: relative;
    }
    label:before {
      content: "";
      position: absolute;
      left: 1rem;
      top: 0.7rem;
      bottom: 0;
      width: 1.875rem;
      background: url(${Lupa}) no-repeat;
    }
    input {
      width: 22rem;
      padding: 0.7rem 1rem 0.7rem 3rem;
      border-radius: 5px;
      border: 0;
      background: ${mixins.colors.background};
      @media(max-width: 750px) {
        width: 16rem;
      }
      &::placeholder {
        color: ${mixins.colors.gray2};
      }
    }
  }
  .users{
    margin-top: 1rem;
    display: flex;
    align-items:center;
    justify-content: space-around;
    @media(max-width: 1280px) {
      flex-direction: column;
    }
    
    .user {
    padding: 0;
    margin: 0;
    display: block;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 0.9rem;
    margin-left: 1rem;
    @media(max-width: 750px) {
      margin-left:0;
    }
    .FaUser {
      color: ${mixins.colors.white};
    }
    color: ${mixins.colors.background}
  }
  .car {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
    color: ${mixins.colors.background};
    @media(max-width: 750px) {
      margin-left: 0;
    }
    .ShopCar {
      color: ${mixins.colors.white};
      width: 1.25rem;
    }
    .cart{
      font-weight: 400;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      margin-left: 0.5rem;
    }
    .shop{
      margin-top: 15px;
      font-weight: 700;
      margin-left: 0.3rem;
    }
  }
  a {
    color: ${mixins.colors.background};
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 700;
  }
  button {
    color: ${mixins.colors.background};
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 700;
    background: transparent;
    border: 0;
    padding: 0;
  }
  }
  
}
`;