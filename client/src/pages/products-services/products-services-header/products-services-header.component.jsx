import { CustomButton } from '../../../components/form/custom-button/custom-button.component';
import './products-services-header.styles.scss';

export default function ProductsServicesHeader({ onHideHandler }) {
	return (
		<div className="products-services-header">
			<div className="products-services-header-nav-line">
				<div className="nav-line-left">
					<h3>Produits et services</h3>
				</div>
				<div className="nav-line-right">
					<CustomButton $validate $rounded onClick={onHideHandler}>
						Nouveau
					</CustomButton>
				</div>
			</div>
		</div>
	);
}
