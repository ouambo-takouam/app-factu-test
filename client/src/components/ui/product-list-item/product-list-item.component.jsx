import { useState, useEffect } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {
	selectDocuments,
	selectOneDocument,
} from '../../../redux/data/data.selectors';
import SelectField from '../../form/select-field/select-field.component';
import InputField from '../../form/input-field/input-field.component';

export default function ProductListItem({
	randomId,
	updateProducts,
	handleRandomIds,
	removeRandomIds,
}) {
	const products = useSelector(selectDocuments('products'));

	const [productId, setProductId] = useState(products[0]._id);

	const product = useSelector(selectOneDocument('products', productId));

	const [inputFields, setInputFields] = useState(product);
	const { description, price } = inputFields;

	const [qte, setQte] = useState(1);

	const [totalAmount, setTotalAmount] = useState(price);

	useEffect(() => {
		setTotalAmount(price * qte);
	}, [price, qte]);

	const handleQte = (event) => {
		setQte(event.target.value);
	};

	const handleProductIdChange = (event) => {
		setProductId(event.target.value);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setInputFields({ ...inputFields, [name]: value });
	};

	const generateProductsNames = () => {
		return products.map(({ _id, name }) => ({
			text: name,
			value: _id,
		}));
	};

	// modify le produit a la selection
	useEffect(() => {
		setInputFields(product);
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
			<span className="empty add-entry">
				<AiFillPlusCircle size={18} onClick={handleRandomIds} />
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
					onChangeHandler={handleInputChange}
				/>
			</div>
			<div className="qte">
				<InputField
					type="number"
					name="qte"
					value={qte}
					onChangeHandler={handleQte}
				/>
			</div>
			<div className="price">
				<InputField
					name="price"
					value={price}
					onChangeHandler={handleInputChange}
				/>
			</div>
			<div className="total-amount">
				<InputField name="total_amount" value={totalAmount} />
			</div>
			<span className="empty delete-btn">
				<RiDeleteBin5Line size={20} onClick={() => removeRandomIds(randomId)} />
			</span>
		</div>
	);
}
