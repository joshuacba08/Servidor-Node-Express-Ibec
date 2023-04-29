const { Router } = require('express');
const { createProduct, getProducts } = require('../controllers/product.controllers');

const router = Router();

// crear un producto http://localhost:8080/api/v1/products/
router.post('/', createProduct );

// obtener todos los productos http://localhost:8080/api/v1/products/
router.get('/', getProducts)



// exporto mi router para que pueda ser usado
module.exports = router;