import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
import { Container } from './styles';
import { useModal } from '../../hooks/useModal';
import { useCart } from '../../hooks/useCart';

export default function ModalPokemon() {
  
  const { handleCloseDetailModal, detailModal } = useModal()
  const { addProduct } = useCart();

  function handleAddProduct(id) {
    addProduct(id);
    handleCloseDetailModal();
  }
  return (
    <Modal 
      isOpen={Object.keys(detailModal).length !== 0}
      onRequestClose={handleCloseDetailModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content-description"
    >
      <button 
        className="btnClose" 
        type="button" 
        onClick={handleCloseDetailModal}
      >
        <GrClose 
          className="iconClose" 
        />
      </button>
      {Object.keys(detailModal).length !== 0 &&
      <>
      <Container>
              <div className="img">
                <img src={`images/${detailModal.id}.gif`} alt={detailModal.name} />
              </div>
                
              <h2>{`${detailModal.name} ${detailModal.cardNumber}`}</h2>
              <div className="descriptions">
                <p>Tipo: {`${detailModal.type.tp1} ${detailModal.type.tp2}`}</p>
              </div>
              <div className="values">
                <p className="cifr">R$</p>
                <p className="value">{detailModal.price}</p>
                <p className="valuesec">,00</p>
              </div>
              <div className="descriptions">
                <p>Descrição: {detailModal.desc}</p>
              </div>
              <button className="car" type="submit" onClick={() => handleAddProduct(detailModal.id)}>ADICIONAR AO CARRINHO</button>   
      </Container>

</>
    }
    </Modal>
  )
}