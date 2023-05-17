import useHide from '../../../hooks/hide.hook';
import { BsCaretDownFill } from 'react-icons/bs';
import OptionsBtnWrapper from '../../../components/ui/options-btn-wrapper/options-btn-wrapper.component';
import './customers-header.styles.scss';

export default function CustomersHeader({ toogleClientModal }) {
	const { hide: hideImportBtn, handleHide: toogleImportBtn } = useHide();

	return (
		<div className="customers-header-wrapper">
			<div className="stage-header">
				<h2 className="page-title">Clients</h2>
				<div className="new-customer-btn-wrapper">
					<button
						onClick={toogleClientModal}
						type="button"
						className="left-btn"
					>
						Nouveau client
					</button>
					<button
						type="button"
						className="right-btn"
						onClick={() => toogleImportBtn((prev) => !prev)}
					>
						<BsCaretDownFill size={12} />
					</button>

					{!hideImportBtn && (
						<button className="import-btn">Importer des clients</button>
					)}
				</div>
			</div>
			<div className="stage-content">
				<div className="table-row">
					<div className="table-cell unbilled-tab">
						<div className="header"></div>
					</div>
					<div className="table-cell unpaid-tab"></div>
					<div className="table-cell paid-tab"></div>
					<OptionsBtnWrapper
						items={[
							{ path: 'customers', title: 'Customers' },
							{ path: 'invoices', title: 'Invoices' },
						]}
					/>
				</div>
			</div>
		</div>
	);
}
