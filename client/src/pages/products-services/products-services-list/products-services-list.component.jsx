// import { BsArrow90DegDown } from 'react-icons/bs';
// import { BiPrinter, BiExport } from 'react-icons/bi';
// import { ExportToExcel } from '../../../utils/export-to-excel.utils';
// import { CustomButton } from '../../../components/form/custom-button/custom-button.component';
// import InputField from '../../../components/form/input-field/input-field.component';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../redux/data/data.selectors';
import PageListNav from '../../../components/ui/page-list-nav/page-list-nav.component';
import PageListData from '../../../components/ui/page-list-data/page-list-data.component';
import './products-services-list.styles.scss';

export default function ProductsServicesList() {
	const products = useSelector(selectProducts);

	return (
		<div className="products-services-list-wrapper">
			<div className="products-services-list-header">
				{/*<div className="header-options">
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
	</div>*/}
				<PageListNav
					headers={[
						'nom',
						'reference',
						'type',
						'description vente',
						'prix de vente',
						'cout',
						'quantite en stock',
						'point commande',
						'action',
					]}
				/>
			</div>
			<PageListData dataType="product" filteredList={products} />
		</div>
	);
}
