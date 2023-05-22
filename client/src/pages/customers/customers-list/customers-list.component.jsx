import { useSelector } from 'react-redux';
import { BsArrow90DegDown } from 'react-icons/bs';
import useFilterList from '../../../hooks/filter-list.hook';
import { CustomButton } from '../../../components/form/custom-button/custom-button.component';
import InputField from '../../../components/form/input-field/input-field.component';
import CustomerRow from '../customer-row/customer-row.component';
import './customers-list.styles.scss';

export default function CustomersList() {
	const customers = useSelector((state) => state.data.customers);

	const [filteredList, handleChange] = useFilterList(customers, 'display_name');

	return (
		<div className="customers-list-wrapper">
			<div className="customers-list-header">
				<div className="header-options">
					<div className="options-left">
						<BsArrow90DegDown />
						<CustomButton
							$rounded
							$padding="8px 25px"
							$bcolor="#000"
							$hcolor="rgba(107,108,114,.25)"
						>
							Actions groupees
						</CustomButton>
						<InputField
							type="search"
							onChangeHandler={handleChange}
							placeholder="Rechercher"
						/>
					</div>
					<div className="options-right"></div>
				</div>
				<div className="header-titles">
					<div className="field-check">
						<input type="checkbox" />
					</div>
					<span>CLIENT / ENTREPRISE</span>
					<span>ADRESSE</span>
					<span>TÉLÉPHONE</span>
					<span>E-MAIL</span>
					<span>SOLDE COURANT</span>
					<span>ACTION</span>
				</div>
			</div>
			<div className="customers-list-data">
				{filteredList
					.slice(0)
					.reverse()
					.map((customer, idx) => (
						<CustomerRow key={idx} customer={customer} />
					))}
			</div>
		</div>
	);
}
