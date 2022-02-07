import { createContext,  useState,  useCallback, useContext } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../services/api'

const token = sessionStorage.getItem('@PokeMercadoLivre:login');
export const AuthContext = createContext({});

export function AuthProvider ({ children }){
  const [profile, setProfile] = useState({});
  const [auth, setAuth] = useState(token ? token[0]?.email: "");
  
  const signOut = useCallback(()=>{
    sessionStorage.removeItem('@PokeMercadoLivre:login')
    setAuth("");
    setProfile({})
    toast.success("Deslogado com sucesso",{
      position: toast.POSITION.BOTTOM_CENTER
    })
  },[]);

  const signIn = useCallback(async ({email, password}) => {
    console.log(email, password)
    try {
      if(!email || !password) {
          toast.error('Login ou senha inválidos',{
            position: toast.POSITION.BOTTOM_CENTER
          })
          return 
     }
      
      const { data: user } = await api.get(`/users?email=${email}`)
      if(user.length === 0 || password !== user[0].password) {
          toast.error('Login ou senha inválidos',{
            position: toast.POSITION.BOTTOM_CENTER
          })
          return 
      }
      setProfile(user[0]);
      setAuth(user[0].email);
      sessionStorage.setItem('@PokeMercadoLivre:login', user[0].email)
      api.defaults.headers.Authorization = `Bearer ${user[0].email}`; 
      toast.success("Logado com sucesso",{
        position: toast.POSITION.BOTTOM_CENTER
      })
    } catch (error) {
        toast.error(error)
        return 
    }
  },[]); 

  /**const getRegister = useCallback(async () => {
    try {
      const { data: user } = await api.get(`/users?email=${auth}`)
      console.log("aqui",user)
      setProfile(user[0]);
    } catch (error) {
        toast.error(error)
        return 
    }
  },[auth]); */

 const createRegister = useCallback(async (registeriInput) => {
            try {
              await api.post('/users', registeriInput);    
              setAuth((registeriInput.email));
              sessionStorage.setItem('@PokeMercadoLivre:login', (registeriInput.email))
              api.defaults.headers.Authorization = `Bearer ${(registeriInput.email)}`; 
              const { data: user } = await api.get(`/users?email=${registeriInput.email}`)
              setProfile(user[0]);
              toast.success("Cadastrado com sucesso",{
                position: toast.POSITION.BOTTOM_CENTER
              })
            } catch (error) {  
              toast.error("Erro ao cadastrar usuario",{
                position: toast.POSITION.BOTTOM_CENTER
              })
              return
            }
  },[])

  const updateRegisters= useCallback(async (registeriUpdate) => {
          try {
            if(!profile.id) {
              toast.error("Erro ao atualizar cadastro",{
                position: toast.POSITION.BOTTOM_CENTER
              })
              return
            }
            const profileUpdate = {...registeriUpdate, id: profile.id};

            await api.put(`/users/${profileUpdate.id}`, profileUpdate)
            const { data: user } = await api.get(`/users?email=${profileUpdate.email}`)
            setProfile(user[0]);
            toast.success("Atualizado com sucesso",{
              position: toast.POSITION.BOTTOM_CENTER
            })
          } catch (error) {
            toast.error("Erro ao atualizar cadastro",{
              position: toast.POSITION.BOTTOM_CENTER
            })
            return
          }
    },[profile.id])

  //useEffect(()=>{
    //console.log(auth)
      //if(auth){
        //getRegister(auth)
     // }
 // },[auth])
 
  return (
    <AuthContext.Provider 
      value={{ 
        auth, 
        createRegister, 
        updateRegisters,
        signIn,
        signOut,
        profile,
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