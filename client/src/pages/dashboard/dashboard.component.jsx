import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TopNavbar from '../../components/top-navbar/top-navbar.component';
import SidebarWrapper from '../../components/sidebar-wrapper/sidebar-wrapper.component';
import SpinnerLoader from '../../components/spinner-loader/spinner-loader.component';
import './dashboard.styles.scss';

export default function Dashboard() {
	const isLoading = useSelector((state) => state.user.isLoading);

	return (
		<Fragment>
			{isLoading ? (
				<SpinnerLoader />
			) : (
				<main className="dashboard-wrapper">
					<SidebarWrapper />
					<div className="dashboard-content">
						<TopNavbar />
						<div className="dashboard-main">
							<Outlet />
						</div>
					</div>
				</main>
			)}
		</Fragment>
	);
}
