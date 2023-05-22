import useHide from '../../../hooks/hide.hook';
import { FaRegEnvelope } from 'react-icons/fa';
import OptionsBtnWrapper from '../../../components/ui/options-btn-wrapper/options-btn-wrapper.component';
import { CustomButton } from '../../../components/form/custom-button/custom-button.component';
import './customer-details-content-header.styles.scss';

export default function CustomerDetailsContentHeader({ customer }) {
	const { hide, handleHide } = useHide();

	return (
		<div className="customer-details-header-wrapper">
			<div className="first-line">
				<div className="left">
					<h2 className="page-title">{customer.display_name}</h2>
					<span className="email-icon">
						<FaRegEnvelope />
					</span>
				</div>
				<div className="right">
					<CustomButton $rounded $hshadow="inset 0 0 0 1px #8D9096">
						Modifier
					</CustomButton>
					<CustomButton $rounded $validate onClick={handleHide}>
						Nouvelle operation
					</CustomButton>
					{!hide && (
						<div className="field-action-options">
							<OptionsBtnWrapper
								options={[
									{ path: '/', title: 'Facture' },
									{ path: '/', title: 'Paiement' },
									{ path: '/', title: 'Devis' },
									{ path: '/', title: 'Recu de vente' },
									{ path: '/', title: 'Avoir' },
									{ path: '/', title: 'Releve de situation' },
								]}
							/>
						</div>
					)}
				</div>
			</div>

			<div className="second-line">
				<div className="top">
					<div className="balance">XAF0.00</div>
					<div className="subtitle">EN COURS</div>
				</div>
				<div className="bottom">
					<div className="balance">XAF0.00</div>
					<div className="subtitle">EN RETARD</div>
				</div>
			</div>
		</div>
	);
}
