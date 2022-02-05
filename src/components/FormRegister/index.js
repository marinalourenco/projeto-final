import { Container, Form, Title, SubTitle, Row, Column, Input, Button, Select} from "./styles";
import {countries} from '../../utils/countries'
import {genders} from '../../utils/gender'
import { useAuth } from '../../hooks/useAuth'
import { useFormik } from "formik"
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    gender:yup.string().required('Escolha um valor'),
    origin:yup.string().required('Escolha um valor'),
    job: yup.string().required('Escolha um valor'),
    email: yup.string().email('Informe um email válido').required('Login é obrigatório'),
    password: yup.string().min(8).required('Senha é obrigatório')
  });

function FormRegister() {
    const { auth, createRegister, updateRegisters, } = useAuth()

    const formik = useFormik({
        initialValues:{
          name:"",
          gender:"",
          origin:"",
          job:"",
          email:"",
          password:"",
        },
        validationSchema,
        onSubmit: async (values)=>{
         if(auth){
                await updateRegisters(values)
              return
          }
            await createRegister(values)
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
                            <option key={0} value={""}>Qual gênero você se identifica?</option>
                            {
                                genders.map((item, index) => (
                                    <option key={index+1} value={item.genero}>{item.genero}</option>
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
                            <option key={0} value={""}>De onde você vem?</option>
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
                        />
                    </Column>
                </Row>
                    <p>{(formik.errors.name && formik.touched.name) && <span>{formik.errors.name}</span>}</p>
                    <p>{(formik.errors.gender && formik.touched.gender) && <span>{formik.errors.gender}</span>}</p>
                    <p>{(formik.errors.origin && formik.touched.origin) && <span>{formik.errors.origin}</span>}</p>
                    <p>{(formik.errors.job && formik.touched.job) && <span>{formik.errors.job}</span>}</p>
                    <p>{(formik.errors.email && formik.touched.email) && <span>{formik.errors.email}</span>}</p>
                    <p>{(formik.errors.password && formik.touched.password) && <span>{formik.errors.password}</span>}</p>
                <Row>
                    <Button type="submit" isLight >SALVAR</Button>
                    <Button onClick={()=>{}}>CANCELAR</Button>
                </Row>
            </Form>
       </Container>
    )
}

export default FormRegister;