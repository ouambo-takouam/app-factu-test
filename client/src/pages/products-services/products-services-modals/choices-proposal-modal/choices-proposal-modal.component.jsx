/* eslint-disable jsx-a11y/anchor-is-valid */
import { AiOutlineClose } from 'react-icons/ai';
import useHide from '../../../../hooks/hide.hook';
// import useToggleItems from '../../../../hooks/toggle-items.hook';
import StockFormModal from '../stock-form-modal/stock-form-modal.component';
import './choices-proposal-modal.styles.scss';

export default function ChoicesProposalModal({ onHideHandler }) {
	const { hide, handleHide } = useHide(true);
	// const [toogleItems, updateToogleItems] = useToggleItems({
	// 	arr: ['stock', 'service'],
	// });

	return (
		<div className="choices-proposal-modal" onClick={onHideHandler}>
			<div
				className="choices-proposal-modal-content"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="choices-proposal-modal-header">
					<span>Créez votre produit ou service</span>
					<AiOutlineClose onClick={onHideHandler} />
				</div>

				<div className="choices-proposal-modal-body">
					{/*!hide && (
						<div className="proposal-list">
							<div
								className="proposal"
								onClick={() => {
									handleHide();
									updateToogleItems(1);
								}}
							>
								<div className="icon-wrapper stock-icon"></div>
								<div className="text">
									<div className="title">Stock</div>
									<div className="message">
										Produits que vous achetez et/ou vendez et pour lesquels vous
										effectuez un suivi de quantité.
									</div>
								</div>
							</div>
							<div
								className="proposal"
								onClick={() => {
									handleHide();
									updateToogleItems(2);
								}}
							>
								<div className="icon-wrapper service-icon"></div>
								<div className="text">
									<div className="title">Service</div>
									<div className="message">
										Services que vous fournissez à vos clients, par exemple,
										l'aménagement paysager ou la préparation des déclarations de
										taxe.
									</div>
								</div>
							</div>
						</div>
							)*/}

					<StockFormModal />

					{/*toogleItems[0].active && <p>Stock form</p>*/}
					{/*toogleItems[1].active && <p>Service form</p>*/}
				</div>
			</div>
		</div>
	);
}
