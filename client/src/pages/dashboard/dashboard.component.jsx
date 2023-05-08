import SidebarWrapper from '../../components/sidebar-wrapper/sidebar-wrapper.component';
import TopNavbar from '../../components/top-navbar/top-navbar.component';
import ShortcutWrapper from '../../components/shortcuts-wrapper/shortcuts-wrapper.component';
// import ClientModal from '../../components/client-modal/client-modal.component';
import './dashboard.styles.scss';

export default function Dashboard() {
	return (
		<main className="dashboard-wrapper">
			<SidebarWrapper />
			<div className="dashboard-content">
				<TopNavbar />
				<div className="dashboard-main">
					<ShortcutWrapper />
					{/*<ClientModal />*/}
				</div>
			</div>
		</main>
	);
}
