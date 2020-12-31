import fetch from 'isomorphic-fetch'
import cookie from 'js-cookie'

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

// set user token to cookie
export const setCookie = (key, value) => {
	// Check if is running in the FE (since Next.js runs also in BE)
	if (process.browser) {
		cookie.set(key, value, {
			expires: 1,
		})
	}
}

// get user token from cookie
export const getCookie = key => {
	// Check if is running in the FE (since Next.js runs also in BE)
	if (process.browser) {
		cookie.get(key)
	}
}

// remove user token from cookie
export const removeCookie = key => {
	// Check if is running in the FE (since Next.js runs also in BE)
	if (process.browser) {
		cookie.remove(key)
	}
}

// set to localstorage
export const setLocalStorage = (key, value) => {
	if (process.browser) {
		localStorage.setItem(key, JSON.stringify(value))
	}
}

export const getLocalStorage = key => {
	if (process.browser) {
		localStorage.getItem(key)
	}
}

// remove from localstorage
export const removeLocalStorage = key => {
	if (process.browser) {
		localStorage.removeItem(key)
	}
}

// authenticate by pass data to cookie and localstorage
export const authenticate = (data, next) => {
	setCookie('token', data.token) // store sensitive data in cookie
	setLocalStorage('user', data.user)
	next()
}

export const authN = () => {
	if (process.browser) {
		const cookieChecked = getCookie('token')
		if (cookieChecked) {
			const user = getLocalStorage('user')
			return user ? JSON.parse(user) : null
		}
	}
}
