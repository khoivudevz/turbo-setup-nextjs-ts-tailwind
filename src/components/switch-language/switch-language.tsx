'use client'

import {Locale} from '@/i18n/config'
import {localeClientServices} from '@/services/locale-client.service'
import {cn} from '@/utils/cn.util'
import {useLocale} from 'next-intl'

const LANGUAGES = [
	{code: 'en', label: 'EN', icon: '🇺🇸'},
	{code: 'ko', label: 'KO', icon: '🇰🇷'},
]

const SwitchLanguage = () => {
	const locale = useLocale()

	const switchLanguage = (newLang: Locale) => {
		localeClientServices.setUserLocale(newLang)
		window.location.reload()
	}

	return (
		<div className='flex space-x-[5px] items-center justify-center my-4'>
			<span className='text-xl mr-2' title='Change language'>
				🌐
			</span>
			{LANGUAGES.map((lang) => (
				<button
					key={lang.code}
					onClick={() => {
						if (locale === lang.code) return
						switchLanguage(lang.code as Locale)
					}}
					className={cn(
						'flex items-center gap-2 px-4 py-2 rounded-full border-2 border-transparent transition-all duration-300 font-semibold text-base shadow-sm',
						locale === lang.code
							? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-pink-400 scale-105 cursor-default'
							: 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:border-pink-400 hover:text-white'
					)}
					disabled={locale === lang.code}
				>
					<span className='text-lg'>{lang.icon}</span>
				</button>
			))}
		</div>
	)
}

export default SwitchLanguage
