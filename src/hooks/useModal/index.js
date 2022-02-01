import { createContext, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../useCart';

const ModalContext = createContext({});

export function ModalProvider({ children }) {
 const navigate = useNavigate()
 const { removeAllProduct } = useCart();
 const [loginModal, setLoginModal] = useState(false) 
 const [detailModal, setDetailModal] = useState({}) 
 const [completeModal, setCompleteModal] = useState(false) 

 const handleOpenLoginModal = useCallback(()=>{
     setLoginModal(true)
 },[])

 const handleCloseLoginModal = useCallback(()=>{
    setLoginModal(false)
},[])

const handleOpenDetailModal = useCallback((pokemon)=>{
    setDetailModal(pokemon)
},[])

const handleCloseDetailModal = useCallback(()=>{
   setDetailModal({})
},[])

const handleOpenCompleteModal = useCallback(()=>{
    setCompleteModal(true)
},[])

const handleCloseCompleteModal = useCallback(()=>{
   setCompleteModal(false)
   removeAllProduct()
   navigate("/")
},[navigate, removeAllProduct])
 
 
  return (
    <ModalContext.Provider
      value={{ 
          loginModal, 
          handleOpenLoginModal, 
          handleCloseLoginModal, 
          detailModal,
          handleOpenDetailModal ,
          handleCloseDetailModal,
          completeModal,
          handleOpenCompleteModal,
          handleCloseCompleteModal,
        }}
    >
      { children }
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  return context;
}