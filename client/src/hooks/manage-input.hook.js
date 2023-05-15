import { useState } from 'react';

/** Custom Hook created to store and update data like user input
 *  ex: username, email, password...
 */
export default function useManageInput() {
	const [fields, setFields] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFields((prev) => ({ ...prev, [name]: value }));
	};

	return [fields, handleChange];
}
