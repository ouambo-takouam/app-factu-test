// add new entry to state data. It can be customers, invoices, etc...
export function addItem(itemToAdd, itemsArray) {
	console.log('Item to ADD: ', itemToAdd);
	console.log('Existig items list: ', itemsArray);
	return [...itemsArray, itemToAdd];
}

// update existing data entry
export function updateItem(itemToUpdate, itemsArray) {
	console.log('Item to update: ', itemToUpdate);
	console.log('Existig items list: ', itemToUpdate);
	return itemsArray.map((item) => {
		if (item._id === itemToUpdate._id) {
			return itemToUpdate;
		}

		return item;
	});
}
