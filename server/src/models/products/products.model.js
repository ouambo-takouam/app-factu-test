const Product = require('./products.mongo');

async function getOneProduct(id) {
	return await Product.findById(id).exec();
}

async function getAllProducts(company_id) {
	return await Product.find({ company_id }).exec();
}

async function addNewProduct(data) {
	return await Product.create(data);
}

async function updateOneProduct(data) {
	await Product.updateOne({ _id: data._id }, data);

	return await getOneProduct(data._id);
}

module.exports = {
	getAllProducts,
	addNewProduct,
	updateOneProduct,
};
