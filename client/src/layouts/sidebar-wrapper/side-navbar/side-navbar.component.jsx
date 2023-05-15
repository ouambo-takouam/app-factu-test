import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/svg/logo.svg';
import { ReactComponent as LogoText } from '../../../assets/images/svg/logo-text.svg';
import { ReactComponent as Pen } from '../../../assets/images/svg/pen.svg';
import { ReactComponent as Home } from '../../../assets/images/svg/home.svg';
import { ReactComponent as Scale } from '../../../assets/images/svg/scale.svg';
import { ReactComponent as Calculator } from '../../../assets/images/svg/calculator.svg';
import { ReactComponent as Money } from '../../../assets/images/svg/money.svg';
import { ReactComponent as Client } from '../../../assets/images/svg/clients.svg';
import { ReactComponent as Employees } from '../../../assets/images/svg/employees.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import './side-navbar.styles.scss';

export default function SideNavbar({
	toogleItems,
	activeItem,
	setActiveItem,
	updateToogleItems,
}) {
	return (
		<nav className={`sidebar-navigation ${activeItem && 'open'}`}>
			<div className="sidebar-header">
				<div className="sidebar-logo">
					<Link to="/">
						<Logo />
						<LogoText />
					</Link>
				</div>
				<div className="sidebar-new-btn">
					<button className="new-btn">
						<span className="minus-sign">+</span>
						<span className="new-text">Nouveau</span>
					</button>
				</div>
			</div>
			<div className="sidebar-menu">
				<ul>
					<li className="section-header-wrapper">
						<div className="section-header">
							{activeItem ? (
								<button className="section-header-hamburger">
									<GiHamburgerMenu size={16} />
								</button>
							) : (
								<div className="section-header-elements">
									<span>Menu</span>
									<button>
										<Pen />
									</button>
								</div>
							)}
						</div>
					</li>
					<li className="nav-item">
						<Link
							className="nav-item-link"
							to="tableau-de-bord"
							onClick={() => setActiveItem(undefined)}
						>
							<div className="nav-item-icon-wrapper">
								<span className="nav-item-icon-inner-wrapper">
									<Home />
								</span>
							</div>
							<span className="nav-item-link-label">À faire</span>
						</Link>
					</li>
					<li
						className="nav-item"
						onClick={() => updateToogleItems(toogleItems[0].id)}
					>
						<Link className="nav-item-link" to="mon-entreprise">
							<div className="nav-item-icon-wrapper">
								<span className="nav-item-icon-inner-wrapper">
									<Scale />
								</span>
							</div>
							<span className="nav-item-link-label">Mon entreprise</span>
						</Link>
					</li>
					<li
						className="nav-item"
						onClick={() => updateToogleItems(toogleItems[1].id)}
					>
						<Link className="nav-item-link" to="operations">
							<div className="nav-item-icon-wrapper">
								<span className="nav-item-icon-inner-wrapper">
									<Calculator />
								</span>
							</div>
							<span className="nav-item-link-label">Ma gestion comptable</span>
						</Link>
					</li>
					<li
						className="nav-item"
						onClick={() => updateToogleItems(toogleItems[2].id)}
					>
						<Link className="nav-item-link" to="suivi-des-heures">
							<div className="nav-item-icon-wrapper">
								<span className="nav-item-icon-inner-wrapper">
									<Money />
								</span>
							</div>
							<span className="nav-item-link-label">
								Ma gestion commerciale
							</span>
						</Link>
					</li>
					<li
						className="nav-item"
						onClick={() => updateToogleItems(toogleItems[3].id)}
					>
						<Link className="nav-item-link" to="clients">
							<div className="nav-item-icon-wrapper">
								<span className="nav-item-icon-inner-wrapper">
									<Client />
								</span>
							</div>
							<span className="nav-item-link-label">Clients et prospects</span>
						</Link>
					</li>
					<li
						className="nav-item"
						onClick={() => updateToogleItems(toogleItems[4].id)}
					>
						<Link className="nav-item-link" to="employees">
							<div className="nav-item-icon-wrapper">
								<span className="nav-item-icon-inner-wrapper">
									<Employees />
								</span>
							</div>
							<span className="nav-item-link-label">Mes employees</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
