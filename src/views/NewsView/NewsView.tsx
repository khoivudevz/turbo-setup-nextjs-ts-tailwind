import Button from '@/components/Button/Button'
import SwitchLanguage from '@/components/SwitchLanguage/SwitchLanguage'
import {APP_URL} from '@/configs/app-url.config'
import {useTranslations} from 'next-intl'
import {FC} from 'react'

type Props = {
	lang?: any
}

const NewsView: FC<Props> = ({}) => {
	const t = useTranslations()
	return (
		<div className='h-dvh w-full bg-black text-white flex flex-col items-center justify-center'>
			<div>{t('home.welcome_to_news')}</div>
			<Button page={APP_URL.NEWS} />

			<SwitchLanguage />
		</div>
	)
}

export default NewsView
