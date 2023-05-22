import { useSelector } from 'react-redux';
import CustomerDetailsContentHeader from '../customer-details-content-header/customer-details-content-header.component';
import CustomerDetailsContentData from '../customer-details-content-data/customer-details-content-data.component';
import './customer-details-content.styles.scss';

export default function CustomerDetailsContent({ customerId }) {
	const customers = useSelector((state) => state.data.customers);
	const customer = customers.find((customer) => customer._id === customerId);

	return (
		<div className="customer-details-content">
			<CustomerDetailsContentHeader customer={customer} />
			<CustomerDetailsContentData customer={customer} />
		</div>
	);
}
