import './input-field.styles.scss';

export default function InputField({
	label,
	fullwidth,
	onChangeHandler,
	...otherProps
}) {
	return (
		<fieldset className="input-fieldset">
			{label && <label>{label}</label>}
			<input
				className={`${fullwidth ? 'fullwidth' : ''}`}
				onChange={onChangeHandler}
				{...otherProps}
			/>
		</fieldset>
	);
}
