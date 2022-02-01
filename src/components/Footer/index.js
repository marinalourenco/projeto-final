import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';
import {
	Container,
	Content,
	Column,
	FooterLink,
	Title,
} from "./styles";

export const Footer = () => {
	return (
		<Container>
			<Content>
				<Column>
					<Title>Sobre</Title>
					<FooterLink href="#">A Pokemon Store</FooterLink>
					<FooterLink href="#">Missão</FooterLink>
					<FooterLink href="#">Visão</FooterLink>
				</Column>
				<Column>
					<Title>Produtos</Title>
					<FooterLink href="#">Pokémons</FooterLink>
					<FooterLink href="#">Pedras Evolucionárias</FooterLink>
					<FooterLink href="#">Medicina</FooterLink>
					<FooterLink href="#">Poké Bolas</FooterLink>
				</Column>
				<Column>
					<Title>Contato</Title>
					<FooterLink href="#">(99) 99999-9999</FooterLink>
					<FooterLink href="#">contato@pokemonstore.com</FooterLink>
					<FooterLink href="#">Avenida Arceus, nº 111, Saffron, Kanto.</FooterLink>
				</Column>
				<Column>
					<Title>Social Media</Title>
					<FooterLink href="#">
						<FaFacebookSquare />&ensp;Facebook			
					</FooterLink>
					<FooterLink href="#">
						<FaInstagramSquare />&ensp;Instagram			
					</FooterLink>
					<FooterLink href="#">
						<FaTwitterSquare />&ensp;Twitter			
					</FooterLink>
					<FooterLink href="#">
						<FaYoutubeSquare />&ensp;Youtube			
					</FooterLink>
				</Column>
			</Content>
		</Container>
	);
};