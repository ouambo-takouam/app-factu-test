import ProductsServicesHeader from './products-services-header/products-services-header.component';
import ChoicesProposalModal from './products-services-modals/choices-proposal-modal/choices-proposal-modal.component';

export default function ProductsServices() {
	return (
		<div className="products-services">
			<ProductsServicesHeader />
			<ChoicesProposalModal />
		</div>
	);
}
