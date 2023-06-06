const {
	getAllProducts,
	addNewProduct,
	updateOneProduct,
} = require('../../models/products/products.model');

async function httpGetAllProducts(req, res) {
	const { company_id } = req.user;

	try {
		const products = await getAllProducts(company_id);
		return res.status(200).json(products);
	} catch (error) {
		return res.status(400).json({ error });
	}
}

async function httpAddNewProduct(req, res) {
	const { company_id } = req.user; // {company_id, email}
	const data = req.body;

	try {
		const created = await addNewProduct({ company_id, ...data });
		return res.status(201).json(created);
	} catch (error) {
		return res.status(400).json({ error });
	}
}

async function httpUpdateOneProduct(req, res) {
	const data = req.body;

	try {
		const updated = await updateOneProduct(data);
		return res.status(200).json(updated);
	} catch (error) {
		return res.status(400).json({ error });
	}
}

module.exports = {
	httpGetAllProducts,
	httpAddNewProduct,
	httpUpdateOneProduct,
};
