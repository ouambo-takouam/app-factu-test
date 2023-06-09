import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserToken } from '../../redux/user/user.selectors';
import { dataFetchAsync } from '../../redux/data/data.actions';
import TopNavbar from '../../layouts/top-navbar/top-navbar.component';
import SidebarWrapper from '../../layouts/sidebar-wrapper/sidebar-wrapper.component';
import './dashboard.styles.scss';

export default function Dashboard() {
	const token = useSelector(selectUserToken);

	const dispatch = useDispatch();
	/** Loading customers list from remote server
	 *  The saga logic need to know the 'path' and 'token' in order
	 *  to properly make request to server.
	 */
	dispatch(dataFetchAsync({ path: 'customers', token }));
	dispatch(dataFetchAsync({ path: 'products', token }));
	dispatch(dataFetchAsync({ path: 'invoices', token }));

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
