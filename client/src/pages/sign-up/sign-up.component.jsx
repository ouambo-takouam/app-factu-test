/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import InputField from '../../components/input-field/input-field.component';
import { CustomButton } from '../../components/custom-button/custom-button.component';

export default function SignUp() {
	return (
		<div className="sign-in-up-wrapper">
			<div className="sign-wrapper">
				<h2>Creer un compte</h2>
				<p className="sign-redirection-text">
					Deja utilisateur ? <Link to="/sign-in">Se connecter</Link>.
				</p>
				<InputField type="text" label="Nom" fullwidth />
				<InputField type="text" label="Prenom" fullwidth />
				<InputField type="email" label="Email" fullwidth />
				<InputField type="password" label="Mot de passe" fullwidth />
				<InputField type="password" label="Confirmer mot de passe" fullwidth />
				<CustomButton $validate $fullwidth>
					Creer mon compte
				</CustomButton>
				<p className="sign-usage-terms">
					En sélectionnant Créer mon compte, vous acceptez nos{' '}
					<a href="#">Conditions d'utilisation</a> et confirmez avoir lu et
					accepté notre <a href="#">Déclaration de confidentialité globale</a>.
				</p>
			</div>
		</div>
	);
}
