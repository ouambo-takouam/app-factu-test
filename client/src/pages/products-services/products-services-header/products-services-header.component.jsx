import { BsCaretDownFill } from 'react-icons/bs';
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
					<CustomButton
						$validate
						$height="36px"
						$padding="12px 30px"
						$radius="36px 0 0 36px"
						onClick={onHideHandler}
					>
						Nouveau
					</CustomButton>
					<CustomButton
						$validate
						$height="36px"
						$padding="13px"
						$radius="0 36px 36px 0"
						$mleft="1px"
						// onClick={() => toogleImportBtn((prev) => !prev)}
					>
						<BsCaretDownFill size={12} />
					</CustomButton>
				</div>
			</div>
		</div>
	);
}
