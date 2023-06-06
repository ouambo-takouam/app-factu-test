const { Router } = require('express');

const {
	httpGetAllProducts,
	httpAddNewProduct,
	httpUpdateOneProduct,
} = require('./products.controller');

const productsRouter = Router();

productsRouter.get('/', httpGetAllProducts);
productsRouter.post('/', httpAddNewProduct);
productsRouter.patch('/', httpUpdateOneProduct);

module.exports = productsRouter;
