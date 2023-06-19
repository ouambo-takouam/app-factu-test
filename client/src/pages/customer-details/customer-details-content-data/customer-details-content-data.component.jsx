import { useState } from 'react';
import useToggleItems from '../../../hooks/toggle-items.hook';
import { CustomButton } from '../../../components/form/custom-button/custom-button.component';
import './customer-details-content-data.styles.scss';

export default function CustomerDetailsContentData({
	customer,
	toogleClientModal,
	active,
}) {
	const [toogleItems, updateToogleItems] = useToggleItems({
		arr: ['toogle_list_operations', 'toogle_infos_clients'],
		activeId: active.id,
	});
	const {
		display_name,
		email,
		phone1,
		phone2,
		website,
		notes,
		payment_mode,
		preferred_shipping_method,
		condition,
	} = customer;

	const [activeHeader, setActiveHeader] = useState(active.title);

	return (
		<div className="customer-details-content-data">
			<div className="header">
				<div
					className={`${activeHeader === 'operations' ? 'active' : ''} title`}
					onClick={() => {
						updateToogleItems(toogleItems[0].id);
						setActiveHeader('operations');
					}}
				>
					<span className="left">Liste d'opérations</span>
				</div>
				<div
					className={`${activeHeader === 'infos-client' ? 'active' : ''} title`}
					onClick={() => {
						updateToogleItems(toogleItems[1].id);
						setActiveHeader('infos-client');
					}}
				>
					<span>Infos sur le client</span>
				</div>
			</div>
			<div className="content">
				{toogleItems[0].active && <p>Liste des operations</p>}
				{toogleItems[1].active && (
					<div className="content-customer">
						<div className="content-customer-header">
							<CustomButton
								onClick={toogleClientModal}
								$rounded
								$hshadow="inset 0 0 0 1px #8D9096"
							>
								Modifier
							</CustomButton>
						</div>
						<div className="content-customer-infos">
							<div className="left-block">
								<div className="line">
									<strong>Client</strong>
									<span>{display_name}</span>
								</div>
								<div className="line">
									<strong>E-mail</strong>
									<span>{email}</span>
								</div>
								<div className="line">
									<strong>Telephone 1</strong>
									<span>{phone1}</span>
								</div>
								<div className="line">
									<strong>Telephone 2</strong>
									<span>{phone2}</span>
								</div>
								<div className="line">
									<strong>Site web</strong>
									<span>{website}</span>
								</div>
								<div className="line">
									<strong>Notes</strong>
									<span>{notes}</span>
								</div>
							</div>
							<div className="right-block">
								<div className="line">
									<strong>Adresse facturation</strong>
									<span></span>
								</div>
								<div className="line">
									<strong>Adresse d'expedition</strong>
									<span></span>
								</div>
								<div className="line">
									<strong>Conditions</strong>
									<span>{condition}</span>
								</div>
								<div className="line">
									<strong>Mode de paiement</strong>
									<span>{payment_mode}</span>
								</div>
								<div className="line">
									<strong>Mode d'envoie prefere</strong>
									<span>{preferred_shipping_method}</span>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
