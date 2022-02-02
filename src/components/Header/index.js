import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { User } from './styles';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { useModal } from '../../hooks/useModal';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.png"

export function Header() {
    const navigate = useNavigate()
    const { cart } = useCart();
    const { auth, signOut } = useAuth();
    const { handleOpenLoginModal } = useModal();
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
            {!auth?(
            <div className="user">
              <FaUser className="FaUser"/> Faça seu <button type="button" 
                onClick={handleOpenLoginModal}
              >
                Login
              </button> ou <button type="button" onClick={() => navigate("/profile")}>
                Cadastre-se
              </button>
            </div>
            ):(
              <div className="user">
              <FaUser className="FaUser"/> Edite o seu 
              <button type="button" 
                onClick={() => navigate("/profile")}
              >
                Perfil
              </button> ou prefere <button type="button" onClick={signOut}>
                Sair
              </button>
            </div>
            )}
  
            <span className="car">
              <FaShoppingCart /> <Link className="cart" to="/cart"> Seu carrinho tem <p className="shop">{cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}</p></Link>
            </span>
          </div>
        </div>
        
      </User>
    )
}