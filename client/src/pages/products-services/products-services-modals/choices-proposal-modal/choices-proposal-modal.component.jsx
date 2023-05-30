import { AiOutlineClose } from 'react-icons/ai';
import './choices-proposal-modal.styles.scss';

export default function ChoicesProposalModal() {
	return (
		<div className="choices-proposal-modal">
			<div className="choices-proposal-modal-content">
				<div className="choices-proposal-modal-header">
					<span>Créez votre produit ou service</span>
					<AiOutlineClose />
				</div>
				<div className="choices-proposal-modal-body">
					<div className="proposal">
						<div className="icon-wrapper stock-icon"></div>
						<div className="text">
							<div className="title">Stock</div>
							<div className="message">
								Produits que vous achetez et/ou vendez et pour lesquels vous
								effectuez un suivi de quantité.
							</div>
						</div>
					</div>
					<div className="proposal">
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
			</div>
		</div>
	);
}
