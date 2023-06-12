import './text-area.styles.scss';

export default function TextArea({
	label,
	fullwidth,
	width,
	height,
	onChangeHandler,
	...otherProps
}) {
	return (
		<fieldset className="input-fieldset">
			{label && <label>{label}</label>}
			<textarea
				style={{ width, height }}
				className={`text-area ${fullwidth ? 'fullwidth' : ''}`}
				autoComplete="false"
				onChange={onChangeHandler}
				{...otherProps}
			></textarea>
		</fieldset>
	);
}
