import { useState } from 'react';

// Ce hook prend un liste de valeurs et permet de modifier l'etat
// de chacune d'elle
export default function useToggleItems({ arr, firstItemOpen = false }) {
	const initialState = arr.reduce((acc, current) => {
		if (acc.length === 0 && firstItemOpen) {
			return [{ id: acc.length + 1, active: true, data: current }];
		}

		return [...acc, { id: acc.length + 1, active: false, data: current }];
	}, []);

	const [toogleItems, setToogleItems] = useState(initialState);

	const updateToogleItems = (id) => {
		setToogleItems(
			toogleItems.map((toogleItem) => {
				if (toogleItem.id === id) {
					return { ...toogleItem, active: true };
				}
				return { ...toogleItem, active: false };
			})
		);
		console.log(toogleItems);
	};

	return [toogleItems, updateToogleItems];
}
