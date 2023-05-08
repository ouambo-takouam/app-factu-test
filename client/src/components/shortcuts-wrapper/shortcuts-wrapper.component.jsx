import './shortcuts-wrapper.styles.scss';

export default function ShortcutWrapper() {
	return (
		<div className="shortcuts-wrapper">
			<h3>Raccourcis</h3>
			<div className="shortcuts-box">
				<button>
					<div className="shortcut-icon sc-fournisseur"></div>
					<div className="shortcut-text ">Ajouter un fournisseur</div>
				</button>
				<button>
					<div className="shortcut-icon sc-achat-comptant"></div>
					<div className="shortcut-text">Enregistrer un achat comptable</div>
				</button>
				<button>
					<div className="shortcut-icon sc-client"></div>
					<div className="shortcut-text">Ajouter un client</div>
				</button>
				<button>
					<div className="shortcut-icon sc-facture"></div>
					<div className="shortcut-text">Creer une facture</div>
				</button>
			</div>
		</div>
	);
}
