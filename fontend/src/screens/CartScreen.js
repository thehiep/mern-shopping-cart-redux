import CartItem from '../components/CartItem';
import './CartScreen.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const CartScreen = () => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => +item.qty + qty, 0);
    }
    const getCartSubtotal = () => {
        return cartItems.reduce((price, item) => price + item.qty * item.price, 0);
    }
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/">Go back</Link>
                    </div>
                ) : cartItems.map(item => <CartItem
                    key={item.product}
                    product={item.product}
                    name={item.name}
                    imageUrl={item.imageUrl}
                    qty={item.qty}
                    price={item.price}
                    countInStock={item.countInStock}
                />)}

            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubtotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proccess to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen;