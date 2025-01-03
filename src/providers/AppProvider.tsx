'use client'

import {PUBLIC_ENV} from '@/configs/env.config'
import {DEFAULT_LANG} from '@/constants/common.constant'
import {
	LOCAL_STORAGE_KEY,
	localStorageServices,
} from '@/services/localStorage.service'

import {useEffect} from 'react'

type Props = {
	children: React.ReactNode
	initLanguage?: boolean
}

const AppProvider = ({children, initLanguage}: Props) => {
	console.log('🚀: ', PUBLIC_ENV.ENV)
	// handle set init language
	useEffect(() => {
		if (initLanguage) {
			const params = new URLSearchParams(document.location.search)
			const lang = params.get('lang') ?? DEFAULT_LANG
			const localStoragelang = localStorageServices.getLocalStorage<
				string | null
			>(LOCAL_STORAGE_KEY.LANG)

			if (localStoragelang) {
				if (localStoragelang === lang) return
				params.set('lang', localStoragelang)
				window.location.replace(
					`${window.location.pathname}?${params.toString()}`
				)
			} else {
				if (lang !== DEFAULT_LANG) {
					params.set('lang', lang)
					window.location.replace(
						`${window.location.pathname}?${params.toString()}`
					)
				}
				localStorageServices.setLocalStorage(lang, LOCAL_STORAGE_KEY.LANG)
			}
		}
	}, [initLanguage])

	return <>{children}</>
}

export default AppProvider
