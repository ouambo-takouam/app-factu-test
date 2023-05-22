import CustomerDetailsContentHeader from '../customer-details-content-header/customer-details-content-header.component';
import './customer-details-content.styles.scss';

export default function CustomerDetailsContent({ customerId }) {
	return (
		<div className="customer-details-content">
			<CustomerDetailsContentHeader customerId={customerId} />
		</div>
	);
}
