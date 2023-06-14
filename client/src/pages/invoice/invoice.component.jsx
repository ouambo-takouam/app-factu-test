import { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineHistory } from 'react-icons/md';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BsCaretDownFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { formatDate } from '../../utils/format-date';
import { generateInvoiceNumber } from '../../utils/random';
import options from '../../data/customer-select-options.json';
import {
	selectOneCustomer,
	selectOrderedCustomers,
} from '../../redux/data/data.selectors';
import InputField from '../../components/form/input-field/input-field.component';
import SelectField from '../../components/form/select-field/select-field.component';
import TextArea from '../../components/form/text-area/text-area.component';
import { CustomButton } from '../../components/form/custom-button/custom-button.component';
import './invoice.styles.scss';

export default function Invoice({ onInvoicePageHideHanlder, clientId }) {
	const [customerId, setCustomerId] = useState(clientId);

	const customers = useSelector(selectOrderedCustomers);
	const customer = useSelector(selectOneCustomer(customerId));

	/** Definie la date du jour comme date par defaut de facturation et d'echeance */
	const currentInvoiceDate = formatDate(new Date(), '-');
	const currentDueDate = formatDate(new Date(), '-');
	customer.invoice_date = currentInvoiceDate;
	customer.due_date = currentDueDate;

	/** Invoice number */
	const invoiceNumber = generateInvoiceNumber();
	customer.invoice_number = invoiceNumber;

	const [customerFields, setcustomerFields] = useState(customer);

	const { invoice_number, email, street, condition, invoice_date, due_date } =
		customerFields;

	const getCustomersIds = () =>
		customers.map(({ _id, display_name }) => ({
			text: display_name,
			value: _id,
		}));

	const handleCustomerChange = (event) => {
		setCustomerId(event.target.value);
	};

	const handleCustomerFieldsChange = (event) => {
		const { name, value } = event.target;

		setcustomerFields({ ...customerFields, [name]: value });
	};

	useEffect(() => {
		setcustomerFields(customer);
	}, [customer, customerId]);

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
								onChangeHandler={handleCustomerFieldsChange}
								placeholder="Separer les adresses e-mail par des virgules"
								width="300px"
							/>
						</div>
						<div className="second-line">
							<TextArea
								label="Adresse de facturation"
								name="street"
								value={street}
								onChangeHandler={handleCustomerFieldsChange}
								width="200px"
								height="60px"
							/>
							<SelectField
								label="Conditions"
								name="condition"
								value={condition}
								onChangeHandler={handleCustomerFieldsChange}
								data={options.conditions}
								width="200px"
							/>
							<InputField
								type="date"
								label="Date facturation"
								name="invoice_date"
								value={invoice_date}
								onChangeHandler={handleCustomerFieldsChange}
								width="150px"
							/>
							<InputField
								type="date"
								label="Echéance"
								name="due_date"
								value={due_date}
								onChangeHandler={handleCustomerFieldsChange}
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
								onChangeHandler={handleCustomerFieldsChange}
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
						<div className="product-list-item">
							<span className="empty add-entry"></span>
							<span className="number">1</span>
							<div className="product">
								<SelectField />
							</div>
							<div className="description">
								<InputField value="Pain au chocolat" />
							</div>
							<div className="qte">
								<InputField value={1} />
							</div>
							<div className="price">
								<InputField value={50000} />
							</div>
							<div className="total-amount">
								<InputField value={50000} />
							</div>
							<span className="empty delete-btn">
								<RiDeleteBin5Line size={20} />
							</span>
						</div>
					</div>
				</div>
				<div className="invoice-details">
					<div className="other-invoice-details">
						<div className="additional-buttons">
							<CustomButton
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
							</CustomButton>
						</div>
						<TextArea
							label="Message sur la facture"
							placeholder="Ce message s'affichera sur la facture"
							width="350px"
							height="90px"
						/>
						<TextArea
							label="Message sur le relevé de situation"
							placeholder="Lorsque vous envoyez des relevés de situation à vos clients, ce message s’affichera comme description de la facture."
							width="350px"
							height="70px"
						/>
					</div>
					<div className="invoice-details-resume">
						<div className="titles">
							<p>Sous-total</p>
							<div>
								<SelectField />
								<InputField width="70px" />
							</div>
							<p>Total TTC</p>
							<p>Solde a payer</p>
						</div>
						<div className="values">
							<p>6000</p>
							<p>0</p>
							<p>6000</p>
							<p>6000</p>
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
