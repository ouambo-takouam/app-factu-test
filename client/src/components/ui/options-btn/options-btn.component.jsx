import { Link } from 'react-router-dom';
import './options-btn.styles.scss';

export default function OptionsBtn({ onClickHandler, children }) {
	return (
		<Link className={`options-btn`} onClick={onClickHandler}>
			{children}
		</Link>
	);
}
