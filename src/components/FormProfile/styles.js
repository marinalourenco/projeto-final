import styled from 'styled-components';
import { mixins } from "../../styles/mixins"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1em;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 54px;
  color: ${mixins.colors.secondary};
`;

export const Form = styled.form`
`;

export const Row = styled.div`
  width: 100%;
  display: flex;

  grid-template-columns: fit-content;
  grid-gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 31rem;
  }

`;

export const SubTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  color: ${mixins.colors.gray4};
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
  width: 20em;
  margin: 0;
  padding: 15px;
  border: none;
  border-radius: 0.5em;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  background-color: ${mixins.colors.gray3};
`;

export const Button = styled.button`
  width: 8em;
  margin: 0;
  padding: 15px;
  border-radius: 0.25em;
  border-width: 1px;
  border-color: ${mixins.colors.darkGray};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  background-color: ${props => props.isLight ? mixins.colors.darkGray : mixins.colors.white};
  color: ${props => props.isLight ? mixins.colors.white : mixins.colors.darkGray};
`;

export const Select = styled.select`
  width: 12em;
  margin: 0;
  padding: 15px;
  border: none;
  border-radius: 0.5em;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  background-color: ${mixins.colors.gray3};
`;