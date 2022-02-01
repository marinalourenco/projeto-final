import { createContext, useCallback, useContext, useState } from 'react';

const ModalContext = createContext({});

export function ModalProvider({ children }) {
 const [loginModal, setLoginModal] = useState(false) 
 const [detailModal, setDetailModal] = useState({}) 

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
 
 
  return (
    <ModalContext.Provider
      value={{ 
          loginModal, 
          handleOpenLoginModal, 
          handleCloseLoginModal, 
          detailModal,
          handleOpenDetailModal ,
          handleCloseDetailModal,
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