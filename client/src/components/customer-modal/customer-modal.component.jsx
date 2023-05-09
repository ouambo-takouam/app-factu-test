import useToggleItems from '../../hooks/toogle-items.hook';
import { AiOutlineClose } from 'react-icons/ai';
import InputField from '../input-field/input-field.component';
import SelectField from '../select-field/select-field.component';
import TextArea from '../text-area/text-area.component';
import { CustomButton } from '../custom-button/custom-button.component';
import './customer-modal.styles.scss';

export default function CustomerModal({ toogleClientModal }) {
	const [toogleItems, updateToogleItems] = useToggleItems({
		arr: ['toogle_adress', 'toogle_notes', 'toogle_paiement', 'toogle_files'],
		firstItemOpen: true,
	});

	return (
		<div className="client-modal">
			<div className="client-modal-header">
				<span className="client-modal-title">Infos sur le client</span>
				<span className="client-modal-close-btn" onClick={toogleClientModal}>
					<AiOutlineClose />
				</span>
			</div>
			<div className="client-modal-content">
				<div className="client-modal-infos">
					<div className="client-infos-left-block">
						<div className="line">
							<InputField type="text" label="Nom" />
							<InputField type="text" label="Prenom" />
						</div>
						<InputField type="text" label="Entreprise" fullwidth />
						<SelectField
							label="Nom a afficher"
							data={['Albert', 'Thomas', 'Pierre']}
							fullwidth
						/>
					</div>
					<div className="client-infos-right-block">
						<InputField type="email" label="Adresse Email" fullwidth />
						<div className="line">
							<InputField type="text" label="Telephone 1" />
							<InputField type="text" label="Telephone 2" />
						</div>
						<InputField type="text" label="Site web" fullwidth />
					</div>
				</div>
				<div className="client-modal-other-infos">
					<div className="client-other-infos-header">
						<ul className="navigation">
							<li onClick={() => updateToogleItems(toogleItems[0].id)}>
								Adresse
							</li>
							<li onClick={() => updateToogleItems(toogleItems[1].id)}>
								Notes
							</li>
							<li onClick={() => updateToogleItems(toogleItems[2].id)}>
								Payment et facturation
							</li>
							<li onClick={() => updateToogleItems(toogleItems[3].id)}>
								Pieces jointes
							</li>
						</ul>
					</div>
					<div className="client-other-infos-content">
						{toogleItems[0].active && (
							<div className="adresse-facturation">
								<h2>Adresse de facturation</h2>
								<InputField type="text" placeholder="Rue" fullwidth />
								<div style={{ display: 'flex', flexWrap: 'wrap' }}>
									<InputField type="text" placeholder="Ville" />
									<InputField type="text" placeholder="Etat/province" />
									<InputField type="text" placeholder="Code postal" />
									<InputField type="text" placeholder="Pays" />
								</div>
							</div>
						)}

						{toogleItems[1].active && (
							<div className="notes">
								<h2>Notes</h2>
								<TextArea fullwidth />
							</div>
						)}

						{toogleItems[2].active && (
							<div className="payment-facturation">
								<SelectField
									label="Mode de paiement par défaut"
									data={['Cache', 'Cheque', 'Carte de credit']}
								/>
								<SelectField
									label="Mode d'envoi préféré"
									data={['Aucun', 'Imprimer plus tard', 'Envoyer plus tard']}
								/>

								<SelectField
									label="Conditions"
									data={['Due on receipt', 'Net 15', 'Net 30', 'Net 60']}
								/>
							</div>
						)}

						{toogleItems[3].active && (
							<div className="pieces-jointer">
								<h2>Pieces jointes</h2>
								<InputField type="file" fullwidth />
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="client-modal-footer">
				<div className="footer-inner">
					<CustomButton $rounded onClick={toogleClientModal}>
						Annuler
					</CustomButton>
					<CustomButton $rounded $validate>
						Enregistrer
					</CustomButton>
				</div>
			</div>
		</div>
	);
}
