const Product = require('../models/Product.model');

const createProduct = async (req, res) => {
    try {
        // creo un nuevo producto
        const newProduct = await Product.create(req.body);

        return res.status(200).json({
            ok:true,
            msg: 'Producto creado exitosamente',
            data: newProduct
        })
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'Error al crear el producto',
            error
        })
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // obtengo todos los productos

        return res.status(200).json({
            ok:true,
            msg: 'Productos obtenidos exitosamente',
            data: products
        });

    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'Error al obtener los productos',
            error
        })
    }
}


module.exports = {
    createProduct,
    getProducts
}