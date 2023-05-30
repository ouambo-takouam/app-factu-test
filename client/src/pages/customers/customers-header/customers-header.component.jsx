import useHide from '../../../hooks/hide.hook';
import { BsCaretDownFill } from 'react-icons/bs';
import './customers-header.styles.scss';

export default function CustomersHeader({ toogleClientModal }) {
	const { hide: hideImportBtn, handleHide: toogleImportBtn } = useHide(true);

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
				</div>
			</div>
		</div>
	);
}
