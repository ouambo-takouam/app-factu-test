import { useSelector } from 'react-redux';
import {
	selectOrderedCustomers,
	selectCustomersToExport,
} from '../../../redux/data/data.selectors';
import { BsArrow90DegDown } from 'react-icons/bs';
import { BiPrinter, BiExport } from 'react-icons/bi';
import useFilterList from '../../../hooks/filter-list.hook';
import { ExportToExcel } from '../../../utils/export-to-excel.utils';
import { CustomButton } from '../../../components/form/custom-button/custom-button.component';
import InputField from '../../../components/form/input-field/input-field.component';
import PageListNav from '../../../components/ui/page-list-nav/page-list-nav.component';
import PageListData from '../../../components/ui/page-list-data/page-list-data.component';
import './customers-list.styles.scss';

export default function CustomersList() {
	const customers = useSelector(selectOrderedCustomers);
	const customersToExport = useSelector(selectCustomersToExport);

	const [filteredList, handleChange] = useFilterList(customers, 'display_name');

	// Filename for the exported file
	const fileNameToExport = 'Liste de clients';

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
					<div className="options-right">
						<BiPrinter size={25} />
						<BiExport
							size={25}
							onClick={() => ExportToExcel(customersToExport, fileNameToExport)}
						/>
					</div>
				</div>
				<PageListNav
					headers={[
						'client / entreprise',
						'adressse',
						'telephone',
						'e-mail',
						'solde courant',
						'action',
					]}
				/>
			</div>
			<PageListData filteredList={filteredList} />
		</div>
	);
}
