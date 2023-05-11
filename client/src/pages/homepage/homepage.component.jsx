import { Link } from 'react-router-dom';
import './homepage.styles.scss';

export default function Homepage() {
	return (
		<div className="homepage">
			<h1>Bienvenue sur l'application comptable !</h1>
			<Link to="/sign-in">Se connecter</Link>
			<Link to="/sign-up">Ouvrir son compte</Link>
		</div>
	);
}
