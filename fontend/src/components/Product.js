import './Product.css';
const { Link } = require("react-router-dom");

const Product = ({ imageUrl, name, price, description, productId }) => {
    return (
        <div className="product">
            <img src={imageUrl} alt="" />

            <div className="product__info">
                <p className="info-_name">{name}</p>
                <p className="info__description">
                    {description.substring(0, 100)}...
                </p>
                <p className="info__price">${price}</p>
                <Link to={`/product/${productId}`} className="info__button">View</Link>
            </div>
        </div>
    );
}

export default Product;