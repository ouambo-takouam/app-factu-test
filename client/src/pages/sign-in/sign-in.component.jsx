/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import InputField from '../../components/input-field/input-field.component';
import google_logo from '../../assets/images/png/google-mini-logo.png';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import './sign-in.styles.scss';

export default function SignIn() {
	return (
		<div className="sign-in-up-wrapper">
			<div className="sign-wrapper">
				<h2>Connexion</h2>
				<CustomButton $fullwidth>
					<img src={google_logo} alt="" />
					Se connecter avec Google
				</CustomButton>
				<div className="sign-or">OU</div>
				<InputField type="email" placeholder="Email" fullwidth />
				<InputField type="password" placeholder="Mot de passe" fullwidth />
				<CustomButton $validate $fullwidth>
					Se connecter
				</CustomButton>
				<p className="sign-usage-terms">
					En sélectionnant Se connecter ou Se connecter avec Google, vous
					acceptez nos <a href="#">Conditions d'utilisation</a> et confirmez
					avoir lu et accepté notre{' '}
					<a href="#">Déclaration de confidentialité globale</a>.
				</p>
				<div className="sign-separation-line"></div>
				<p className="sign-redirection-text">
					Nouveau sur Videodecompta?{' '}
					<Link to="/app/sign-up">Créer un compte</Link>.
				</p>
			</div>
		</div>
	);
}
