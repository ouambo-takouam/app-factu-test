import { useState } from 'react';

export default function useToggleItems({ arr, openItem }) {
	// 2
	const initialState = arr.reduce((acc, current) => {
		if (acc.length === openItem) {
			return [...acc, { id: acc.length + 1, active: true, data: current }];
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
	};

	return [toogleItems, updateToogleItems];
}
