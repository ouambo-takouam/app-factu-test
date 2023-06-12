import { createBrowserRouter, useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../redux/user/user.selectors';
import Homepage from '../pages/homepage/homepage.component';
import SignIn from '../pages/sign-in/sign-in.component';
import SignUp from '../pages/sign-up/sign-up.component';
import Dashboard from '../pages/dashboard/dashboard.component';
import Customers from '../pages/customers/customers.component';
import CustomerDetails from '../pages/customer-details/customer-details.component';
import ProductsServices from '../pages/products-services/products-services.component';
import ShortcutsWrapper from '../components/ui/shortcuts-wrapper/shortcuts-wrapper.component';

/** This is the app Router */
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
	},
	{
		path: '/sign-up',
		element: (
			<RequireAuth redirectTo="/app/tableau-de-bord" inversed>
				<SignUp />
			</RequireAuth>
		),
	},
	{
		path: '/sign-in',
		element: (
			<RequireAuth redirectTo="/app/tableau-de-bord" inversed>
				<SignIn />
			</RequireAuth>
		),
	},
	{
		path: '/app',
		element: (
			<RequireAuth redirectTo="/sign-in">
				<Dashboard />
			</RequireAuth>
		),
		children: [
			{
				path: 'tableau-de-bord',
				element: <ShortcutsWrapper />,
			},

			/** ---- Mon entreprise ---- */
			{
				path: 'mon-entreprise',
				element: <p>Mon entreprise</p>,
			},
			{
				path: 'tresorerie',
				element: <p>SOLDE DE TRÉSORERIE ACTUEL</p>,
			},
			{
				path: 'rapports',
				element: <p>Rapports</p>,
			},

			/** ---- Ma gestion comptable ---- */
			{
				path: 'operations',
				element: <p>Opérations</p>,
			},
			{
				path: 'regles-bancaires',
				element: <p>Règles bancaires</p>,
			},
			{
				path: 'plan-comptable',
				element: <p>Plan comptable</p>,
			},
			{
				path: 'tags',
				element: <p>Tags</p>,
			},
			{
				path: 'rapprochement-bancaire',
				element: <p>Rapprochement bancaire</p>,
			},

			/** ---- Ma gestion commerciale ---- */
			{
				path: 'clients',
				element: <Customers />,
			},
			{
				path: 'clients/:clientId',
				element: <CustomerDetails />,
			},
			{
				path: 'produits-et-services',
				element: <ProductsServices />,
			},
			{
				path: 'fournisseurs',
				element: <p>Suivez vos paiments sortants</p>,
			},

			/** ---- Clients et prospects ---- */
			{
				path: 'marketing',
				element: <p>Boost business with Mailchimp</p>,
			},

			/** ---- Mes employes ---- */
			{
				path: 'employees',
				element: (
					<p>
						Conservez dans quickbook toutes les infos utiles sur vos employes
					</p>
				),
			},
			{
				path: 'suivi-des-heures',
				element: <p>Retour sur ma gestion commerciale -- time/overview</p>,
			},

			/** ---- Taxes ---- */
			{
				path: 'tax/home',
				element: <p>Une gestion fiscale plus simple et intelligente</p>,
			},

			/** ---- Taxes ---- */
			{
				path: 'appcenter/findapps',
				element: (
					<p>
						Gagnez du temps et gérez votre entreprise plus efficacement en
						connectant vos applis à QuickBooks.
					</p>
				),
			},
		],
	},
]);

/**
 * This function will redirect the user based on token value and
 * passed params. So:
 * -- User can access dashboard only after login or register
 * -- When user is already logged in, he can't go back to login/regiser page
 * unless he/she logged out first !
 */
function RequireAuth({ children, redirectTo, inversed }) {
	const token = useSelector(selectUserToken);
	const { pathname } = useLocation();

	if (inversed) {
		return token ? <Navigate to={redirectTo} state={pathname} /> : children;
	}

	return token ? children : <Navigate to={redirectTo} state={pathname} />;
}
