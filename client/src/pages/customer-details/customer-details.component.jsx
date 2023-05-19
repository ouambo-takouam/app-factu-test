import { IoIosArrowBack } from 'react-icons/io';
import { RxPlus } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import InputField from '../../components/form/input-field/input-field.component';
import CustomerDetailsContent from './customer-details-content/customer-details-content.component';
import './customer-details.styles.scss';

export default function CustomerDetails() {
	const navigate = useNavigate();
	const customers = useSelector((state) => state.data.customers);

	return (
		<div className="customers-details">
			<div className="left-bar-wrapper">
				<div className="left-bar-header">
					<div className="row">
						<div
							className="back-to-clients"
							onClick={() => navigate('/app/clients')}
						>
							<span className="arrow">
								<IoIosArrowBack size={20} />
							</span>
							<Link to="/app/clients">Clients</Link>
						</div>
						<div className="options">
							<RxPlus size={17} />
							<RxHamburgerMenu size={17} />
						</div>
					</div>
					<div className="filter">
						<InputField fullwidth placeholder="Filtrer par nom" />
					</div>
				</div>
				<div className="left-bar-content">
					{customers.map((customer) => (
						<div className="customer-preview" key={customer._id}>
							<div className="display-name">{customer.display_name}</div>
							<div className="balance">XAF0.00</div>
						</div>
					))}
				</div>
			</div>
			<CustomerDetailsContent />
		</div>
	);
}
