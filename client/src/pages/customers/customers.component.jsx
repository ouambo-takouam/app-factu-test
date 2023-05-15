import { Fragment } from 'react';
import useHide from '../../hooks/hide-item.hook';
import { BsCaretDownFill } from 'react-icons/bs';
import CustomerRow from '../../components/customer-row/customer-row.component';
import CustomerModal from '../../components/customer-modal/customer-modal.component';
import './customers.styles.scss';

export default function Customers() {
	// custom hooks to choose whether to display or not a component on the dom
	const { hide: hideImportBtn, handleHide: toogleImportBtn } = useHide();
	const { hide: hideClientModal, handleHide: toogleClientModal } = useHide();

	return (
		<Fragment>
			<div className="customers-wrapper">
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
				<div className="customers-list-wrapper">
					<div className="customers-list-header"></div>
					<div className="customers-list-data">
						<CustomerRow />
						{/** Here are listed other customers */}
					</div>
				</div>
			</div>

			{!hideClientModal && (
				<CustomerModal toogleClientModal={toogleClientModal} />
			)}
		</Fragment>
	);
}
