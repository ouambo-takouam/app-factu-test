import { useState } from 'react';

// custom hook created to filter a list of data
export default function useFilterList(data) {
	const [input, setInput] = useState('');

	const filteredList = data.filter((item) =>
		item.toLowerCase().includes(input.toLowerCase())
	);

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	return [filteredList, handleChange];
}
