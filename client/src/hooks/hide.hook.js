import { useState } from 'react';

// custom hook created to display or not a component on the DOM
export default function useHide(initial) {
	const [hide, setHide] = useState(initial);

	const handleHide = () => {
		setHide((prev) => !prev);
	};

	return { hide, handleHide };
}
