import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { Container } from './styles';
import { useModal } from '../../hooks/useModal';

export default function ModalComplete() {
  
  const { completeModal, handleCloseCompleteModal } = useModal()
   
  return (
    <Modal 
      isOpen={completeModal}
      onRequestClose={handleCloseCompleteModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content-description"
    >
      <button 
        className="btnClose" 
        type="button" 
        onClick={handleCloseCompleteModal}
      >
        <GrClose 
          className="iconClose" 
        />
      </button>
      {completeModal &&
      <>
      <Container>
                             
              
              <div className="descriptions">
                <h5><strong>Compra realizada com sucesso!</strong></h5>
                <p>Em breve você receberá um e-mail com todos os detalhes</p>
              </div>
                  <button className="car" type="submit" onClick={handleCloseCompleteModal}>Voltar para o Home</button>  
             
      </Container>

</>
    }
    </Modal>
  )
}