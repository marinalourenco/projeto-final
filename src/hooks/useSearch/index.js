import { createContext, useCallback, useContext, useState } from 'react';

const ModalContext = createContext({});

export function SearchProvider({ children }) {
 const [queryParams, setQueryParams] = useState("") 

 const handleSetQueryParams = useCallback((search)=>{
     console.log(search)
     setQueryParams(search.target.value)
 },[])
 
 
  return (
    <ModalContext.Provider
      value={{ 
          queryParams, 
          handleSetQueryParams, 
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