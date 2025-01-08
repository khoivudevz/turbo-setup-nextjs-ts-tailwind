'use client'

import {Locale} from '@/i18n/config'
import {localeClientServices} from '@/services/locale-client.service'
import {cn} from '@/utils/cn.util'
import {useLocale} from 'next-intl'

const SwitchLanguage = () => {
	const locale = useLocale()

	const switchLanguage = (newLang: Locale) => {
		localeClientServices.setUserLocale(newLang)
		window.location.reload()
	}

	return (
		<div className='flex gap-2'>
			<button
				onClick={() => {
					if (locale === 'en') return
					switchLanguage('en')
				}}
				className={cn(
					'bg-transparent border-[1px] border-solid border-white text-white px-4 py-2 rounded-md my-[30px] hover:bg-white hover:text-black transition-all duration-300',
					locale === 'en' && 'bg-white text-black cursor-default'
				)}
			>
				EN
			</button>
			<button
				onClick={() => {
					if (locale === 'ko') return
					switchLanguage('ko')
				}}
				className={cn(
					'bg-transparent border-[1px] border-solid border-white text-white px-4 py-2 rounded-md my-[30px] hover:bg-white hover:text-black transition-all duration-300',
					locale === 'ko' && 'bg-white text-black cursor-default'
				)}
			>
				KO
			</button>
		</div>
	)
}

export default SwitchLanguage
