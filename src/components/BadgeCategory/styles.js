import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  margin-top: 1.75rem;
  width: 100%;
  height: 100px;
  background: ${mixins.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  button {
      margin-left: 5px;
  }
`