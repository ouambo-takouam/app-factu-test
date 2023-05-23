import { createSelector } from '@reduxjs/toolkit';

export const selectCustomers = (state) => state.data.customers;

export const selectOneCustomer = (customerId) =>
	createSelector(selectCustomers, (customers) =>
		customers.find((customer) => customer._id === customerId)
	);

export const selectInvoices = (state) => state.data.invoices;
export const selectDataIsLoading = (state) => state.data.isLoading;
export const selectDataErrorWhiteLoading = (state) => state.data.error;
