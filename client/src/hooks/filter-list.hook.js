import { useState } from 'react';

// custom hook created to filter a list of data
export default function useFilterList(data, filterParam) {
	/** data: object list to filter on
	 *  filterParam: obj property used to do filtering
	 */
	const [input, setInput] = useState('');

	const filteredList = data.filter((item) =>
		item[[filterParam]].toLowerCase().includes(input.toLowerCase())
	);

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	return [filteredList, handleChange];
}
