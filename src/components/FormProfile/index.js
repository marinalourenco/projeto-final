import useProfile from "../../hooks/useProfile";
import { Container, Form, Title, SubTitle, Row, Column, Input, Button, Select} from "./styles";
import {countries} from '../../utils/countries'
import {genders} from '../../utils/gender'

function FormProfile() {
    const { job, name, handleGender, handleJob, handleName, handleOrigin, submitProfile, returnButton} = useProfile();

    return(
       <Container>
            <Title>Meu Perfil</Title>
            <Form onSubmit={submitProfile}>
                <Row>
                    <Column>
                        <SubTitle>Nome</SubTitle>
                        <Input
                            type="text"
                            data-testid="name"
                            value={name}
                            onChange={handleName}
                        />
                    </Column>
                    <Column alignSelf="flex-end">
                        <SubTitle>Sexo</SubTitle>
                        <Select name="paises" id="paises" onChange={handleGender}>
                            {
                                genders.map((item, index) => (
                                    <option key={index} value={item.genero}>{item.genero}</option>
                                ))
                            }
                        </Select>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <SubTitle>Origem</SubTitle>
                        <Select name="paises" id="paises"  onChange={handleOrigin}>
                            {
                                countries.map((country,index) => (
                                    <option key={index} value={country.nome_pais}>{country.nome_pais}</option>
                                ))
                            }
                        </Select>
                    </Column>
                    <Column alignSelf="flex-end">
                        <SubTitle>Função</SubTitle>
                        <Input
                            type="text"
                            data-testid="job"
                            value={job}
                            onChange={handleJob}
                        />
                    </Column>
                </Row>
                <Row>
                    <Button type="submit" isLight >Salvar</Button>
                    <Button onClick={returnButton}>Voltar</Button>
                </Row>
            </Form>
       </Container>
    )
}

export default FormProfile;