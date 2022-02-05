import * as S from './styles';
import { formatPrice } from '../../utils/format';
import { useCart } from '../../hooks/useCart';
import { useModal } from '../../hooks/useModal';
import {
    MdDelete,
    MdAddCircleOutline,
    MdRemoveCircleOutline,
  } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const CartTable = () => {
    const navigate = useNavigate();
    const { cart, removeProduct, updateProductAmount, removeAllProduct } = useCart();
    const { handleOpenCompleteModal } = useModal()

    const cartFormatted = cart.map(product => ({
        ...product, priceFormatted: formatPrice(product.price), subtotal: formatPrice(product.price * product.amount)
    }))
    const total =
        formatPrice(
            cartFormatted.reduce((sumTotal, product) => {
                sumTotal += product.price * product.amount

                return sumTotal
            }, 0)
        )

    function handleProductIncrement(product) {
        const IncrementArguments = {
            productId: product.id,
            amount: product.amount + 1
        }
        updateProductAmount(IncrementArguments)        
    }

    function handleProductDecrement(product) {
        const IncrementArguments = {
            productId: product.id,
            amount: product.amount - 1
        }
        updateProductAmount(IncrementArguments)
    }

    function handleRemoveProduct(productId) {
        removeProduct(productId)
    }


    return (
        <>
            <S.Container>
                <S.Title> Carrinho de Compras</S.Title>
                <S.Content>
                    <table>
                        <thead>
                            <tr>
                                <th><h3>Produto</h3></th>
                                <th><h3>V. Unitário</h3></th>
                                <th><h3>Quantidade</h3></th>
                                <th><h3>Sub-total</h3></th>
                                <th><h3>Excluir</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartFormatted.map(product => (
                                <tr data-testid="product" key={product.id}>
                                    <td>
                                        <img src={`images/${product.id}.gif`} alt={product.name} />
                                        <p>{product.name}</p>
                                    </td>
                                    <td>
                                        <p>{product.priceFormatted}</p>
                                    </td>
                                    <td>
                                        <div className="qtdProduct">
                                            <button
                                                className="btni"
                                                type="button"
                                                data-testid="decrement-product"
                                                disabled={product.amount <= 1}
                                                onClick={() => handleProductDecrement(product)}
                                            >
                                                <MdRemoveCircleOutline size={24} />
                                            </button>
                                            <input
                                                type="text"
                                                data-testid="product-amount"
                                                readOnly
                                                value={product.amount}
                                            />
                                            <button
                                                className="btnd"
                                                type="button"
                                                data-testid="increment-product"
                                                onClick={() => handleProductIncrement(product)}
                                            >
                                                <MdAddCircleOutline size={24} />
                                            </button>
                                        </div>
                                    </td>
                                    <td><p>{product.subtotal}</p></td>
                                    <td>
                                        <button
                                            className="btnRemove"
                                            type="button"
                                            data-testid="remove-product"
                                            onClick={() => handleRemoveProduct(product.id)}
                                        >
                                            <MdDelete className="iconRemove" size={20} />
                                        </button>
                                   </td>     
                                </tr>
                                ))}  
                        </tbody>
                    </table>
                </S.Content>
                    <S.DivBotoes>
                        <S.ButtonPrimario onClick={() => navigate("/")} >Continuar Comprando</S.ButtonPrimario>
                        <S.ButtonSecundario onClick={removeAllProduct} >Cancelar Compra</S.ButtonSecundario>
                    </S.DivBotoes>
                    <S.ContainerCepCompra>
                        <S.DivCompra>
                            <h3>valor total: {total}</h3>
                            <button onClick={handleOpenCompleteModal} disabled={cartFormatted.length < 1 }>Finalizar Compra</button>
                        </S.DivCompra>
                    </S.ContainerCepCompra>
                       
            </S.Container>
                                     
        </>
        )
}

export default CartTable