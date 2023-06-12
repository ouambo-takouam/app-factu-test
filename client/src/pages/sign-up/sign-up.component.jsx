/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserIsLoading } from '../../redux/user/user.selectors';
import { userFetchAsync } from '../../redux/user/user.actions';
import useManageInput from '../../hooks/manage-input.hook';
import InputField from '../../components/form/input-field/input-field.component';
import { CustomButton } from '../../components/form/custom-button/custom-button.component';
import SpinnerLoader from '../../components/ui/spinner-loader/spinner-loader.component';

// sign-up page
export default function SignUp() {
	/** 'useManageInput' hook: `fields` is initially an empty object {}
	 * and will get values while user triggered handleChange function by
	 * typing values inside inputs
	 */
	const [fields, handleChange] = useManageInput();
	const { first_name, last_name, email, password, password_confirm } = fields;

	const isLoading = useSelector(selectUserIsLoading);
	const dispatch = useDispatch();

	/** Triggered when user clicked on sign-up button */
	const handleSubmit = async (event) => {
		event.preventDefault();

		// checks if inputs are all set
		if (!first_name || !last_name || !email || !password || !password_confirm) {
			return alert('All fields are required');
		}

		// checks is password and password_confirm are not differents
		if (password !== password_confirm) {
			return alert("Password aren't identicals");
		}

		/**
		 * Async redux action which will :
		 * 1. First toogle `isLoading` value to 'true' (which will display the spinner)
		 * 2. Pass user credentials to nodejs server and hopefully gets back this
		 * response `{credentials, token}` that will be save to redux store
		 * 3. Gets back `isLoading` value to 'false'. Because the token value is no longer
		 * null, the user is redirected to dashboard
		 */
		dispatch(
			userFetchAsync({
				path: 'auth/register',
				credentials: {
					first_name,
					last_name,
					email,
					password,
				},
			})
		);
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
							<CustomButton
								type="submit"
								$validate
								$width="100%"
								$padding="10px 20px"
							>
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
