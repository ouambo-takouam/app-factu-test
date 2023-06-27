import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectOneDocument } from '../../../redux/data/data.selectors';
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

	/** START: Code for invoice management */
	const customer = useSelector(
		selectOneDocument('customers', item.customer_id)
	);

	const generateData = (products) =>
		products.reduce(
			(acc, current) => [
				...acc,
				{
					date: invoice_date,
					description: current.description,
					qte: current.qte,
					price: current.price,
					total: `${current.qte * current.price}`,
				},
			],
			[]
		);

	const calculateInvoiceTotal = (products) =>
		products.reduce((acc, current) => acc + current.qte * current.price, 0);

	const separator = () =>
		item.products.length === 1 ? 0 : item.products.length * 7;

	function createHeaders(keys) {
		const result = [];

		for (let i = 0; i < keys.length; i += 1) {
			result.push({
				id: keys[i],
				name: keys[i],
				prompt: keys[i],
				width: 65,
				align: 'center',
				padding: 0,
			});
		}

		return result;
	}

	var headers = createHeaders(['date', 'description', 'qte', 'price', 'total']);

	const handlePrint = () => {
		const doc = new jsPDF();

		/** Invoic customer infos */
		doc.setFontSize(12);
		doc.text('VIDEODECOMPTA', 20, 20);
		doc.text('+240222633279', 20, 30);
		doc.text(item.email, 20, 36);

		/** Invoic HEADER */
		doc.setFontSize(18);
		doc.text('FACTURE', 20, 65);

		/** LEFT */
		doc.setFontSize(12);
		doc.text('FACTURER À', 20, 76);
		doc.setFontSize(11);
		doc.text(customer.display_name, 20, 81);
		doc.setFontSize(10);
		doc.text(customer.country, 22, 86);

		/** RIGHT */
		// Titles
		doc.setFontSize(12);
		doc.text('Nº DE FACTURE', 127, 76);
		doc.text('DATE', 148, 82);
		doc.text('ECHEANCE', 136, 88);
		doc.text('CONDITIONS', 133, 94);

		// Infos
		doc.setFontSize(11);
		doc.text(invoice_number, 162, 76);
		doc.text(invoice_date, 162, 82);
		doc.text(due_date, 162, 88);
		doc.text('Net 30', 162, 94);

		doc.setLineWidth(0.1);
		doc.setDrawColor(0, 0, 0);

		// doc.setLineDash([2.5]);
		doc.line(20, 104, 195, 104);

		/** Invoice products */

		doc.table(20, 115, generateData(item.products), headers, {
			autoSize: true,
		});

		/** Invoice resume */
		doc.setLineDash([1, 1.5, 1, 1.5, 1, 1.5, 3, 2, 3, 2, 3, 2]);
		doc.line(20, 142 + separator(), 145, 142 + separator());

		// titles
		doc.text('PAIEMENT', 20, 150 + separator());
		doc.text('SOLDE À PAYER', 20, 155 + separator());

		// data
		doc.text(`${calculateInvoiceTotal(item.products)}`, 80, 150 + separator());
		doc.text('0,00 XAF', 80, 155 + separator());
		doc.save();
	};

	/** END: Invoice management */

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
