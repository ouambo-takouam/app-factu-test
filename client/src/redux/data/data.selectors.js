import { createSelector } from '@reduxjs/toolkit';

export const selectData = (state) => state.data;

export const selectDocuments = (target) =>
	createSelector(selectData, (data) => data[[target]]);

export const selectOneDocument = (target, documentId) =>
	createSelector(selectDocuments(target), (documents) =>
		documents.find((document) => document._id === documentId)
	);

export const selectDataIsLoading = (state) => state.data.isLoading;
export const selectDataError = (state) => state.data.error;

// sorting customers list alphabetically
// export const selectOrderedCustomers = createSelector(
// 	selectCustomers,
// 	(customers) =>
// 		customers
// 			? customers.sort((a, b) => {
// 					const display_name_A = a.display_name.toLowerCase();
// 					const display_name_B = b.display_name.toLowerCase();

// 					if (display_name_A < display_name_B) {
// 						return -1;
// 					}
// 					if (display_name_A > display_name_B) {
// 						return 1;
// 					}
// 					return 0;
// 			  })
// 			: []
// );
