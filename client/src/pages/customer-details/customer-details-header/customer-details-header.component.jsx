import useHide from '../../../hooks/hide.hook';
import { BsCaretDownFill } from 'react-icons/bs';
import './customer-details-header.styles.scss';

export default function CustomerDetailsHeader() {
	const { hide, handleHide } = useHide();

	return (
		<div className="customer-details-header-wrapper">
			<div className="first-line">
				<div className="left">
					<h2 className="page-title">Vangah jean Tcheraud</h2>
				</div>
				<div className="new-customer-btn-wrapper">
					<button type="button" className="left-btn">
						Nouveau client
					</button>
					<button
						type="button"
						className="right-btn"
						// onClick={() => toogleImportBtn((prev) => !prev)}
					>
						<BsCaretDownFill size={12} />
					</button>

					{/*!hideImportBtn && (
						<button className="import-btn">Importer des clients</button>
					)*/}
				</div>
			</div>
		</div>
	);
}
