import './ProductScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const getProductDetail = useSelector(state => state.getProductDetail);
    const { product, loading, error } = getProductDetail;

    useEffect(() => {
        if ((product && match.params.id != product._id) || !product) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, product, match]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
    }

    return (

        <div className="productscreen">
            {loading && (<h2>Loading...</h2>)}
            {!loading && error && <h2>{error}</h2>}
            {!loading && product &&
                <Fragment>
                    <div className="productscreen__left">
                        <div className="left__image">
                            <img src={product.imageUrl} alt="" />
                        </div>
                        <div className="left__info">
                            <p className="left__name">{product.name}</p>
                            <p className="left__price">Price: ${product.price}</p>
                            <p className="left__description">Description: {product.description}</p>
                        </div>
                    </div>
                    <div className="productscreen__right">
                        <div className="right__info">
                            <p>
                                Price: <span>${qty * product.price}</span>
                            </p>
                            <p>
                                Status: <span>{product.countInStock > 0 ? "In stock" : "Out of Stock"}</span>
                            </p>
                            <p>
                                Qty
                                <select value={qty} onChange={(event) => setQty(+event.target.value)}>
                                    {[...Array(product.countInStock).keys()].map(x =>
                                        <option key={x} value={x + 1}>{x + 1}</option>
                                    )}
                                </select>
                            </p>
                            <p>
                                {product.countInStock > 0 && <button type="button" onClick={addToCartHandler}>Add To Cart</button>}
                            </p>
                        </div>
                    </div>
                </Fragment>}

        </div>
    )
}

export default ProductScreen;