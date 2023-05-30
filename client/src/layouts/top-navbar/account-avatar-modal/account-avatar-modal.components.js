import { useDispatch, useSelector } from 'react-redux';
import { selectUserCredentials } from '../../../redux/user/user.selectors';
import { userDisconnected } from '../../../redux/user/user.actions';
import './account-avatar-modal.styles.scss';

export default function AccountAvatarModal({ handleChange }) {
	const dispatch = useDispatch();
	const credentials = useSelector(selectUserCredentials);

	const { first_name, last_name, email } = credentials;

	const handleClick = () => {
		dispatch(userDisconnected());
		handleChange();
	};

	return (
		<div className="account-avatar-modal" onClick={handleChange}>
			<div className="account-avatar-modal-body">
				<div className="account-avatar-modal-details">
					<div className="avatar-icon">
						{first_name.charAt(0).toUpperCase()}
					</div>
					<h1>
						{first_name} {last_name}
					</h1>
					<p>{email}</p>
				</div>
				<button type="btn" onClick={handleClick}>
					Se déconnecter
				</button>
			</div>
		</div>
	);
}
