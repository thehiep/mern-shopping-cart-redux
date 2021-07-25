
import { useEffect } from 'react';
import Product from '../components/Product';
import './HomeScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productActions';
const HomeScreen = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>

            <div className="homescreen_products">
                {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : products.map(product => (
                    <Product
                        productId={product._id}
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        imageUrl={product.imageUrl}
                    />
                ))}

            </div>
        </div>
    )
}

export default HomeScreen;