import { FiMail } from 'react-icons/fi';
import './customer-row.styles.scss';

export default function CustomerRow({ customer }) {
	const { first_name, last_name, company, address, town, phone1, email } =
		customer;

	return (
		<div className="customer-row">
			<div className="field-check">
				<input type="checkbox" />
			</div>
			<div className="field-customer-info">
				<div className="name-info">
					<span className="display-name">
						{first_name} {last_name}
					</span>
					<span className="email-icon">
						<FiMail size={18} />
					</span>
				</div>
				<div className="display-company">{company}</div>
			</div>
			<div className="field-adress">
				<div>{address}</div>
				<span>{town}</span>
			</div>
			<div className="field-phone">{phone1}</div>
			<div className="field-email">{email}</div>
			<div className="field-solde-sortant">XAF0.00</div>
			<div className="field-action">Action</div>
		</div>
	);
}
