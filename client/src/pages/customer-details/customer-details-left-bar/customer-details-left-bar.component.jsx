import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { RxPlus } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFilterList from '../../../hooks/filter-list.hook';
import InputField from '../../../components/form/input-field/input-field.component';
import './customer-details-left-bar.styles.scss';

export default function CustomerDetailsLeftBar({ setCustomerId }) {
	const navigate = useNavigate();
	const customers = useSelector((state) => state.data.customers);

	const [filteredList, handleChange] = useFilterList(customers, 'display_name');

	return (
		<div className="customer-details-left-bar">
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
					<InputField
						type="search"
						onChangeHandler={handleChange}
						fullwidth
						placeholder="Filtrer par nom"
					/>
				</div>
			</div>
			<div className="left-bar-customers-list">
				{filteredList
					.slice(0)
					.reverse()
					.map((customer) => (
						<div
							className="customer-preview"
							key={customer._id}
							onClick={() => setCustomerId(customer._id)}
						>
							<div className="display-name">{customer.display_name}</div>
							<div className="balance">XAF0.00</div>
						</div>
					))}
			</div>
		</div>
	);
}
