import { GrClose } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineHistory } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectOneDocument } from '../../redux/data/data.selectors';
import ProductListItemDisplay from '../../components/ui/product-list-item-display/product-list-item-display.component';
import InputField from '../../components/form/input-field/input-field.component';
import SelectField from '../../components/form/select-field/select-field.component';
import TextArea from '../../components/form/text-area/text-area.component';
import './invoice-display.styles.scss';

export default function InvoiceDisplay({ onInvoicePageHideHanlder, invoice }) {
	const {
		customer_id,
		invoice_number,
		email,
		address,
		invoice_date,
		due_date,
		delivery_type,
		delivery_value,
		products,
	} = invoice;

	const customer = useSelector(selectOneDocument('customers', customer_id));

	const handleChange = () => {};

	const sousTotal = () =>
		products.reduce((acc, product) => product.qte * product.price + acc, 0);

	const delivery = () =>
		delivery_type === 'percentage'
			? (sousTotal() * delivery_value) / 100
			: sousTotal() - delivery_value;

	return (
		<div className="invoice-wrapper">
			<div className="invoice-header">
				<div className="invoice-header-nav">
					<div className="left-nav">
						<span className="history-btn">
							<MdOutlineHistory size={32} />
						</span>
						<span className="invoice-title">Facture nº {invoice_number} </span>
					</div>
					<div className="right-bar">
						<span className="settings-btn">
							<FiSettings size={28} />
						</span>
						<span className="close-btn" onClick={onInvoicePageHideHanlder}>
							<GrClose size={28} />
						</span>
					</div>
				</div>
				<div className="invoice-header-details">
					<div className="customer-details">
						<div className="first-line">
							<InputField
								label="Client"
								width="200px"
								name="customer_id"
								value={customer.display_name}
								onChangeHandler={handleChange}
							/>
							<InputField
								label="Adresse e-mail du client"
								name="email"
								value={email}
								onChangeHandler={handleChange}
								width="300px"
							/>
						</div>
						<div className="second-line">
							<TextArea
								label="Adresse de facturation"
								name="street"
								value={address}
								onChangeHandler={handleChange}
								width="200px"
								height="60px"
							/>
							<InputField
								type="date"
								label="Date facturation"
								name="invoice_date"
								value={invoice_date}
								onChangeHandler={handleChange}
								width="150px"
							/>
							<InputField
								type="date"
								label="Echéance"
								name="due_date"
								value={due_date}
								onChangeHandler={handleChange}
								width="150px"
							/>
						</div>
					</div>
					<div className="invoice-amount">
						<p className="invoice-amount-title">ÉTAT</p>
						<p className="invoice-amount-value">PAYÉ</p>
					</div>
				</div>
			</div>
			<div className="invoice-body">
				<div className="products-list">
					<div className="products-list-header">
						<span className="empty add-entry"></span>
						<span className="number">#</span>
						<span className="product">produit/service</span>
						<span className="description">description</span>
						<span className="qte">qte</span>
						<span className="price">prix unitaire</span>
						<span className="total-amount">montant(xaf)</span>
						<span className="empty"></span>
					</div>
					<div className="products-list-content">
						{products.map((product) => (
							<ProductListItemDisplay key={product._id} product={product} />
						))}
					</div>
				</div>
				<div className="invoice-details">
					<div className="other-invoice-details">
						<div className="additional-buttons"></div>
						<TextArea
							label="Message sur la facture"
							placeholder="Ce message s'affichera sur la facture"
							width="350px"
							height="90px"
						/>
					</div>
					<div className="invoice-details-resume">
						<div className="titles">
							<p>Sous-total</p>
							<div>
								<SelectField
									name="delivery_type"
									value={delivery_type}
									onChangeHandler={handleChange}
									data={[
										{ text: 'Remise (%)', value: 'percentage' },
										{ text: 'Remise (valeur)', value: 'value' },
									]}
								/>
								<InputField
									name="delivery_value"
									value={delivery_value}
									onChangeHandler={handleChange}
									width="70px"
								/>
							</div>
							<p>Total TTC</p>
							<p>Solde a payer</p>
						</div>
						<div className="values">
							<p>{sousTotal()}</p>
							<p>{delivery()}</p>
							<p>{sousTotal() - delivery()}</p>
							<p>{sousTotal() - delivery()}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
