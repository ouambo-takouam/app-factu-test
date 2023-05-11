import { useState } from 'react';

export default function useManageInput() {
	const [fields, setFields] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFields((prev) => ({ ...prev, [name]: value }));
	};

	return [fields, handleChange];
}
