import { useState } from 'react';

/**
 * ## This custom hook creates by default an initial empty object `{}` as local state
 * ## 'handleChange' function will used to update that state.
 */
export default function useManageInput(initialData = {}) {
	const [fields, setFields] = useState(initialData);

	// receives events from component and handles it
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFields((prev) => ({ ...prev, [name]: value }));
	};

	return [fields, handleChange];
}
