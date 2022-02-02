import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { User } from './styles';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png"

export function Header({ onOpenNewRegisterModal, onOpenLoginModal }) {
    const { cart } = useCart();
    const cartSize = cart?.length;
  
    return (
      <User>
        <div className="blue">
          
          <div className="div">
            <Link to="/">
            <img src={Logo} alt="pokestore" />
            </Link>
            <label>
              <input type="text" placeholder="Pesquisar" />
            </label>
          </div>
          
          <div className="users">
            <div className="user">
            <Link to="/profile">
              <FaUser className="FaUser"/>
              </Link>
              Faça seu <button type="button" 
              onClick={onOpenLoginModal}
              >
                Login
              </button> ou <button type="button" onClick={onOpenNewRegisterModal}>
                Cadastre-se
              </button>
            </div>
  
            <span className="car">
              <FaShoppingCart /> <Link className="cart" to="/cart"> Seu carrinho tem <p className="shop">{cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}</p></Link>
            </span>
          </div>
        </div>
        
      </User>
    )
}