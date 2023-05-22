import useToggleItems from '../../../hooks/toggle-items.hook';
import { CustomButton } from '../../../components/form/custom-button/custom-button.component';
import './customer-details-content-data.styles.scss';

export default function CustomerDetailsContentData({ customer }) {
	const [toogleItems, updateToogleItems] = useToggleItems({
		arr: [
			'toogle_list_operations',
			'toogle_statements',
			'toogle_infos_clients',
		],
		firstItemOpen: true,
	});
	const {
		display_name,
		email,
		phone1,
		phone2,
		website,
		payment_mode,
		preferred_shipping_method,
		condition,
	} = customer;

	return (
		<div className="customer-details-content-data">
			<div className="header">
				<div
					className="title"
					onClick={() => updateToogleItems(toogleItems[0].id)}
				>
					Liste d'opérations
				</div>
				<div
					className="title dotted"
					onClick={() => updateToogleItems(toogleItems[1].id)}
				>
					Statements
				</div>
				<div
					className="title"
					onClick={() => updateToogleItems(toogleItems[2].id)}
				>
					Infos sur le client
				</div>
			</div>
			<div className="content">
				{toogleItems[0].active && <p>Liste des operations</p>}
				{toogleItems[1].active && <p>Liste de statements</p>}
				{toogleItems[2].active && (
					<div className="content-customer">
						<div className="content-customer-header">
							<CustomButton $rounded $hshadow="inset 0 0 0 1px #8D9096">
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
