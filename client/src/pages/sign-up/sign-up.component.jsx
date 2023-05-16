import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { postData } from '../../utils/fetch.utils';
import { useDispatch, useSelector } from 'react-redux';
import useManageInput from '../../hooks/manage-input.hook';
import InputField from '../../components/form/input-field/input-field.component';
import { CustomButton } from '../../components/form/custom-button/custom-button.component';
import SpinnerLoader from '../../components/ui/spinner-loader/spinner-loader.component';

// sign-up page
export default function SignUp() {
	// this custom hook will be is used to store and update user data
	const [fields, handleChange] = useManageInput();
	const { first_name, last_name, email, password, password_confirm } = fields;

	/** getting from the store 'isLoading' data. 'dispatch' will be used to dispatch 
	redux actions */
	const isLoading = useSelector((state) => state.user.isLoading);
	const dispatch = useDispatch();

	// 'handleSubmit' function handles form submition
	const handleSubmit = async (event) => {
		event.preventDefault();

		// checks if inputs are all set
		if (!first_name || !last_name || !email || !password || !password_confirm) {
			return alert('All fields are required');
		}

		// checks is password and password_confirm are the same
		if (password !== password_confirm) {
			return alert("Password aren't identicals");
		}

		/** this action is for displaying the spinnerLoader by toogling the 'isLoading' redux store value
		 *  from false to true
		 */
		// dispatch(toogleLoading());

		// perform fetch 'POST' type to the server
		const { user, token } = await postData('auth/register', {
			first_name,
			last_name,
			email,
			password,
		});

		// store updated with credentials and token sent by server
		dispatch({
			type: 'user/subscribed',
			payload: { credentials: user, token },
		});
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
