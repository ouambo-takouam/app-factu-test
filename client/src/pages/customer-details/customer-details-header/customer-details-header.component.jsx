import useHide from '../../../hooks/hide.hook';
import { FaRegEnvelope } from 'react-icons/fa';
import { CustomButton } from '../../../components/form/custom-button/custom-button.component';
import './customer-details-header.styles.scss';

export default function CustomerDetailsHeader() {
	const { hide, handleHide } = useHide();

	return (
		<div className="customer-details-header-wrapper">
			<div className="first-line">
				<div className="left">
					<h2 className="page-title">Vangah jean Tcheraud</h2>
					<span className="email-icon">
						<FaRegEnvelope />
					</span>
				</div>
				<div className="right">
					<CustomButton $rounded $hshadow="inset 0 0 0 1px #8D9096">
						Modifier
					</CustomButton>
					<CustomButton $rounded $validate>
						Nouvelle operation
					</CustomButton>
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
