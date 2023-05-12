import { AiOutlineClose } from 'react-icons/ai';
import useToggleItems from '../../hooks/toogle-items.hook';
import useManageInput from '../../hooks/manage-input.hook';
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
	const [fields, handleChange] = useManageInput();
	const {
		first_name,
		last_name,
		company,
		display_name,
		email,
		phone1,
		phone2,
		website,
		street,
		town,
		state,
		po_box,
		country,
		notes,
		payment_mode,
		send_mode,
		conditions,
		attachment,
	} = fields;

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
							<InputField
								type="text"
								label="Nom"
								name="first_name"
								value={first_name}
								onChangeHandler={handleChange}
							/>
							<InputField
								type="text"
								label="Prenom"
								name="last_name"
								value={last_name}
								onChangeHandler={handleChange}
							/>
						</div>
						<InputField
							type="text"
							label="Entreprise"
							name="company"
							value={company}
							onChangeHandler={handleChange}
							fullwidth
						/>
						<SelectField
							label="Nom a afficher"
							data={['Albert', 'Thomas', 'Pierre']}
							fullwidth
						/>
					</div>
					<div className="client-infos-right-block">
						<InputField
							type="email"
							label="Adresse Email"
							name="email"
							value={email}
							onChangeHandler={handleChange}
							fullwidth
						/>
						<div className="line">
							<InputField
								type="text"
								label="Telephone 1"
								name="phone1"
								value={phone1}
								onChangeHandler={handleChange}
							/>
							<InputField
								type="text"
								label="Telephone 2"
								name="phone2"
								value={phone2}
								onChangeHandler={handleChange}
							/>
						</div>
						<InputField
							type="text"
							label="Site web"
							name="website"
							value={website}
							onChangeHandler={handleChange}
							fullwidth
						/>
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
								<InputField
									type="text"
									placeholder="Rue"
									name="street"
									value={street}
									onChangeHandler={handleChange}
									fullwidth
								/>
								<div style={{ display: 'flex', flexWrap: 'wrap' }}>
									<InputField
										type="text"
										placeholder="Ville"
										name="town"
										value={town}
										onChangeHandler={handleChange}
									/>
									<InputField
										type="text"
										placeholder="Etat/province"
										name="state"
										value={state}
										onChangeHandler={handleChange}
									/>
									<InputField
										type="text"
										placeholder="Code postal"
										name="po_box"
										value={po_box}
										onChangeHandler={handleChange}
									/>
									<InputField
										type="text"
										placeholder="Pays"
										name="country"
										value={country}
										onChangeHandler={handleChange}
									/>
								</div>
							</div>
						)}

						{toogleItems[1].active && (
							<div className="notes">
								<h2>Notes</h2>
								<TextArea
									name="notes"
									value={notes}
									onChangeHandler={handleChange}
									fullwidth
								/>
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
								<InputField
									type="file"
									name="attachment"
									value={attachment}
									onChangeHandler={handleChange}
									fullwidth
								/>
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
