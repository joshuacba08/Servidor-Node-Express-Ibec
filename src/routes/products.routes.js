const { Router } = require('express');
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/product.controllers');

const router = Router();

// CRUD: Create, Read, Update, Delete (ABM: Alta, Baja, Modificación)

// crear un producto http://localhost:8080/api/v1/products/
router.post('/', createProduct );

// obtener todos los productos http://localhost:8080/api/v1/products/
router.get('/', getProducts)

// obtener un producto http://localhost:8080/api/v1/products/:id
router.get('/:id', getProductById) // :id es un parametro

// actualizar un producto http://localhost:8080/api/v1/products/:id
router.put('/:id', updateProduct)

// eliminar un producto http://localhost:8080/api/v1/products/:id
router.delete('/:id', deleteProduct)


// exporto mi router para que pueda ser usado
module.exports = router;