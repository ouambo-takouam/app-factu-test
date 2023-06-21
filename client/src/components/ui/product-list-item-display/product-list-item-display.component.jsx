import { useSelector } from 'react-redux';
import { selectOneDocument } from '../../../redux/data/data.selectors';
import InputField from '../../form/input-field/input-field.component';

export default function ProductListItemDisplay({ product }) {
	const { productId } = product;

	const selectedProduct = useSelector(selectOneDocument('products', productId));

	const { description, qte, price } = product;

	const handleChange = () => {};

	return (
		<div className="product-list-item">
			<span className="empty add-entry"></span>
			<span className="number">#</span>
			<div className="product">
				<InputField
					name="product_id"
					value={selectedProduct.name}
					onChangeHandler={handleChange}
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
				<InputField
					name="total_amount"
					value={qte * price}
					onChangeHandler={handleChange}
				/>
			</div>
			<span className="empty"></span>
		</div>
	);
}
