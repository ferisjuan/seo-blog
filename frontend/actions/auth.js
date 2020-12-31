import fetch from 'isomorphic-fetch'
import { API } from '../config'

export const signup = user => {
	return fetch(`${API}/api/signup`, {
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
