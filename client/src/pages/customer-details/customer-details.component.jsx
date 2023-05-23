import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomerDetailsLeftBar from './customer-details-left-bar/customer-details-left-bar.component';
import CustomerDetailsContent from './customer-details-content/customer-details-content.component';
import './customer-details.styles.scss';

export default function CustomerDetails() {
	const [customerId, setCustomerId] = useState(useParams().clientId);

	return (
		<div className="customers-details">
			<CustomerDetailsLeftBar
				customerId={customerId}
				setCustomerId={setCustomerId}
			/>
			<CustomerDetailsContent customerId={customerId} />
		</div>
	);
}
