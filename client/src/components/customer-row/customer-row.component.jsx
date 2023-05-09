import { FiMail } from 'react-icons/fi';
import './customer-row.styles.scss';

export default function CustomerRow() {
	return (
		<div className="customer-row">
			<div className="field-check">
				<input type="checkbox" />
			</div>
			<div className="field-customer-info">
				<div className="name-info">
					<span className="display-name">Super client Gerome Albert</span>
					<span className="email-icon">
						<FiMail size={18} />
					</span>
				</div>
				<div className="display-company">VIDEODECOMPTA</div>
			</div>
			<div className="field-adress">
				<div>Bonaberie, ancienne route</div>
				<span>Douala</span>
			</div>
			<div className="field-phone">696241244</div>
			<div className="field-email">patrickouambo@gmail.com</div>
			<div className="field-solde-sortant">XAF0.00</div>
			<div className="field-action">Action</div>
		</div>
	);
}
