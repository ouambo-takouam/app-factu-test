import { useState } from 'react';

/**
 * ## Creates an initial empty object `{}` as local state. That initial
 *  value can be provided by the component which calls the hook.
 * ## 'handleChange' function will be used to update that state.
 */
export default function useManageInput(initialData = {}) {
	const [fields, setFields] = useState(initialData);

	// receives events from component and handles it
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFields((prev) => ({ ...prev, [name]: value }));
	};

	const updateField = (name, value) => {
		setFields((prev) => ({ ...prev, [name]: value }));
	};

	return [fields, handleChange, updateField];
}
