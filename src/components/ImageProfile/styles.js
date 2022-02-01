import styled from 'styled-components';

export const ImageContainer = styled.div`
    width: 30%;
    height: 100%;
 
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0em 1em 0em 1em;
`;

export const Image = styled.div`
    width: ${props => props.width ?? "10rem" };
    height: ${props => props.height ?? "10rem" };
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    border-radius: 5em;
    position: ${props => props.position ?? "relative" };
    
    background: ${props => `url(${props.image}) no-repeat`};
`;

export const Icon = styled.img`
    position: ${props => props.position ?? "relative" };
    transform: translate(-10px, -10px);
    cursor: pointer;
`;