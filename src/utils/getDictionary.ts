import 'server-only'
import {DEFAULT_LANG} from '@/constants/common.constant'

const dictionaries = {
	en: () =>
		import('@/translation/locales/en/common.json').then(
			(module) => module.default
		),
	ko: () =>
		import('@/translation/locales/ko/common.json').then(
			(module) => module.default
		),
}

export const getDictionary = async (
	locale: string | string[] | undefined
): Promise<any> => {
	if (!locale) {
		return dictionaries[DEFAULT_LANG]()
	} else if (locale !== 'ko' && locale !== 'en') {
		return dictionaries[DEFAULT_LANG]()
	} else {
		return dictionaries[locale]()
	}
}
