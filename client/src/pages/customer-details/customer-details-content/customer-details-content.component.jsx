import { useSelector } from 'react-redux';
import { selectOneDocument } from '../../../redux/data/data.selectors';
import useHide from '../../../hooks/hide.hook';
import CustomerModal from '../../customers/customer-modal/customer-modal.component';
import CustomerDetailsContentHeader from '../customer-details-content-header/customer-details-content-header.component';
import CustomerDetailsContentData from '../customer-details-content-data/customer-details-content-data.component';
import './customer-details-content.styles.scss';

export default function CustomerDetailsContent({ customerId }) {
	const customer = useSelector(selectOneDocument('customers', customerId));

	const { hide, handleHide } = useHide(true);

	return (
		<div className="customer-details-content">
			<CustomerDetailsContentHeader
				customer={customer}
				toogleClientModal={handleHide}
			/>
			<CustomerDetailsContentData
				customer={customer}
				toogleClientModal={handleHide}
				active={{ id: 1, title: 'infos-client' }}
			/>

			{!hide && (
				<CustomerModal toogleClientModal={handleHide} prevData={customer} />
			)}
		</div>
	);
}
