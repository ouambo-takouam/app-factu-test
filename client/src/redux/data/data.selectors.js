import { createSelector } from '@reduxjs/toolkit';

export const selectCustomers = (state) => state.data.customers;

export const selectProducts = (state) => state.data.products;

export const selectCustomersToExport = createSelector(
	selectCustomers,
	(customers) =>
		customers
			? customers.map((customer) => ({
					Nom: customer.first_name,
					Prenom: customer.last_name,
					Entreprise: customer.company,
					Email: customer.email,
					Telephone: customer.phone1,
					Site_web: customer.website,
					Notes: customer.notes,
					Mode_payment: customer.payment_mode,
					Mode_d_envoie_prefere: customer.preferred_shipping_method,
			  }))
			: []
);

// sorting customers list alphabetically
export const selectOrderedCustomers = createSelector(
	selectCustomers,
	(customers) =>
		customers
			? customers.sort((a, b) => {
					const display_name_A = a.display_name.toLowerCase();
					const display_name_B = b.display_name.toLowerCase();

					if (display_name_A < display_name_B) {
						return -1;
					}
					if (display_name_A > display_name_B) {
						return 1;
					}
					return 0;
			  })
			: []
);

export const selectOneCustomer = (customerId) =>
	createSelector(selectCustomers, (customers) =>
		customers.find((customer) => customer._id === customerId)
	);

export const selectInvoices = (state) => state.data.invoices;
export const selectDataIsLoading = (state) => state.data.isLoading;
export const selectDataError = (state) => state.data.error;
