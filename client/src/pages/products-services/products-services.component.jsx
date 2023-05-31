import useHide from '../../hooks/hide.hook';
import ProductsServicesHeader from './products-services-header/products-services-header.component';
import ProductsServicesList from './products-services-list/products-services-list.component';
import ChoicesProposalModal from './products-services-modals/choices-proposal-modal/choices-proposal-modal.component';

export default function ProductsServices() {
	const { hide, handleHide } = useHide(true);

	return (
		<div className="products-services">
			<ProductsServicesHeader onHideHandler={handleHide} />
			<ProductsServicesList />

			{!hide && <ChoicesProposalModal onHideHandler={handleHide} />}
		</div>
	);
}
