const Product = require('../models/Product');

const getAllProudcts = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(5000).json({ message: "Server' error" });
    }
}

const getProductById = async (req, res) => {
    try {
        console.log("id: " + req.params.id);
        const product = await Product.findOne({ _id: req.params.id });
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(5000).json({ message: "Server' error" });
    }
}

module.exports = {
    getAllProudcts,
    getProductById
}