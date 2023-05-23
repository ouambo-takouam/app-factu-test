import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserIsLoading } from '../../redux/user/user.selectors';
import { userFetchAsync } from '../../redux/user/user.actions';
import useManageInput from '../../hooks/manage-input.hook';
import InputField from '../../components/form/input-field/input-field.component';
import google_logo from '../../assets/images/png/google-mini-logo.png';
import { CustomButton } from '../../components/form/custom-button/custom-button.component';
import SpinnerLoader from '../../components/ui/spinner-loader/spinner-loader.component';
import './sign-in.styles.scss';

// sign-in page
export default function SignIn() {
	// this custom hook will be is used to store and update user data
	const [fields, handleChange] = useManageInput();
	const { email, password } = fields;

	/** getting from the store 'isLoading' data. 'dispatch' will be used to dispatch 
	redux actions */
	const isLoading = useSelector(selectUserIsLoading);
	const dispatch = useDispatch();

	// 'handleSubmit' function handles form submition
	const handleSubmit = async (event) => {
		event.preventDefault();

		// checks if inputs are all set
		if (!email || !password) {
			return alert('All fields are required');
		}

		/** this action is for displaying the spinnerLoader by toogling the 'isLoading' redux store value
		 *  from false to true
		 */
		dispatch(
			userFetchAsync({
				path: 'auth/login',
				credentials: {
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
						<h2>Connexion</h2>
						<CustomButton $width="100%">
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
							<CustomButton
								type="submit"
								$validate
								$width="100%"
								$padding="10px 20px"
							>
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
							<Link to="/sign-up">Créer un compte</Link>.
						</p>
					</div>
				</div>
			)}
		</Fragment>
	);
}
