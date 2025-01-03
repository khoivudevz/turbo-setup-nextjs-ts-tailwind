import {
	LOCAL_STORAGE_KEY,
	localStorageServices,
} from '@/services/localStorage.service'
import {useRouter as useRouterBase} from 'next/navigation'

export type Router = {
	push: (url: string, refresh?: boolean, lang?: string, options?: any) => void
	replace: (
		url: string,
		refresh?: boolean,
		lang?: string,
		options?: any
	) => void
	back: (refresh?: boolean) => void
}

const useRouter: () => Router = () => {
	const router = useRouterBase()

	const push = (
		url: string,
		refresh: boolean = false,
		lang?: string,
		options?: any
	) => {
		if (lang) {
			const isExistParams = url.includes('?')

			const newUrl = `${url}${
				isExistParams ? `&lang=${lang}` : `?lang=${lang}`
			}`
			localStorageServices.setLocalStorage(lang, LOCAL_STORAGE_KEY.LANG)
			router.push(newUrl, options)
		} else {
			router.push(url, options)
		}
		if (refresh) {
			router.refresh()
		}
	}

	const replace = (
		url: string,
		refresh: boolean = false,
		lang?: string,
		options?: any
	) => {
		if (lang) {
			const isExistParams = url.includes('?')

			const newUrl = `${url}${
				isExistParams ? `&lang=${lang}` : `?lang=${lang}`
			}`
			localStorageServices.setLocalStorage(lang, LOCAL_STORAGE_KEY.LANG)
			router.push(newUrl, options)
		} else {
			router.push(url, options)
		}
		if (refresh) {
			router.refresh()
		}
	}

	const back = (refresh: boolean = false) => {
		router.back()
		if (refresh) {
			router.refresh()
		}
	}

	return {push, replace, back}
}

export default useRouter
