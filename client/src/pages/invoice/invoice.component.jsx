import { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineHistory } from 'react-icons/md';
import { BsCaretDownFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { formatDate } from '../../utils/format-date';
import { generateInvoiceNumber } from '../../utils/random';
import options from '../../data/customer-select-options.json';
import {
	selectOneDocument,
	selectDocuments,
} from '../../redux/data/data.selectors';
import ProductListItem from '../../components/ui/product-list-item/product-list-item.component';
import InputField from '../../components/form/input-field/input-field.component';
import SelectField from '../../components/form/select-field/select-field.component';
import TextArea from '../../components/form/text-area/text-area.component';
import { CustomButton } from '../../components/form/custom-button/custom-button.component';
import './invoice.styles.scss';

export default function Invoice({ onInvoicePageHideHanlder, clientId }) {
	// -- Debut -- : Logic pour la manipulation les donnees client (header)
	const [customerId, setCustomerId] = useState(clientId);

	const customers = useSelector(selectDocuments('customers'));
	const customer = useSelector(selectOneDocument('customers', customerId));

	/** Invoice date & Due date */
	const currentInvoiceDate = formatDate(new Date(), '-');
	const currentDueDate = formatDate(new Date(), '-');
	customer.invoice_date = currentInvoiceDate;
	customer.due_date = currentDueDate;

	/** Invoice number */
	const [invoiceNumber] = useState(generateInvoiceNumber());
	customer.invoice_number = invoiceNumber;

	const [invoiceFields, setInvoiceFields] = useState(customer);

	const {
		invoice_number,
		email,
		street,
		condition,
		invoice_date,
		due_date,
		delivery_value,
		delivery_type,
	} = invoiceFields;

	const getCustomersIds = () =>
		customers.map(({ _id, display_name }) => ({
			text: display_name,
			value: _id,
		}));

	const handleCustomerChange = (event) => {
		setCustomerId(event.target.value);
	};

	const handleInvoiceFieldsChange = (event) => {
		const { name, value } = event.target;

		setInvoiceFields({ ...invoiceFields, [name]: value });
	};

	useEffect(() => {
		setInvoiceFields(customer);
	}, [customer, customerId]);

	// -- Fin --

	// -- debut -- Logique gestion produits facture !
	const [products, setProducts] = useState([]);
	const [randomIds, setRandomIds] = useState([Math.random()]);
	const [sousTotal, setSousTotal] = useState(0);
	const [delivery, setDelivery] = useState(0);

	useEffect(() => {
		setSousTotal(
			products.reduce((acc, curr) => acc + curr.qte * curr.price, 0)
		);
	}, [products]);

	useEffect(() => {
		const calculateDelivery = () => {
			return !delivery_type && delivery_value
				? (sousTotal * delivery_value) / 100
				: delivery_type === 'percentage'
				? (sousTotal * delivery_value) / 100
				: delivery_type === 'value'
				? delivery_value
				: 0;
		};
		setDelivery(calculateDelivery());
	}, [delivery_type, delivery_value, sousTotal]);

	const handleRandomIds = () => {
		setRandomIds((prev) => [...prev, Math.random()]);
	};

	const removeRandomIds = (id) => {
		setRandomIds((prev) => prev.filter((randomId) => randomId !== id));
		setProducts((state) => state.filter((product) => product.randomId !== id));
	};

	const updateProducts = (productToUpdate) => {
		setProducts((state) => {
			if (
				state.find((product) => product.randomId === productToUpdate.randomId)
			) {
				return state.map((product) =>
					product.randomId === productToUpdate.randomId
						? productToUpdate
						: product
				);
			} else {
				return [...state, productToUpdate];
			}
		});
	};

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
							<SelectField
								label="Client"
								width="200px"
								name="customer_id"
								value={customerId}
								onChangeHandler={handleCustomerChange}
								data={getCustomersIds()}
							/>
							<InputField
								label="Adresse e-mail du client"
								name="email"
								value={email}
								onChangeHandler={handleInvoiceFieldsChange}
								placeholder="Separer les adresses e-mail par des virgules"
								width="300px"
							/>
						</div>
						<div className="second-line">
							<TextArea
								label="Adresse de facturation"
								name="street"
								value={street}
								onChangeHandler={handleInvoiceFieldsChange}
								width="200px"
								height="60px"
							/>
							<SelectField
								label="Conditions"
								name="condition"
								value={condition}
								onChangeHandler={handleInvoiceFieldsChange}
								data={options.conditions}
								width="200px"
							/>
							<InputField
								type="date"
								label="Date facturation"
								name="invoice_date"
								value={invoice_date}
								onChangeHandler={handleInvoiceFieldsChange}
								width="150px"
							/>
							<InputField
								type="date"
								label="Echéance"
								name="due_date"
								value={due_date}
								onChangeHandler={handleInvoiceFieldsChange}
								width="150px"
							/>
						</div>
					</div>
					<div className="invoice-amount">
						<p className="invoice-amount-title">SOLDE À PAYER</p>
						<p className="invoice-amount-value">0,00 XAF</p>
						<div className="invoice-number">
							<InputField
								label="N° de la facture"
								name="invoice_number"
								value={invoice_number}
								onChangeHandler={handleInvoiceFieldsChange}
							/>
						</div>
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
						{randomIds &&
							randomIds.map((randomId) => (
								<ProductListItem
									key={randomId}
									randomId={randomId}
									handleRandomIds={handleRandomIds}
									removeRandomIds={removeRandomIds}
									updateProducts={updateProducts}
								/>
							))}
					</div>
				</div>
				<div className="invoice-details">
					<div className="other-invoice-details">
						<div className="additional-buttons">
							{/*<CustomButton
								$fsize="13px"
								$hcolor="rgba(107,108,114,.25)"
								$padding="5px 14px"
								$radius="4px"
							>
								Ajouter des lignes
							</CustomButton>
							<CustomButton
								$fsize="13px"
								$hcolor="rgba(107,108,114,.25)"
								$padding="5px 14px"
								$radius="4px"
							>
								Supprimer toutes les lignes
							</CustomButton>*/}
						</div>
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
									onChangeHandler={handleInvoiceFieldsChange}
									data={[
										{ text: 'Remise (%)', value: 'percentage' },
										{ text: 'Remise (valeur)', value: 'value' },
									]}
								/>
								<InputField
									name="delivery_value"
									value={delivery_value}
									onChangeHandler={handleInvoiceFieldsChange}
									width="70px"
								/>
							</div>
							<p>Total TTC</p>
							<p>Solde a payer</p>
						</div>
						<div className="values">
							<p>{sousTotal}</p>
							<p>{delivery}</p>
							<p>{sousTotal - delivery}</p>
							<p>{sousTotal - delivery}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="invoice-footer">
				<CustomButton
					$bgcolor="transparent"
					$color="#fff"
					$hcolor="#2A2B2D"
					$rounded
					onClick={onInvoicePageHideHanlder}
				>
					Annuler
				</CustomButton>
				<div className="invoice-footer-save">
					<CustomButton
						$bgcolor="transparent"
						$color="#fff"
						$hcolor="#2A2B2D"
						$rounded
					>
						Enregistrer
					</CustomButton>
					<div className="invoice-footer-create">
						<CustomButton
							$validate
							$height="30px"
							$padding="8px 16px"
							$mtop="0"
							$mbottom="0"
							$radius="36px 0 0 36px"
						>
							Enregistrer et creer
						</CustomButton>
						<CustomButton
							$validate
							$height="30px"
							$padding="8px"
							$mtop="0"
							$mbottom="0"
							$radius="0 36px 36px 0"
							$mleft="1px"
						>
							<BsCaretDownFill size={12} />
						</CustomButton>
					</div>
				</div>
			</div>
		</div>
	);
}
