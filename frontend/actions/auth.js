import fetch from 'isomorphic-fetch'
import { API } from '../config'

export const signup = user => {
	return authFetch('/api/signup', user)
}

export const signin = user => {
	return authFetch('/api/signin', user)
}

function authFetch(endPoint, user) {
	return fetch(`${API}${endPoint}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:3000',
		},
		body: JSON.stringify(user),
	})
		.then(response => response.json())
		.catch(console.log)
}
