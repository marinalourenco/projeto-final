import { Container, Form, Title, SubTitle, Row, Column, Input, Button, Select} from "./styles";
import {countries} from '../../utils/countries'
import {genders} from '../../utils/gender'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from "react";
import { useFormik } from "formik"


function FormRegister() {
    const { auth, profile, createRegister, updateRegisters, } = useAuth()

    const formik = useFormik({
        initialValues:{
          name:profile?profile.name:"",
          gender:profile?profile.gender:"",
          origin: profile?profile.origin:"",
          job: profile?profile.job:"",
          email:profile?profile.email:"",
          password:profile?profile.password:"",
        },
        onSubmit: async (values)=>{
         if(auth){
                updateRegisters(values)
              return
          }
            createRegister(values)
            return
        }
      })


    return(
       <Container>
            <Title>Meu Perfil</Title>
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <Column>
                        <SubTitle>Nome</SubTitle>
                        <Input
                             id="name"
                             name="name"
                             type="text"
                             onChange={formik.handleChange}
                             value={formik.values.name}
                             required
                        />
                    </Column>
                    <Column alignSelf="flex-end">
                        <SubTitle>Sexo</SubTitle>
                        <Select 
                            id="gender" 
                            name="gender" 
                            required 
                            onChange={formik.handleChange}
                            value={formik.values.gender}
                        >
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
                        <Select 
                            id="origin" 
                            name="origin"
                            required 
                            onChange={formik.handleChange}
                            value={formik.values.origin}
                        >
                            {
                               countries.map((item, index) => (
                                <option key={index} value={item.nome_pais}>{item.nome_pais}</option>
                               ))
                            }
                        </Select>
                    </Column>
                    <Column alignSelf="flex-end">
                        <SubTitle>Função</SubTitle>
                        <Input
                             id="job"
                             name="job"
                             type="text"
                             onChange={formik.handleChange}
                             value={formik.values.job}
                             required
                        />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <SubTitle>E-mail</SubTitle>
                        <Input
                             id="email"
                             name="email"
                             type="email"
                             onChange={formik.handleChange}
                             value={formik.values.email}
                             required
                        />
                    </Column>
                    <Column >
                        <SubTitle>Senha</SubTitle>
                        <Input
                             id="password"
                             name="password"
                             type="password"
                             onChange={formik.handleChange}
                             value={formik.values.password}
                             required
                        />
                    </Column>
                </Row>
                    <p>{formik.errors.email && <span>{formik.errors.email}</span>}</p>
                    <p>{formik.errors.password && <span>{formik.errors.password}</span>}</p>
                <Row>
                    <Button type="submit" isLight >SALVAR</Button>
                    <Button onClick={()=>{}}>CANCELAR</Button>
                </Row>
            </Form>
       </Container>
    )
}

export default FormRegister;