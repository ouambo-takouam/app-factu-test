import { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserToken } from '../../../redux/user/user.selectors';
import { dataAddItem, dataUpdateItem } from '../../../redux/data/data.actions';
import { postData } from '../../../utils/fetch.utils';
import customerOptions from '../../../data/customer-select-options.json';
import useToggleItems from '../../../hooks/toggle-items.hook';
import useManageInput from '../../../hooks/manage-input.hook';
import InputField from '../../../components/form/input-field/input-field.component';
import SelectField from '../../../components/form/select-field/select-field.component';
import TextArea from '../../../components/form/text-area/text-area.component';
import { CustomButton } from '../../../components/form/custom-button/custom-button.component';
import './customer-modal.styles.scss';

export default function CustomerModal({ toogleClientModal, prevData = {} }) {
	const dispatch = useDispatch();
	const token = useSelector(selectUserToken);

	const [toogleItems, updateToogleItems] = useToggleItems({
		arr: ['toogle_adress', 'toogle_notes', 'toogle_paiement', 'toogle_files'],
		activeId: 0,
	});

	const [fields, handleChange] = useManageInput(prevData);
	const {
		first_name,
		last_name,
		display_name,
		company,
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
		preferred_shipping_method,
		condition,
		attachment,
	} = fields;

	const { payment_modes, preferred_shipping_methods, conditions } =
		customerOptions;

	const [displayNames, setDisplayNames] = useState([]);

	// generate display names options for the form
	useEffect(() => {
		const generateDisplayNames = () => {
			if (first_name && !last_name) {
				setDisplayNames([
					{
						text: first_name,
						value: first_name,
					},
				]);
			} else if (!first_name && last_name) {
				setDisplayNames([
					{
						text: last_name,
						value: last_name,
					},
				]);
			} else if (first_name && last_name) {
				setDisplayNames([
					{
						text: `${first_name} ${last_name}`,
						value: `${first_name} ${last_name}`,
					},
					{
						text: `${last_name} ${first_name}`,
						value: `${last_name} ${first_name}`,
					},
				]);
			}
		};

		generateDisplayNames();
	}, [first_name, last_name]);

	// Handles customer info submittion !
	const handleSubmit = async () => {
		if (!first_name && !last_name) {
			return alert('first name and last name should be set !');
		}

		if (!display_name) {
			fields.display_name = `${first_name} ${last_name}`;
		}

		// postData: perform fetch 'POST' type to the server
		const created = await postData(
			'POST',
			'customers', // path
			fields, // data
			token // token
		);

		dispatch(dataAddItem({ type: 'customers', value: created }));

		toogleClientModal();
	};

	const handleUpdate = async () => {
		// Here we're performing a fetch 'PATCH' type to the server
		const updated = await postData(
			'PATCH', // method
			'customers', // path
			fields, // data
			token // token
		);

		dispatch(dataUpdateItem({ type: 'customers', value: updated }));

		toogleClientModal();
	};

	return (
		<div className="customer-modal" onClick={toogleClientModal}>
			<div
				className="customer-modal-content"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="customer-modal-header">
					<span className="customer-modal-title">Infos sur le client</span>
					<span
						className="customer-modal-close-btn"
						onClick={toogleClientModal}
					>
						<AiOutlineClose />
					</span>
				</div>
				<div className="customer-modal-body">
					<div className="customer-modal-infos">
						<div className="customer-infos-left-block">
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
								data={displayNames}
								name="display_name"
								onChangeHandler={handleChange}
								fullwidth
							/>
						</div>
						<div className="customer-infos-right-block">
							<InputField
								type="email"
								label="Adresse Email"
								placeholder="Separer les adresses e-mail par des virgules"
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
								placeholder="ex: www.monsite.com"
								name="website"
								value={website}
								onChangeHandler={handleChange}
								fullwidth
							/>
						</div>
					</div>
					<div className="customer-modal-other-infos">
						<div className="customer-other-infos-header">
							<ul className="navigation">
								<li onClick={() => updateToogleItems(0)}>Adresse</li>
								<li onClick={() => updateToogleItems(1)}>Notes</li>
								<li onClick={() => updateToogleItems(2)}>
									Payment et facturation
								</li>
								<li onClick={() => updateToogleItems(3)}>Pieces jointes</li>
							</ul>
						</div>
						<div className="customer-other-infos-content">
							{toogleItems[0].active && (
								<div className="adresse-facturation">
									<h2>Adresse de facturation</h2>
									<TextArea
										name="street"
										value={street}
										placeholder="Rue"
										onChangeHandler={handleChange}
										fullwidth
										height="50px"
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
										height="150px"
									/>
								</div>
							)}

							{toogleItems[2].active && (
								<div className="payment-facturation">
									<SelectField
										label="Mode de paiement par défaut"
										data={payment_modes}
										name="payment_mode"
										value={payment_mode}
										onChangeHandler={handleChange}
									/>
									<SelectField
										label="Mode d'envoi préféré"
										data={preferred_shipping_methods}
										name="preferred_shipping_method"
										value={preferred_shipping_method}
										onChangeHandler={handleChange}
									/>

									<SelectField
										label="Conditions"
										data={conditions}
										name="condition"
										value={condition}
										onChangeHandler={handleChange}
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
				<div className="customer-modal-footer">
					<div className="footer-inner">
						<CustomButton
							$rounded
							$hshadow="inset 0 0 0 1px #8D9096"
							onClick={toogleClientModal}
						>
							Annuler
						</CustomButton>
						{!Object.keys(prevData).length ? (
							<CustomButton $rounded $validate onClick={handleSubmit}>
								Enregistrer
							</CustomButton>
						) : (
							<CustomButton $rounded $validate onClick={handleUpdate}>
								Mettre a jour
							</CustomButton>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
