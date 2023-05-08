import { ReactComponent as Swipe } from '../../assets/images/svg/swipe.svg';
import { ReactComponent as Search } from '../../assets/images/svg/search.svg';
import { ReactComponent as Bell } from '../../assets/images/svg/bell.svg';
import { ReactComponent as Settings } from '../../assets/images/svg/settings.svg';
import './top-navbar.styles.scss';

export default function TopNavbar() {
	return (
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
			</ul>
		</nav>
	);
}
