/* eslint-disable jsx-a11y/anchor-is-valid */
import { capitalizeWords } from '../../../../utils/capitalize-words';
import InputField from '../../../../components/form/input-field/input-field.component';
import SelectField from '../../../../components/form/select-field/select-field.component';
import { CustomButton } from '../../../../components/form/custom-button/custom-button.component';
import './product-form-modal.styles.scss';

export default function ProductFormModal({
	type,
	handleHide,
	updateToogleItems,
}) {
	const handleTypeChange = () => {
		handleHide();
		updateToogleItems(0);
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
							<InputField fullwidth label="Nom*" />
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
							<InputField />
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
					<p>Infos sur l'achat</p>
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
			<div className="form-modal-footer">
				<div className="container">
					<CustomButton $validate>Enregistrer et fermer</CustomButton>
				</div>
			</div>
		</div>
	);
}
