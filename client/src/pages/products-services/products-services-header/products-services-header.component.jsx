import { CustomButton } from '../../../components/form/custom-button/custom-button.component';
import './products-services-header.styles.scss';

export default function ProductsServicesHeader() {
	return (
		<div className="products-services-header">
			<div className="products-services-header-nav-line">
				<div className="nav-line-left">
					<h3>Produits et services</h3>
				</div>
				<div className="nav-line-right">
					<CustomButton $validate $rounded>
						Nouveau
					</CustomButton>
				</div>
			</div>
		</div>
	);
}
