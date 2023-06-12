import './input-field.styles.scss';

export default function InputField({
	label,
	fullwidth,
	width,
	onChangeHandler,
	...otherProps
}) {
	return (
		<fieldset className="input-fieldset">
			{label && <label>{label}</label>}
			<input
				style={{ width }}
				className={`${fullwidth ? 'fullwidth' : ''}`}
				onChange={onChangeHandler}
				{...otherProps}
			/>
		</fieldset>
	);
}
