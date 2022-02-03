import { createContext,  useState,  useCallback, useContext } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/api'


export const AuthContext = createContext({});

export function AuthProvider ({ children }){
  const [profile, setProfile] = useState({});
  const [auth, setAuth] = useState(() => {
    const token = sessionStorage.getItem('@PokeMercadoLivre:login');
    if (token) {
      setAuth(token);
      return
    }
    return""
  });
  

  const signOut = useCallback(()=>{
    sessionStorage.removeItem('@PokeMercadoLivre:login')
    setAuth("");
  },[]);

  const signIn = useCallback(async ({email, password}) => {
    try {
      if(!email || !password) {
          toast.error('Login ou senha inválidos')
          return
     }
      
      const { data: user } = await api.get(`/users?email=${email}`)

      if(user.length === 0 || password !== user[0].password) {
          toast.error('Login ou senha inválidos')
          return
      }

      setAuth(user[0].email);
      sessionStorage.setItem('@PokeMercadoLivre:login', user[0].email)
      api.defaults.headers.Authorization = `Bearer ${user[0].email}`; 
    } catch (error) {
        toast.error(error)
        return 
    }
  },[]); 

  const getRegister = useCallback(async ({email}) => {
    try {
      const { data: user } = await api.get(`/users?email=${email}`)
      setProfile(user);
    } catch (error) {
        toast.error(error)
        return 
    }
  },[]); 

 const createRegister = useCallback(async (registeriInput) => {
            try {
              const { data: user } = await api.post('/users', registeriInput)    
              setAuth(user[0].email);
              sessionStorage.setItem('@PokeMercadoLivre:login', user[0].email)
              api.defaults.headers.Authorization = `Bearer ${user[0].email}`; 
            } catch (error) {
                toast.error("Erro ao cadastrar")
              return
            }
    
  },[])

  const updateRegisters= useCallback(async (registeriUpdate) => {
          try {
            await api.put(`/users/${registeriUpdate.id}`, registeriUpdate)
          } catch (error) {
            toast.error("Erro ao atualizar cadastro")
            return
          }
    },[])

 
  return (
    <AuthContext.Provider 
      value={{ 
        auth, 
        createRegister, 
        updateRegisters,
        signIn,
        signOut,
        profile,
        getRegister
      }}
    >
          {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
    const context = useContext(AuthContext);
  
    return context;
  }