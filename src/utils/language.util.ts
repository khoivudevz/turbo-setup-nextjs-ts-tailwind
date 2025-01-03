import {DEFAULT_LANG} from '@/constants/common.constant'
import {Router} from '@/hooks/useRouter'
import {
	LOCAL_STORAGE_KEY,
	localStorageServices,
} from '@/services/localStorage.service'
import {ReadonlyURLSearchParams} from 'next/navigation'

export const getLanguageParam = (searchParams: ReadonlyURLSearchParams) => {
	return searchParams.get('lang') ?? DEFAULT_LANG
}

type SwitchLanguageProps = {
	navigate: Router
	searchParams: ReadonlyURLSearchParams
	newLang: string
}

export const switchLanguage = ({
	newLang,
	searchParams,
	navigate,
}: SwitchLanguageProps): void => {
	const updatedSearchParams = new URLSearchParams(searchParams.toString())
	updatedSearchParams.delete('lang')
	updatedSearchParams.set('lang', newLang)
	localStorageServices.setLocalStorage(newLang, LOCAL_STORAGE_KEY.LANG)
	navigate.replace(
		`${window.location.pathname}?${updatedSearchParams.toString()}`,
		true
	)
}
