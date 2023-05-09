import { useState } from 'react';

export default function useHide() {
	const [hide, setHide] = useState(true);

	const handleChange = () => {
		setHide((prev) => !prev);
	};

	return { hide, handleChange };
}
