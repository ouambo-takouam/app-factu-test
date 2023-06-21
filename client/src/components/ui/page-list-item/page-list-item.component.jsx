import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';
import { jsPDF } from 'jspdf';
import useHide from '../../../hooks/hide.hook';
import OptionsBtnWrapper from '../options-btn-wrapper/options-btn-wrapper.component';
import Invoice from '../../../pages/invoice/invoice.component';
import InvoiceDisplay from '../../../pages/invoice-display/invoice-display.component';
import './page-list-item.styles.scss';

export default function PageListItem({ dataType, item }) {
	const { hide: hidePageItemOptions, handleHide: handleHidePageItemOptions } =
		useHide(true);
	const { hide: hideInvoicePage, handleHide: handleHideInvoicePage } =
		useHide(true);
	const { hide: hideInvoiceDisplay, handleHide: handleHideInvoiceDisplay } =
		useHide(true);

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
		type,
		name,
		qte,
		price,
		/* invoice */
		invoice_date,
		due_date,
		invoice_number,
	} = item;

	const Page = () => `<html><head></head><body><h1>Heloooooo</h1></body><html>`;

	const handlePrint = () => {
		// Default export is a4 paper, portrait, using millimeters for units
		const doc = new jsPDF();

		doc.html(`${(<Page />)}`, {
			callback: function (doc) {
				doc.save();
			},
			x: 10,
			y: 10,
		});
	};

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
						<Link
							className="create-invoice-link"
							onClick={handleHideInvoicePage}
						>
							Creer une facture
						</Link>
						<span className="other-actions">
							<MdArrowDropDown size={24} onClick={handleHidePageItemOptions} />
						</span>
						{!hidePageItemOptions && (
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
			) : dataType === 'product' ? (
				<div className="page-list-item-row">
					<div className="field-check">
						<input type="checkbox" />
					</div>
					<div className="product-name">{name.toUpperCase()}</div>
					<div className="product-reference"></div>
					<div className="product-type">{type}</div>
					<div className="product-description"></div>
					<div className="product-price">{price}</div>
					<div className="product-count"></div>
					<div className="product-quantity">{qte}</div>
					<div className="product-point-commande"></div>
					<div className="field-action">
						<Link className="create-invoice-link">Modifier</Link>
						<span className="other-actions">
							<MdArrowDropDown size={24} onClick={handleHidePageItemOptions} />
						</span>
						{!hidePageItemOptions && (
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
			) : dataType === 'invoice' ? (
				<div className="page-list-item-row">
					<div className="field-check">
						<input type="checkbox" />
					</div>
					<div className="operation-date">{invoice_date}</div>
					<div className="operation-type" onClick={handleHideInvoiceDisplay}>
						Facture
					</div>
					<div className="operation_number">{invoice_number}</div>
					<div className="due-date">{due_date}</div>
					<div>0.00 XFA</div>
					<div>0.00 XFA</div>
					<div>Ferme</div>
					<div className="field-action">
						<Link className="create-invoice-link" onClick={handlePrint}>
							Imprimer
						</Link>
						<span className="other-actions">
							<MdArrowDropDown size={24} onClick={handleHidePageItemOptions} />
						</span>
						{!hidePageItemOptions && (
							<div className="field-action-options">
								<OptionsBtnWrapper
									options={[{ onClickHandler: () => {}, title: 'Envoyer' }]}
								/>
							</div>
						)}
					</div>
				</div>
			) : (
				''
			)}

			{/** Invoice Display */}
			{!hideInvoiceDisplay && (
				<InvoiceDisplay
					onInvoicePageHideHanlder={handleHideInvoiceDisplay}
					invoice={item}
				/>
			)}

			{/** Invoice page */}
			{!hideInvoicePage && (
				<Invoice
					onInvoicePageHideHanlder={handleHideInvoicePage}
					clientId={_id}
				/>
			)}
		</Fragment>
	);
}
