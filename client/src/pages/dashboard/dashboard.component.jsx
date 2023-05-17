import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { dataFetchAsync } from '../../redux/data/data.actions';
import TopNavbar from '../../layouts/top-navbar/top-navbar.component';
import SidebarWrapper from '../../layouts/sidebar-wrapper/sidebar-wrapper.component';
import './dashboard.styles.scss';

export default function Dashboard() {
	const token = useSelector((state) => state.user.token);

	const dispatch = useDispatch();
	dispatch(dataFetchAsync({ path: 'customers', token }));

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
