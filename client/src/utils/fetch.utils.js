const BASE_URL = 'http://localhost:4000/api/v1';

async function getData(path, token) {
	const response = await fetch(`${BASE_URL}/${path}`, {
		method: 'GET',
		headers: {
			...(token && { Authorization: `Bearer ${token}` }),
		},
	});

	return await response.json();
}

// handle POST or PATCH requests methods !
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
