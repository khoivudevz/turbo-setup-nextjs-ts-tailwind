'use client'

import {cookieLocaleKey, defaultLocale, Locale} from '@/i18n/config'
import {cookieServices} from './cookie.service'

export const localeClientServices = {
	getUserLocale() {
		const locale = cookieServices.getCookie(cookieLocaleKey) || defaultLocale
		return locale as Locale
	},

	setUserLocale(locale: Locale) {
		cookieServices.setCookie(cookieLocaleKey, locale)
	},
}
