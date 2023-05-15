import './text-area.styles.scss';

export default function TextArea({
	fullwidth,
	onChangeHandler,
	...otherProps
}) {
	return (
		<fieldset className="input-fieldset">
			<textarea
				className={`text-area ${fullwidth ? 'fullwidth' : ''}`}
				autoComplete="false"
				onChange={onChangeHandler}
				{...otherProps}
			></textarea>
		</fieldset>
	);
}
