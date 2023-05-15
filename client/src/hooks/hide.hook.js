import { useState } from 'react';

// custom hook created to display or not a component on the DOM
export default function useHide() {
	const [hide, setHide] = useState(true);

	const handleHide = () => {
		setHide((prev) => !prev);
	};

	return { hide, handleHide };
}
