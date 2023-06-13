import { useState } from 'react';

/**
 * ## Creates an initial `boolean` state value provided by the component
 * ## 'handleHide' function toogles that state (true/false).
 */
export default function useHide(initial) {
	const [hide, setHide] = useState(initial);

	const handleHide = () => {
		setHide((prev) => !prev);
	};

	return { hide, handleHide };
}
