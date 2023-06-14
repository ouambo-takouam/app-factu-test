// import { IoMdArrowDropdown } from 'react-icons/io';
import './select-field.styles.scss';

export default function SelectField({
	label,
	width,
	fullwidth,
	onChangeHandler,
	data,
	...otherProps
}) {
	return (
		<div className="select-fieldset">
			{label && <p>{label}</p>}
			<select
				style={{ width }}
				onChange={onChangeHandler}
				className={`${fullwidth ? 'fullwidth' : ''}`}
				{...otherProps}
			>
				{data &&
					data.map((item, idx) => {
						const { text, value, selected } = item;

						return (
							<option key={idx} value={value} selected={selected}>
								{text}
							</option>
						);
					})}
			</select>
		</div>
	);
}
