import { Link } from 'react-router-dom';
import './options-btn.styles.scss';

export default function OptionsBtn({ path, children }) {
	return (
		<Link to={path} className={`options-btn`}>
			{children}
		</Link>
	);
}
