import { useState } from 'react';

/**
 * ## Receives [data] (data can be any type) and creates [{id, active}, {...}, ..]
 * as local state.
 * ## The component uses 'updateToogleItems' to modify that state by passing
 * the corresponding `id`, that will toggle active property !
 */
export default function useToggleItems({ arr, activeId }) {
	const initialState = arr.reduce((acc, current) => {
		if (activeId === acc.length) {
			return [...acc, { id: acc.length, active: true, data: current }];
		}

		return [...acc, { id: acc.length, active: false, data: current }];
	}, []);

	const [toogleItems, setToogleItems] = useState(initialState);

	// update the matched object on state based on provided `id`
	const updateToogleItems = (id) => {
		setToogleItems(
			toogleItems.map((toogleItem) => {
				if (toogleItem.id === id) {
					return { ...toogleItem, active: true };
				}
				return { ...toogleItem, active: false };
			})
		);
	};

	return [toogleItems, updateToogleItems];
}
