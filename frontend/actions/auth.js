import fetch from 'isomorphic-fetch'
import cookie from 'js-cookie'

import { API } from '../config'

export const signup = user => {
	return authFetch('/api/signup', user)
}

export const signin = user => {
	return authFetch('/api/signin', user)
}

export const signout = async next => {
	console.log(1)
	removeCookie('token')
	removeLocalStorage('user')
	next()

	try {
		await fetch(`${API}/signout`, {
			method: 'GET',
		})
	} catch (error) {
		console.log(error)
	}
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
			sameSite: 'strict',
		})
	}
}

// get user token from cookie
export const getCookie = key => {
	// Check if is running in the FE (since Next.js runs also in BE)
	if (process.browser) {
		return cookie.get(key)
	}
}

// remove user token from cookie
export const removeCookie = key => {
	// Check if is running in the FE (since Next.js runs also in BE)
	if (process.browser) {
		cookie.remove(key)
	}
}

// get from localstorage
export const getLocalStorage = key => {
	if (process.browser) {
		return localStorage.getItem(key)
	}
}

// set to localstorage
export const setLocalStorage = (key, value) => {
	if (process.browser) {
		localStorage.setItem(key, JSON.stringify(value))
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
		const cookie = getCookie('token')
		if (cookie) {
			const user = getLocalStorage('user')
			console.log(user)
			return user ? JSON.parse(user) : null
		}
	}
}
