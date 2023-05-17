import { Link } from 'react-router-dom';
import './shortcuts-wrapper.styles.scss';

export default function ShortcutsWrapper() {
	return (
		<div className="shortcuts-wrapper">
			<h3>Raccourcis</h3>
			<div className="shortcuts-box">
				<Link to="/app/fournisseurs">
					<button>
						<div className="shortcut-icon sc-fournisseur"></div>
						<div className="shortcut-text ">Ajouter un fournisseur</div>
					</button>
				</Link>
				<Link to="/app/achat-comptable">
					<button>
						<div className="shortcut-icon sc-achat-comptant"></div>
						<div className="shortcut-text">Enregistrer un achat comptable</div>
					</button>
				</Link>
				<Link to="/app/clients">
					<button>
						<div className="shortcut-icon sc-client"></div>
						<div className="shortcut-text">Ajouter un client</div>
					</button>
				</Link>
				<Link to="/app/factures">
					<button>
						<div className="shortcut-icon sc-facture"></div>
						<div className="shortcut-text">Creer une facture</div>
					</button>
				</Link>
			</div>
		</div>
	);
}
