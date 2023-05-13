import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import useHide from '../../hooks/hide-item.hook';
import './select-field.styles.scss';

export default function SelectField({
	label,
	fullwidth,
	onChangeHandler,
	data,
	...otherProps
}) {
	const [displayName, setDisplayName] = useState('');
	const { hide, handleChange } = useHide();

	const handleChoice = (item) => {
		setDisplayName(item);
		handleChange();
	};

	return (
		<div className="select-fieldset">
			{label && <h2>{label}</h2>}
			<input
				className={`input-field ${fullwidth ? 'fullwidth' : ''}`}
				onChange={onChangeHandler}
				{...otherProps}
				value={displayName}
			/>
			<div className="btn-wrapper">
				<div className="btn-inner" onClick={handleChange}>
					<IoMdArrowDropdown size={22} />
				</div>
			</div>
			{!hide && (
				<div className="choice-wrapper">
					{data.map((item, idx) => (
						<div
							key={idx}
							className="choice"
							onClick={() => handleChoice(item)}
						>
							{item}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
