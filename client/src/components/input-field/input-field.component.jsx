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
				className={`input-field ${fullwidth ? 'fullwidth' : ''}`}
				onChange={onChangeHandler}
				{...otherProps}
			/>
		</fieldset>
	);
}
