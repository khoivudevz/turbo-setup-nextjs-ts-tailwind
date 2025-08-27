'use client'

// Client-side cookie utilities
const clientCookies = {
	set: (name: string, value: any, days = 7) => {
		if (typeof window === 'undefined') return

		const data = typeof value === 'string' ? value : JSON.stringify(value)
		const expires = new Date(
			Date.now() + days * 24 * 60 * 60 * 1000
		).toUTCString()
		const secure = process.env.NODE_ENV === 'production' ? '; secure' : ''

		document.cookie = `${name}=${encodeURIComponent(data)}; expires=${expires}; path=/; samesite=lax${secure}`
	},

	get: (name: string) => {
		if (typeof window === 'undefined') return null

		const cookies = document.cookie.split(';')
		const cookie = cookies.find((c) => c.trim().startsWith(`${name}=`))

		if (!cookie) return null

		try {
			const value = decodeURIComponent(cookie.split('=')[1])
			return JSON.parse(value)
		} catch {
			return decodeURIComponent(cookie.split('=')[1])
		}
	},

	remove: (name: string) => {
		if (typeof window === 'undefined') return
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
	},
}

// Client-side cookie service
export const cookieClientService = {
	// Basic operations
	set: clientCookies.set,
	get: clientCookies.get,
	remove: clientCookies.remove,

	// Backward compatible methods
	setCookie: (key: string, data: any, options: {days?: number} = {}) => {
		clientCookies.set(key, data, options.days)
	},

	getCookie: (key: string) => {
		return clientCookies.get(key)
	},

	removeCookie: (key: string) => {
		clientCookies.remove(key)
	},

	// Auth helpers
	setAuthToken: (token: string, rememberMe = false) => {
		clientCookies.set('authToken', token, rememberMe ? 30 : 1)
	},

	getAuthToken: () => {
		return clientCookies.get('authToken')
	},

	removeAuthToken: () => {
		clientCookies.remove('authToken')
	},

	isAuthenticated: () => {
		return !!clientCookies.get('authToken')
	},

	// Locale helpers
	setLocale: (locale: string) => {
		clientCookies.set('locale', locale, 365)
	},

	getLocale: () => {
		return clientCookies.get('locale') || 'en'
	},
}
