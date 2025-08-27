'use server'

import {cookies} from 'next/headers'

// Basic cookie operations
export async function setCookie(name: string, value: any, days = 7) {
	const cookieStore = await cookies()
	const data = typeof value === 'string' ? value : JSON.stringify(value)

	cookieStore.set(name, data, {
		maxAge: days * 24 * 60 * 60,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
		path: '/',
	})
}

export async function getCookie(name: string) {
	try {
		const cookieStore = await cookies()
		const value = cookieStore.get(name)?.value

		if (!value) return null

		try {
			return JSON.parse(value)
		} catch {
			return value
		}
	} catch {
		return null
	}
}

export async function removeCookie(name: string) {
	const cookieStore = await cookies()
	cookieStore.delete(name)
}

// Auth helpers
export async function setAuthToken(token: string, rememberMe = false) {
	await setCookie('authToken', token, rememberMe ? 30 : 1)
}

export async function getAuthToken() {
	return await getCookie('authToken')
}

export async function removeAuthToken() {
	await removeCookie('authToken')
}

export async function isAuthenticated() {
	const token = await getCookie('authToken')
	return !!token
}

// Locale helpers
export async function setLocale(locale: string) {
	await setCookie('locale', locale, 365)
}

export async function getLocale() {
	const locale = await getCookie('locale')
	return locale || 'en'
}
