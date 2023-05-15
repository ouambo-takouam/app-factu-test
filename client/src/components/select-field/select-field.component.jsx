// import { IoMdArrowDropdown } from 'react-icons/io';
import './select-field.styles.scss';

export default function SelectField({
	label,
	fullwidth,
	onChangeHandler,
	data,
	...otherProps
}) {
	return (
		<div className="select-fieldset">
			{label && <h2>{label}</h2>}
			<select
				onChange={onChangeHandler}
				className={`${fullwidth ? 'fullwidth' : ''}`}
				{...otherProps}
			>
				{data &&
					data.map((item, idx) => {
						const { text, value } = item;

						return (
							<option key={idx} value={value}>
								{text}
							</option>
						);
					})}
			</select>
		</div>
	);
}
