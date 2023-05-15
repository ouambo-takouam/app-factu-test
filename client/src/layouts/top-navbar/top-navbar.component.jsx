import { Fragment } from 'react';
import useHide from '../../hooks/hide.hook';
import { useSelector } from 'react-redux';
import { ReactComponent as Swipe } from '../../assets/images/svg/swipe.svg';
import { ReactComponent as Search } from '../../assets/images/svg/search.svg';
import { ReactComponent as Bell } from '../../assets/images/svg/bell.svg';
import { ReactComponent as Settings } from '../../assets/images/svg/settings.svg';
import AccountAvatarModal from './account-avatar-modal/account-avatar-modal.components';
import './top-navbar.styles.scss';

export default function TopNavbar() {
	const { hide, handleChange } = useHide();
	const credentials = useSelector((state) => state.user.credentials);

	return (
		<Fragment>
			<nav className="top-navigation">
				<ul className="left-wrapper">
					<li className="swipe-btn">
						<Swipe />
					</li>
					<li className="client-title">
						<span>videodecompta</span>
					</li>
				</ul>
				<ul className="right-wrapper">
					<li className="icon">
						<Search />
					</li>
					<li className="icon">
						<Bell />
					</li>
					<li className="icon">
						<Settings />
					</li>
					<li className="icon" onClick={() => handleChange()}>
						<span className="account-avatar">
							{credentials.first_name.charAt(0).toUpperCase()}
						</span>
					</li>
				</ul>
			</nav>
			{!hide && <AccountAvatarModal handleChange={handleChange} />}
		</Fragment>
	);
}
