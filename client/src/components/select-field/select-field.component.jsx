import { IoMdArrowDropdown } from 'react-icons/io';
import './select-field.styles.scss';

export default function SelectField({ label, fullwidth, data, ...otherProps }) {
	return (
		<div className="select-fieldset">
			{label && <h2>{label}</h2>}
			<input
				className={`input-field ${fullwidth ? 'fullwidth' : ''}`}
				{...otherProps}
			/>
			<div className="btn-wrapper">
				<div className="btn-inner">
					<IoMdArrowDropdown size={22} />
				</div>
			</div>
		</div>
	);
}
