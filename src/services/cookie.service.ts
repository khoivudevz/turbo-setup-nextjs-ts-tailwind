import Cookies from 'js-cookie'

export const cookieServices = {
	setCookie: (key: string, data: any, options = {}) => {
		Cookies.set(key, data, options)
	},

	getCookie: (key: string) => {
		const value = Cookies.get(key)
		if (value) return value
		return null
	},

	removeCookie: (key: string) => {
		Cookies.remove(key)
	},
}
