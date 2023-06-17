const Product = require("../models/Product.model");

const createProduct = async (req, res) => {
  try {
    // creo un nuevo producto
    const newProduct = await Product.create(req.body);

    return res.status(200).json({
      ok: true,
      msg: "Producto creado exitosamente",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error al crear el producto",
      error,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // obtengo todos los productos

    return res.status(200).json({
      ok: true,
      msg: "Productos obtenidos exitosamente",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error al obtener los productos",
      error,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params; // obtengo el id de los parametros de la url

    const product = await Product.findById(id); // busco el producto por id

    if (!product) {
      return res.status(404).json({
        ok: false,
        msg: "Producto no encontrado",
      });
    }

    return res.status(200).json({
      ok: true,
      msg: "Producto obtenido exitosamente",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error al obtener el producto",
      error,
    });
  }
};

const updateProduct = async (req, res) => {
  try {

    const { id } = req.params; // obtengo el id de los parametros de la url

    const product = await Product.findByIdAndUpdate(id, req.body, {new: true}); // busco el producto por id y lo actualizo
    // {new: true} es para que me devuelva el producto actualizado

    if (!product) {
        return res.status(404).json({
            ok: false,
            msg: "Producto no encontrado",
        });
    }

    return res.status(200).json({
        ok: true,
        msg: "Producto actualizado exitosamente",
        data: product,
    });

  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error al actualizar el producto",
      error,
    });
  }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; // obtengo el id de los parametros de la url

        const product = await Product.findByIdAndDelete(id); // busco el producto por id y lo elimino

        if (!product) {
            return res.status(404).json({
                ok: false,
                msg: "Producto no encontrado",
            });
        }

        return res.status(200).json({
            ok: true,
            msg: "Producto eliminado exitosamente",
            data: product,
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error al eliminar el producto",
            error,
        });
    }
};


module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
