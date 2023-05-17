import { useSelector } from 'react-redux';
import CustomerRow from '../customer-row/customer-row.component';

export default function CustomersList() {
	const customers = useSelector((state) => state.data.customers);

	return (
		<div className="customers-list-wrapper">
			<div className="customers-list-header"></div>
			<div className="customers-list-data">
				{customers
					.slice(0)
					.reverse()
					.map((customer, idx) => (
						<CustomerRow key={idx} customer={customer} />
					))}
			</div>
		</div>
	);
}
