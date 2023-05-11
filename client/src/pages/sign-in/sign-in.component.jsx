/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from '../../redux/slices/user.slice';
import useManageInput from '../../hooks/manage-input.hook';
import InputField from '../../components/input-field/input-field.component';
import google_logo from '../../assets/images/png/google-mini-logo.png';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import './sign-in.styles.scss';

export default function SignIn() {
	const [fields, handleChange] = useManageInput();
	const { email, password } = fields;

	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!email || !password) {
			return alert('All fields are required');
		}

		const response = await fetch('http://localhost:4000/api/v1/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		const { user, token } = await response.json();

		dispatch(connect({ credentials: user, token }));
	};

	return (
		<div className="sign-in-up-wrapper">
			<div className="sign-wrapper">
				<h2>Connexion</h2>
				<CustomButton $fullwidth>
					<img src={google_logo} alt="" />
					Se connecter avec Google
				</CustomButton>

				<div className="sign-or">OU</div>

				<form onSubmit={handleSubmit}>
					<InputField
						type="email"
						placeholder="Email"
						name="email"
						value={email}
						onChangeHandler={handleChange}
						fullwidth
					/>
					<InputField
						type="password"
						placeholder="Mot de passe"
						name="password"
						value={password}
						onChangeHandler={handleChange}
						fullwidth
					/>
					<CustomButton type="submit" $validate $fullwidth>
						Se connecter
					</CustomButton>
				</form>
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
