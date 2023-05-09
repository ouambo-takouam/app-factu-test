import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../pages/sign-in/sign-in.component';
import SignUp from '../pages/sign-up/sign-up.component';
import Dashboard from '../pages/dashboard/dashboard.component';
import ShortcutWrapper from '../components/shortcuts-wrapper/shortcuts-wrapper.component';

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
		path: '/app',
		element: <Dashboard />,
		children: [
			{
				path: 'tableau-de-bord',
				element: <ShortcutWrapper />,
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
				element: <p>Clients</p>,
			},
			{
				path: 'suivi-des-heures',
				element: <p>Suivi des heures</p>,
			},
			{
				path: 'produits-et-services',
				element: <p>Produits et services</p>,
			},
			{
				path: 'fournisseurs',
				element: <p>Suivez vos paiments sortants</p>,
			},

			/** ---- Clients et prospects ---- */
			{
				path: 'clients',
				element: <p>Clients</p>,
			},
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
