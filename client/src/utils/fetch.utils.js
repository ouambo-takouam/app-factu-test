const BASE_URL = 'http://localhost:4000/api/v1';

/**
 * Function used to make a GET request, using params (path and token)
 * passed by the component.
 */
async function getData(path, token) {
	const response = await fetch(`${BASE_URL}/${path}`, {
		method: 'GET',
		headers: {
			...(token && { Authorization: `Bearer ${token}` }),
		},
	});

	return await response.json();
}

/**
 * Function used to make a POST or PATCH request. It receives two
 * more params (method and data)
 */
async function postData(method, path, data, token) {
	const response = await fetch(`${BASE_URL}/${path}`, {
		method,
		headers: {
			...(data && { 'Content-Type': 'application/json' }),
			...(token && { Authorization: `Bearer ${token}` }),
		},
		...(data && { body: JSON.stringify(data) }),
	});

	return await response.json();
}

export { getData, postData };
