'use client'

import {APP_URL} from '@/configs/app-url.config'
import useRouter from '@/hooks/useRouter'
import {useTranslationContext} from '@/translation/translation.context'
import {getLanguageParam} from '@/utils/language.util'
import {useSearchParams} from 'next/navigation'
import {FC} from 'react'

type Props = {
	page: string
}

const Button: FC<Props> = ({page}) => {
	const {t} = useTranslationContext()
	const searchParams = useSearchParams()
	const lang = getLanguageParam(searchParams)
	const router = useRouter()

	const handleClick = () => {
		if (page === APP_URL.HOME) {
			router.push(APP_URL.NEWS, false, lang)
		} else {
			router.push(APP_URL.HOME, false, lang)
		}
	}

	return (
		<button
			onClick={handleClick}
			className='bg-transparent border-[1px] border-solid border-white text-white px-4 py-2 rounded-md my-[30px] hover:bg-white hover:text-black transition-all duration-300'
		>
			{page === APP_URL.HOME ? t('home.move_to_news') : t('home.move_to_home')}
		</button>
	)
}

export default Button
