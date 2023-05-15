import { Outlet } from 'react-router-dom';
import TopNavbar from '../../layouts/top-navbar/top-navbar.component';
import SidebarWrapper from '../../layouts/sidebar-wrapper/sidebar-wrapper.component';
import './dashboard.styles.scss';

export default function Dashboard() {
	return (
		<main className="dashboard-wrapper">
			<SidebarWrapper />
			<div className="dashboard-content">
				<TopNavbar />
				<div className="dashboard-main">
					<Outlet />
				</div>
			</div>
		</main>
	);
}
