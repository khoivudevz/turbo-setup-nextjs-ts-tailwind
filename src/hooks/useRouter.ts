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

	const push = (url: string, refresh: boolean = false, options?: any) => {
		router.push(url, options)
		if (refresh) {
			router.refresh()
		}
	}

	const replace = (url: string, refresh: boolean = false, options?: any) => {
		router.push(url, options)
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
