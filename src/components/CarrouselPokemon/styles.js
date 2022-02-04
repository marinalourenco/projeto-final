import styled from 'styled-components';
import { mixins } from "../../styles/mixins"

export const Container = styled.div`
  position: absolute;
  top: 6rem;
  width: 100%;
  @media(max-width: 600px) {
    top: 9.5rem;
  }
`