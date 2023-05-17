import { Fragment } from 'react';
import useHide from '../../hooks/hide.hook';
import CustomersHeader from './customers-header/customers-header.component';
import CustomersList from './customers-list/customers-list.component';
import CustomerModal from './customer-modal/customer-modal.component';
import './customers.styles.scss';

export default function Customers() {
	const { hide: hideClientModal, handleHide: toogleClientModal } = useHide();

	return (
		<Fragment>
			<div className="customers-wrapper">
				<CustomersHeader toogleClientModal={toogleClientModal} />
				<CustomersList />
			</div>

			{!hideClientModal && (
				<CustomerModal toogleClientModal={toogleClientModal} />
			)}
		</Fragment>
	);
}
