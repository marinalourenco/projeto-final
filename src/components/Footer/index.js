import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import * as S from "./styles";

export const Footer = () => {
	return (
		<S.Container>
			<S.Content>
				<S.Column>
					<S.Title>Sobre</S.Title>
					<S.FooterLink href="#">A Pokemon Store</S.FooterLink>
					<S.FooterLink href="#">Missão</S.FooterLink>
					<S.FooterLink href="#">Visão</S.FooterLink>
				</S.Column>
				<S.Column>
					<S.Title>Produtos</S.Title>
					<S.FooterLink href="#">Pokémons</S.FooterLink>
					<S.FooterLink href="#">Pedras Evolucionárias</S.FooterLink>
					<S.FooterLink href="#">Medicina</S.FooterLink>
					<S.FooterLink href="#">Poké Bolas</S.FooterLink>
				</S.Column>
				<S.Column>
					<S.Title>Contato</S.Title>
					<S.FooterLink href="#">(99) 99999-9999</S.FooterLink>
					<S.FooterLink href="#">contato@pokemonstore.com</S.FooterLink>
					<S.FooterLink href="#">Avenida Arceus, nº 111, Saffron, Kanto.</S.FooterLink>
				</S.Column>
				<S.Column>
					<S.Title>Social Media</S.Title>
					<S.FooterLink href="#">
						<FaFacebookSquare />&ensp;Facebook			
					</S.FooterLink>
					<S.FooterLink href="#">
						<FaInstagramSquare />&ensp;Instagram			
					</S.FooterLink>
					<S.FooterLink href="#">
						<FaTwitterSquare />&ensp;Twitter			
					</S.FooterLink>
					<S.FooterLink href="#">
						<FaYoutubeSquare />&ensp;Youtube			
					</S.FooterLink>
				</S.Column>
			</S.Content>
		</S.Container>
	);
};