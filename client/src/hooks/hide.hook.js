import { useState } from 'react';

/**
 * ## Creates an initial `boolean` state value provided by the component
 * ## 'handleHide' function will toogle that state.
 */
export default function useHide(initial) {
	const [hide, setHide] = useState(initial);

	const handleHide = () => {
		setHide((prev) => !prev);
	};

	return { hide, handleHide };
}
