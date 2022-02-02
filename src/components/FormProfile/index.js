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
                            required
                        />
                    </Column>
                    <Column alignSelf="flex-end">
                        <SubTitle>Sexo</SubTitle>
                        <Select name="gender" id="gender" required onChange={handleGender}>
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
                        <Select name="origin" id="origin" required onChange={handleOrigin}>
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
                            required
                        />
                    </Column>
                </Row>
                <Row>
                    <Button type="submit" isLight >SALVAR</Button>
                    <Button onClick={returnButton}>CANCELAR</Button>
                </Row>
            </Form>
       </Container>
    )
}

export default FormProfile;