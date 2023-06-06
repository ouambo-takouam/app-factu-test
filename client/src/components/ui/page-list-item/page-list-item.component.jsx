import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';
import useHide from '../../../hooks/hide.hook';
import OptionsBtnWrapper from '../options-btn-wrapper/options-btn-wrapper.component';
import './page-list-item.styles.scss';

export default function PageListItem({ dataType, item }) {
	const { hide, handleHide } = useHide(true);

	const {
		_id,
		/* customer */
		company,
		display_name,
		email,
		phone1,
		street,
		town,
		/* product */
		name,
		qte,
	} = item;

	return (
		<Fragment>
			{dataType === 'customer' ? (
				<div className="page-list-item-row">
					<div className="field-check">
						<input type="checkbox" />
					</div>
					<div className="field-customer-info">
						<div className="name-info">
							<Link to={_id} className="display-name">
								{display_name}
							</Link>
							<span className="email-icon">
								<FiMail size={18} />
							</span>
						</div>
						<div className="display-company">{company}</div>
					</div>
					<div className="field-adress">
						<div>{street}</div>
						<span>{town}</span>
					</div>
					<div className="field-phone">{phone1}</div>
					<div className="field-email">{email}</div>
					<div className="field-solde-courant">XAF0.00</div>
					<div className="field-action">
						<Link className="create-invoice-link">Creer une facture</Link>
						<span className="other-actions">
							<MdArrowDropDown size={24} onClick={handleHide} />
						</span>
						{!hide && (
							<div className="field-action-options">
								<OptionsBtnWrapper
									options={[
										{ path: '/', title: 'Creer un recu de vente' },
										{ path: '/', title: 'Creer un devis' },
										{ path: '/', title: 'Rendre inactif' },
										{ path: '/', title: 'Creer un releve de situation' },
									]}
								/>
							</div>
						)}
					</div>
				</div>
			) : 'product' ? (
				<div className="page-list-item-row">
					<div className="field-check">
						<input type="checkbox" />
					</div>
					<div className="product-name">{name.toUpperCase()}</div>
					<div className="product-reference"></div>
					<div className="product-type"></div>
					<div className="product-description"></div>
					<div className="product-price">0.00</div>
					<div className="product-count"></div>
					<div className="product-quantity">{qte}</div>
					<div className="product-point-commande"></div>
					<div className="field-action">
						<Link className="create-invoice-link">Modifier</Link>
						<span className="other-actions">
							<MdArrowDropDown size={24} onClick={handleHide} />
						</span>
						{!hide && (
							<div className="field-action-options">
								<OptionsBtnWrapper
									options={[
										{ path: '/', title: 'Rendre inactif' },
										{ path: '/', title: 'Executer le rapport' },
										{ path: '/', title: 'Dupliquer' },
										{ path: '/', title: 'Ajuster la quantite' },
										{ path: '/', title: 'Ajuster la valeur de debut' },
									]}
								/>
							</div>
						)}
					</div>
				</div>
			) : (
				''
			)}
		</Fragment>
	);
}
