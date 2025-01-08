'use server'

import {cookieLocaleKey, defaultLocale, Locale} from '@/i18n/config'
import {cookies} from 'next/headers'

export const localeServerServices = {
	async getUserLocale() {
		const locale =
			(await cookies()).get(cookieLocaleKey)?.value || defaultLocale
		return locale as Locale
	},

	async setUserLocale(locale: Locale) {
		;(await cookies()).set(cookieLocaleKey, locale)
	},
}
