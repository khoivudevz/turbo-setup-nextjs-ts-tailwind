import Button from '@/components/Button/Button'
import SearchDemo from '@/components/SearchDemo/SearchDemo'
import SearchResult from '@/components/SearchDemo/SearchResult'
import SwitchLanguage from '@/components/SwitchLanguage/SwitchLanguage'
import {APP_URL} from '@/configs/app-url.config'
import {useTranslations} from 'next-intl'
import {FC} from 'react'

type Props = {
	lang?: any
}

const HomeView: FC<Props> = ({}) => {
	const t = useTranslations()
	return (
		<div className='h-dvh w-full bg-black text-white flex flex-col items-center justify-center'>
			<p className='mb-4'>{t('home.welcome_to_home')}</p>

			<SearchDemo />
			<SearchResult />
			<Button page={APP_URL.HOME} />

			<SwitchLanguage />
		</div>
	)
}

export default HomeView
