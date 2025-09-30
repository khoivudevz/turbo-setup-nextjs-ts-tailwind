'use client'

import {APP_URL} from '@/configs/app-url.config'
import useRouter from '@/hooks/use-router'
import {useTranslations} from 'next-intl'

import {FC} from 'react'

type Props = {
	page: string
}

const Button: FC<Props> = ({page}) => {
	const router = useRouter()
	const t = useTranslations()

	const handleClick = () => {
		if (page === APP_URL.HOME) {
			router.push(APP_URL.NEWS, false)
		} else {
			router.push(APP_URL.HOME, false)
		}
	}

	return (
		<button
			onClick={handleClick}
			className='w-fit bg-transparent border-[1px] border-solid border-white text-white px-4 py-2 rounded-md my-[30px] hover:bg-white hover:text-black transition-all duration-300'
		>
			{page === APP_URL.HOME ? t('home.move_to_news') : t('home.move_to_home')}
		</button>
	)
}

export default Button
