'use server'

import {getRequestConfig} from 'next-intl/server'
import {cookies} from 'next/headers'
import {cookieLocaleKey} from './config'

export default getRequestConfig(async () => {
	// TODO: get locale from cookies
	const cookieStore = await cookies()
	const locale = cookieStore.get(cookieLocaleKey)?.value || 'en'

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	}
})
