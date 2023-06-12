/* eslint-disable jsx-a11y/anchor-is-valid */
import { BsCaretDownFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { capitalizeWords } from '../../../../utils/capitalize-words';
import useHide from '../../../../hooks/hide.hook';
import { postData } from '../../../../utils/fetch.utils';
import { selectUserToken } from '../../../../redux/user/user.selectors';
import { dataAddItem } from '../../../../redux/data/data.actions';
import useManageInput from '../../../../hooks/manage-input.hook';
import InputField from '../../../../components/form/input-field/input-field.component';
import SelectField from '../../../../components/form/select-field/select-field.component';
import { CustomButton } from '../../../../components/form/custom-button/custom-button.component';
import './product-form-modal.styles.scss';

export default function ProductFormModal({
	type,
	handleHide,
	updateToogleItems,
	onHideHandler,
}) {
	// react-redux usefull variables !
	const dispatch = useDispatch();
	const token = useSelector(selectUserToken);

	const { hide: hideSaveCreateBtn, handleHide: handleHideSaveCreateBtn } =
		useHide(false);

	const [fields, handleChange] = useManageInput();
	const { name, qte } = fields;

	const handleTypeChange = () => {
		handleHide();
		updateToogleItems(0);
	};

	const handleSubmit = async () => {
		await submitAndDispatchAction();

		onHideHandler();
	};

	const handleSubmitAndClear = async () => {
		await submitAndDispatchAction();
	};

	const submitAndDispatchAction = async () => {
		if (!name && !qte) {
			return alert('Nom quantite du produit obligatoire');
		}

		// postData: perform fetch 'POST' type to the server
		const created = await postData(
			'POST',
			'products', // path
			fields, // data
			token // token
		);

		dispatch(dataAddItem({ type: 'products', value: created }));
	};

	return (
		<div className="product-form-modal">
			<div className="form-modal-header">
				<div className="form-modal-header-icon"></div>
				<span className="form-modal-header-title">{capitalizeWords(type)}</span>
				<a className="change-type-link" onClick={handleTypeChange}>
					Changer de type
				</a>
			</div>
			<div className="form-modal-content">
				<div className="general-infos-block">
					<div className="name-references-image">
						<div className="name-references">
							<InputField
								fullwidth
								label="Nom*"
								name="name"
								value={name}
								onChangeHandler={handleChange}
							/>
							<InputField fullwidth label="Référence" />
						</div>
						<label for="file" className="image"></label>
						<input id="file" type="file" />
					</div>
					<SelectField
						fullwidth
						label="Catégorie"
						data={[
							{ text: 'Couches', value: 'couches' },
							{ text: 'Farine', value: 'farine' },
						]}
					/>
				</div>

				{/** Optional block */}
				{type === 'stock' && (
					<div className="stock-quantity-block">
						<div>
							<h3>Quantité en stock initiale*</h3>
							<InputField
								name="qte"
								value={qte}
								onChangeHandler={handleChange}
							/>
						</div>
						<div>
							<div>
								<h3>As of date*</h3>
								<span>What's the as of date?</span>
							</div>
							<InputField placeholder="DD/MM/YYYY" />
						</div>
						<div>
							<div>
								<h3>Reorder point</h3>
								<span>What's the reorder point?</span>
							</div>
							<InputField />
						</div>
					</div>
				)}

				<div className="description-block">
					<InputField
						label="Description"
						placeholder="Description sur les document commerciaux"
						fullwidth
					/>
					<div className="price">
						<InputField fullwidth label="Prix de vente" />
						<SelectField fullwidth label="Compte de produits" />
					</div>
				</div>

				<div className="infos-achat-block">
					<p className="title">Infos sur l'achat</p>
					<InputField
						placeholder="Description sur les formulaires d'achat"
						fullwidth
					/>
					<div className="price">
						<InputField fullwidth label="Coût" />
						<SelectField fullwidth label="Compte de charges" />
					</div>
					<SelectField width="200px" label="Fournisseur préféré" />
				</div>
			</div>

			{hideSaveCreateBtn && (
				<div className="save-create-btn-wrapper">
					<CustomButton
						$mtop="5px"
						$mbottom="5px"
						$padding="5px 18px"
						onClick={handleSubmitAndClear}
					>
						Enregistrer et creer
					</CustomButton>
				</div>
			)}

			<div className="form-modal-footer">
				<div className="submit-btn-wrapper">
					<CustomButton
						$validate
						$height="30px"
						$padding="8px 16px"
						$mtop="0"
						$mbottom="0"
						$radius="36px 0 0 36px"
						onClick={handleSubmit}
					>
						Enregistrer et fermer
					</CustomButton>
					<CustomButton
						$validate
						$height="30px"
						$padding="8px"
						$mtop="0"
						$mbottom="0"
						$radius="0 36px 36px 0"
						$mleft="1px"
						onClick={handleHideSaveCreateBtn}
					>
						<BsCaretDownFill size={12} />
					</CustomButton>
				</div>
			</div>
		</div>
	);
}
