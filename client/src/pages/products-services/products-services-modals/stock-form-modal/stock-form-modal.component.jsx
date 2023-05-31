/* eslint-disable jsx-a11y/anchor-is-valid */
import InputField from '../../../../components/form/input-field/input-field.component';
import SelectField from '../../../../components/form/select-field/select-field.component';
import './stock-form-modal.styles.scss';

export default function StockFormModal() {
	return (
		<div className="stock-form-modal">
			<div className="form-modal-header">
				<div className="form-modal-header-icon"></div>
				<span className="form-modal-header-title">Stock</span>
				<a className="switch-link">Changer de type</a>
			</div>
			<div className="form-modal-content">
				<div className="general-infos-wrapper">
					<div className="general-infos">
						<div className="references">
							<InputField fullwidth label="Nom" />
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
				<div className="stock-quantity-wrapper">
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
			</div>
		</div>
	);
}
