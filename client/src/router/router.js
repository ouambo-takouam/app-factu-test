import SignIn from '../pages/sign-in/sign-in.component';
import SignUp from '../pages/sign-up/sign-up.component';
import Dashboard from '../pages/dashboard/dashboard.component';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/app/sign-in',
		element: <SignIn />,
	},
	{
		path: '/app/sign-up',
		element: <SignUp />,
	},
	{
		path: '/app/get-things-done',
		element: <Dashboard />,
	},
]);
