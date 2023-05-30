import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';
import useHide from '../../../hooks/hide.hook';
import OptionsBtnWrapper from '../../../components/ui/options-btn-wrapper/options-btn-wrapper.component';
import './customer-row.styles.scss';

export default function CustomerRow({ customer }) {
	const { hide, handleHide } = useHide(true);
	const { _id, company, display_name, email, phone1, street, town } = customer;

	return (
		<div className="customer-row">
			<div className="field-check">
				<input type="checkbox" />
			</div>
			<div className="field-customer-info">
				<div className="name-info">
					<Link to={_id} className="display-name">
						{display_name}
					</Link>
					<span className="email-icon">
						<FiMail size={18} />
					</span>
				</div>
				<div className="display-company">{company}</div>
			</div>
			<div className="field-adress">
				<div>{street}</div>
				<span>{town}</span>
			</div>
			<div className="field-phone">{phone1}</div>
			<div className="field-email">{email}</div>
			<div className="field-solde-courant">XAF0.00</div>
			<div className="field-action">
				<Link className="create-invoice-link">Creer une facture</Link>
				<span className="other-actions">
					<MdArrowDropDown size={24} onClick={handleHide} />
				</span>
				{!hide && (
					<div className="field-action-options">
						<OptionsBtnWrapper
							options={[
								{ path: '/', title: 'Creer un recu de vente' },
								{ path: '/', title: 'Creer un devis' },
								{ path: '/', title: 'Rendre inactif' },
								{ path: '/', title: 'Creer un releve de situation' },
							]}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
