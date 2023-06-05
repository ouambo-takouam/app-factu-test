// add new entry to state data. It can be customers, invoices, etc...
export function addItem(itemToAdd, itemsArray) {
	return [...itemsArray, itemToAdd];
}

// update existing data entry
export function updateItem(itemToUpdate, itemsArray) {
	return itemsArray.map((item) => {
		if (item._id === itemToUpdate._id) {
			return itemToUpdate;
		}

		return item;
	});
}
