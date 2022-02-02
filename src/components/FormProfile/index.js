import useProfile from "../../hooks/useProfile";
import { Container, Form, Title, SubTitle, Row, Column, Input, Button, Select} from "./styles";
import {countries} from '../../utils/countries'
import {genders} from '../../utils/gender'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from "react";
import { useFormik } from "formik"



function FormProfile() {
    const { auth, profile, getRegister,  createRegister, updateRegisters, } = useAuth()
    useEffect(()=>{
        getRegister(auth)
    },[])
    const formik = useFormik({
        initialValues:{
          name:auth?profile.name:"",
          gender:auth?profile.gender:"",
          origin: auth?profile.origin:"",
          job: auth?profile.job:"",
          email:auth?profile.email:"",
          password:auth?profile.password:"",
        },

        onSubmit: async (values)=>{
          console.log(values)
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
                            name="gender" 
                            name="gender"
                            id="gender" 
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
                            name="origin" 
                            name="origin"
                            id="origin" 
                            required 
                            onChange={formik.handleChange}
                            value={formik.values.origin}
                        >
                            {
                               countries.map((item, index) => (
                                <option index={index} value={item.nome_pais}>{item.nome_pais}</option>
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
                <Row>
                    <Button type="submit" isLight >SALVAR</Button>
                    <Button onClick={()=>{}}>CANCELAR</Button>
                </Row>
            </Form>
       </Container>
    )
}

export default FormProfile;