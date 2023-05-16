import { useDispatch, useSelector } from 'react-redux';
import { unSubscribeUser } from '../../../redux/user/user.actions';
import './account-avatar-modal.styles.scss';

export default function AccountAvatarModal({ handleChange }) {
	const dispatch = useDispatch();
	const credentials = useSelector((state) => state.user.credentials);
	const { first_name, last_name, email } = credentials;

	const handleClick = () => {
		dispatch(unSubscribeUser());
		handleChange();
	};

	return (
		<div className="account-avatar-modal">
			<div className="account-avatar-modal-details">
				<div className="avatar-icon">{first_name.charAt(0).toUpperCase()}</div>
				<h1>
					{first_name} {last_name}
				</h1>
				<p>{email}</p>
			</div>
			<button type="btn" onClick={handleClick}>
				Se déconnecter
			</button>
		</div>
	);
}
