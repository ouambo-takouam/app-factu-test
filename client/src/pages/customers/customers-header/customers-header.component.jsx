import useHide from '../../../hooks/hide.hook';
import { BsCaretDownFill } from 'react-icons/bs';
import { CustomButton } from '../../../components/form/custom-button/custom-button.component';
import './customers-header.styles.scss';

export default function CustomersHeader({ toogleClientModal }) {
	const { hide: hideImportBtn, handleHide: toogleImportBtn } = useHide(true);

	return (
		<div className="customers-header-wrapper">
			<div className="stage-header">
				<h2 className="page-title">Clients</h2>
				<div className="new-customer-btn-wrapper">
					<CustomButton
						$validate
						$height="36px"
						$padding="12px 22px"
						$radius="36px 0 0 36px"
						onClick={toogleClientModal}
					>
						Nouveau client
					</CustomButton>
					<CustomButton
						$validate
						$height="36px"
						$padding="13px"
						$radius="0 36px 36px 0"
						$mleft="1px"
						onClick={() => toogleImportBtn((prev) => !prev)}
					>
						<BsCaretDownFill size={12} />
					</CustomButton>

					{!hideImportBtn && (
						<CustomButton
							$position="absolute"
							$top="45px"
							$width="100%"
							$color="#393a3d"
							$bcolor="#8e8e8e"
							className="import-btn"
						>
							Importer des clients
						</CustomButton>
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
