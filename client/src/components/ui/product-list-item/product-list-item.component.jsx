import { useState, useEffect } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import useManageInput from '../../../hooks/manage-input.hook';
import {
	selectDocuments,
	selectOneDocument,
} from '../../../redux/data/data.selectors';
import SelectField from '../../form/select-field/select-field.component';
import InputField from '../../form/input-field/input-field.component';

export default function ProductListItem({
	randomId,
	handleRandomIds,
	removeRandomIds,
	updateProducts,
}) {
	console.log('randomID', randomId);
	const products = useSelector(selectDocuments('products'));

	const [productId, setProductId] = useState(products[0]._id);

	const product = useSelector(selectOneDocument('products', productId));

	const [fields, handleChange, updateField] = useManageInput({
		description: product.description,
		price: product.price,
		qte: 1,
	});

	const { description, price, qte } = fields;

	const handleProductIdChange = (event) => {
		setProductId(event.target.value);
	};

	const generateProductsNames = () => {
		return products.map(({ _id, name }) => ({
			text: name,
			value: _id,
		}));
	};

	// modify le produit a la selection
	useEffect(() => {
		const updateProduct = () => {
			updateField('description', product.description);
			updateField('price', product.price);
		};
		updateProduct();
	}, [product, productId]);

	useEffect(() => {
		updateProducts({
			randomId,
			productId,
			description,
			qte,
			price,
		});
	}, [description, price, qte, productId]);

	return (
		<div className="product-list-item">
			<span className="empty add-entry" onClick={handleRandomIds}>
				<AiFillPlusCircle size={18} />
			</span>
			<span className="number">#</span>
			<div className="product">
				<SelectField
					name="product_id"
					value={productId}
					onChangeHandler={handleProductIdChange}
					data={generateProductsNames()}
				/>
			</div>
			<div className="description">
				<InputField
					name="description"
					value={description}
					onChangeHandler={handleChange}
				/>
			</div>
			<div className="qte">
				<InputField
					type="number"
					name="qte"
					value={qte}
					onChangeHandler={handleChange}
				/>
			</div>
			<div className="price">
				<InputField name="price" value={price} onChangeHandler={handleChange} />
			</div>
			<div className="total-amount">
				<InputField name="total_amount" value={qte * price} />
			</div>
			<span
				className="empty delete-btn"
				onClick={() => removeRandomIds(randomId)}
			>
				<RiDeleteBin5Line size={20} />
			</span>
		</div>
	);
}
