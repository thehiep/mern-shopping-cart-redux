import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import "./CartItem.css";

const { Link } = require("react-router-dom")

const CartItem = ({ product, imageUrl, name, qty, countInStock, price }) => {
    const dispatch = useDispatch();
    const addToCartHandler = (event) => {
        dispatch(addToCart(product, event.target.value))
    }
    const removeFromCartHandler = event => {
        dispatch(removeFromCart(product));
    }
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={imageUrl} alt="" />
            </div>
            <Link to={`/product/${product}`} className="cartitem__name" >
                <p>{name}</p>
            </Link>
            <p className="cartitem__price">${price}</p>
            <select value={qty} className="cartitem__select" onChange={addToCartHandler}>
                {[...Array(countInStock).keys()].map(x => <option value={x + 1}>{x + 1}</option>)}
            </select>
            <button className="cartitem__deleteBtn" onClick={removeFromCartHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem;