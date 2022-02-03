import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { useFormik } from "formik"
import * as yup from 'yup';
import { Container } from './styles';
import { useModal } from '../../hooks/useModal';
import { useAuth } from '../../hooks/useAuth';
import {Link} from "react-router-dom";


const validationSchema = yup.object().shape({
  email: yup.string().email('Informe um email válido').required('Login é obrigatório'),
  password: yup.string().min(8).required('Senha é obrigatório')
});


export function ModalLogin() {
  const {loginModal, handleCloseLoginModal} = useModal();
  const { signIn } = useAuth();
  const formik = useFormik({
    initialValues:{
      email:"",
      password: "",
    },
    validationSchema,
    onSubmit: async (values)=>{
      console.log("login",values)
      await signIn(values); 
      handleCloseLoginModal()
    }
  })
  
  return (
    <Modal 
      isOpen={loginModal}
      onRequestClose={handleCloseLoginModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        className="btnClose" 
        type="button" 
        onClick={handleCloseLoginModal}
      >
        <GrClose 
          className="iconClose" 
        />
      </button>
      <Container onSubmit={formik.handleSubmit}>
        <h2>Faça seu login</h2>
        
          <input
            id="email"
            name="email"
            type="email"
            placeholder='Digite aqui o seu e-mail'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <p>{formik.errors.email && <span>{formik.errors.email}</span>}</p>

          <input
            id="password"
            name="password"
            type="password"
            placeholder='Digite aqui a sua senha'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <p>{formik.errors.password && <span>{formik.errors.password}</span>}</p>

          <div className="senha">
            <p>Esqueci minha <Link to="/profile">senha</Link></p>
          </div>

          <button type="submit">ENTRAR</button>
          

          <div className="register">
            <p>Não tem conta? <Link to="/profile">Registre-se</Link></p>
          </div>
      
      </Container>
    </Modal>
  )
}
