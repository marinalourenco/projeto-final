import NF404 from '../../assets/404.svg';

import * as S from "./styles";

const NotFound = () => {
	return (
		<S.Container>
			<S.Content>
            <img src={NF404} alt="Not Found"/>
            <S.BotaoVoltar type="button"><h1>Voltar</h1></S.BotaoVoltar>
			</S.Content>
		</S.Container>
	);
};

export default NotFound