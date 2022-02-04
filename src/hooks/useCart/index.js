import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

const CartContext = createContext({});

export function CartProvider({ children }) {
  const navigate = useNavigate()
  const [cart, setCart] = useState(() => {
    const storagedCart = localStorage.getItem('@PokeMercadoLivre:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId) => {
    try {
      const productAlreadyInCart = cart.find(product => product.id === productId)
      const { data: stock } = await api.get(`stock/${productId}`)

      if(!productAlreadyInCart) {
        const { data: product } = await api.get(`products/${productId}`)
        if(stock.amount > 0) {
          setCart([...cart, {...product, amount: 1}])
          localStorage.setItem('@PokeMercadoLivre:cart', JSON.stringify([...cart, {...product, amount: 1}]))
          toast('Produto adicionado',{
            position: toast.POSITION.BOTTOM_CENTER
          })
          return;
        }
      }

      if(productAlreadyInCart) {
        if (stock.amount > productAlreadyInCart.amount) {
          const updatedCart = cart.map(cartItem => cartItem.id === productId ? {
            ...cartItem,
            amount: Number(cartItem.amount) + 1
          } : cartItem)
  
          setCart(updatedCart)
          localStorage.setItem('@PokeMercadoLivre:cart', JSON.stringify(updatedCart))
          return;
        } else {
          toast.error('Quantidade solicitada fora de estoque',{
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      }
    } catch {
      toast.error('Erro na adição do produto',{
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  };

  const removeProduct = (productId) => {
    try {
      const productExists = cart.some(cartProduct => cartProduct.id === productId)
      if(!productExists) {
        toast.error('Erro na remoção do produto',{
          position: toast.POSITION.BOTTOM_CENTER
        })
        return
      }

      const updatedCart = cart.filter(cartItem => cartItem.id !== productId)
      setCart(updatedCart)
      localStorage.setItem('@PokeMercadoLivre:cart', JSON.stringify(updatedCart))
      toast("produtos removido com sucesso",{
        position: toast.POSITION.BOTTOM_CENTER
      })
    } catch {
      toast.error('Erro na remoção do produto',{
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  };

  const removeAllProduct = (productId) => {
    try {
      setCart([])
      localStorage.setItem('@PokeMercadoLivre:cart', JSON.stringify([]))
      navigate("/")
      toast('Todos os produtos foram removidos',{
        position: toast.POSITION.BOTTOM_CENTER
      })
    } catch {
      toast.error('Erro na remoção do produto',{
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  };

  const updateProductAmount = async ({ productId, amount}) => {
    try {
      if(amount < 1){
        toast.error('Erro na alteração de quantidade do produto',{
          position: toast.POSITION.BOTTOM_CENTER
        })
        return
      }

      const response = await api.get(`/stock/${productId}`);
      const productAmount = response.data.amount;
      const stockIsFree = amount > productAmount

      if(stockIsFree) {
        toast.error('Quantidade solicitada fora de estoque',{
          position: toast.POSITION.BOTTOM_CENTER
        })
        return
      }

      const productExists = cart.some(cartProduct => cartProduct.id === productId)
      if(!productExists) {
        toast.error('Erro na alteração de quantidade do produto',{
          position: toast.POSITION.BOTTOM_CENTER
        })
        return
      }

      const updatedCart = cart.map(cartItem => cartItem.id === productId ? {
        ...cartItem,
        amount: amount
      } : cartItem)
      setCart(updatedCart)
      localStorage.setItem('@PokeMercadoLivre:cart', JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro na alteração de quantidade do produto',{
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount, removeAllProduct }}
    >
      { children }
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}