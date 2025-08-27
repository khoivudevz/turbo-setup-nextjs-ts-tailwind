'use server'

import {cookieLocaleKey, defaultLocale, Locale} from '@/i18n/config'
import {cookieServices} from './cookie.service'

export const localeServerServices = {
	async getUserLocale() {
		const localeCookie = await cookieServices.server.get(cookieLocaleKey)
		const locale = localeCookie || defaultLocale
		return locale as Locale
	},

	async setUserLocale(locale: Locale) {
		await cookieServices.server.set(cookieLocaleKey, locale)
	},
}
