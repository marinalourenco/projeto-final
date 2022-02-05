import { createContext, useCallback, useContext, useState } from 'react';

const ModalContext = createContext({});

export function SearchProvider({ children }) {
 const [queryParams, setQueryParams] = useState("") 
 const [typePokemon, setTypePokemon] = useState("") 

 const handleSetQueryParams = useCallback((search)=>{
     setQueryParams(search.target.value)
 },[])

 const handleChangeType = useCallback((type)=>{
  setTypePokemon(pType => pType === type?"":type)
},[])
 
 
  return (
    <ModalContext.Provider
      value={{ 
          queryParams, 
          handleSetQueryParams, 
          typePokemon,
          handleChangeType,
        }}
    >
      { children }
    </ModalContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(ModalContext);

  return context;
}