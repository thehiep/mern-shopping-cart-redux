import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SideDrawer.css'

const SideDrawer = ({ shown, click }) => {
    const sideDrawerClass = ["sidedrawer"];
    const cartItems = useSelector(state => state.cart.cartItems);
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + (+item.qty), 0);
    }
    if (shown) {
        sideDrawerClass.push("show")
    }
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart">
                            <span>
                                Cart <span className="sidedrawer__cartbadge">{getCartCount()}</span>
                            </span>
                        </i>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer;