import { GrClose } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineHistory } from 'react-icons/md';
import { useSelector } from 'react-redux';
import useManageInput from '../../hooks/manage-input.hook';
import { selectOrderedCustomers } from '../../redux/data/data.selectors';
import InputField from '../../components/form/input-field/input-field.component';
import SelectField from '../../components/form/select-field/select-field.component';
import './invoice.styles.scss';

export default function Invoice({ onInvoicePageHideHanlder }) {
	const customers = useSelector(selectOrderedCustomers);
	const [fields, handleChange] = useManageInput();
	const {} = fields;

	return (
		<div className="invoice-wrapper">
			<div className="invoice-header">
				<div className="invoice-header-nav">
					<div className="left-nav">
						<span className="history-btn">
							<MdOutlineHistory size={32} />
						</span>
						<span className="invoice-title">Facture nº CDH-2023A001192 </span>
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
								onChangeHandler={handleChange}
								data={customers.map((customer) => ({
									text: customer.display_name,
									value: customer._id,
								}))}
							/>
							<InputField label="Adresse e-mail du client" />
						</div>
						<div className="second-line">
							<InputField label="Adresse de facturation" />
							<SelectField label="Conditions" width="200px" />
							<InputField label="Date facturation" />
							<InputField label="Echeance" />
						</div>
					</div>
					<div className="invoice-amount"></div>
				</div>
			</div>
			<div className="invoice-body"></div>
			<div className="invoice-footer"></div>
		</div>
	);
}
