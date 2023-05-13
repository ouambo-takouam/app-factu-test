import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { connect, toogleLoading } from '../../redux/slices/user.slice';
import useManageInput from '../../hooks/manage-input.hook';
import InputField from '../../components/input-field/input-field.component';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import SpinnerLoader from '../../components/spinner-loader/spinner-loader.component';

export default function SignUp() {
	const [fields, handleChange] = useManageInput();
	const { first_name, last_name, email, password, password_confirm } = fields;

	const isLoading = useSelector((state) => state.user.isLoading);
	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!first_name || !last_name || !email || !password || !password_confirm) {
			return alert('All fields are required');
		}

		if (password !== password_confirm) {
			return alert("Password aren't identicals");
		}

		dispatch(toogleLoading());

		const response = await fetch('http://localhost:4000/api/v1/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ first_name, last_name, email, password }),
		});

		const { user, token } = await response.json();

		dispatch(connect({ credentials: user, token }));
	};

	return (
		<Fragment>
			{isLoading ? (
				<SpinnerLoader />
			) : (
				<div className="sign-in-up-wrapper">
					<div className="sign-wrapper">
						<h2>Creer un compte</h2>
						<p className="sign-redirection-text">
							Deja utilisateur ? <Link to="/sign-in">Se connecter</Link>.
						</p>
						<form onSubmit={handleSubmit}>
							<InputField
								type="text"
								label="Nom"
								name="first_name"
								value={first_name}
								onChangeHandler={handleChange}
								fullwidth
							/>
							<InputField
								type="text"
								label="Prenom"
								name="last_name"
								value={last_name}
								onChangeHandler={handleChange}
								fullwidth
							/>
							<InputField
								type="email"
								label="Email"
								name="email"
								value={email}
								onChangeHandler={handleChange}
								fullwidth
							/>
							<InputField
								type="password"
								label="Mot de passe"
								name="password"
								value={password}
								onChangeHandler={handleChange}
								fullwidth
							/>
							<InputField
								type="password"
								label="Confirmer mot de passe"
								name="password_confirm"
								value={password_confirm}
								onChangeHandler={handleChange}
								fullwidth
							/>
							<CustomButton type="submit" $validate $fullwidth>
								Creer mon compte
							</CustomButton>
						</form>
						<p className="sign-usage-terms">
							En sélectionnant Créer mon compte, vous acceptez nos{' '}
							<a href="#">Conditions d'utilisation</a> et confirmez avoir lu et
							accepté notre{' '}
							<a href="#">Déclaration de confidentialité globale</a>.
						</p>
					</div>
				</div>
			)}
		</Fragment>
	);
}
