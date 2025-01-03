import Button from '@/components/Button/Button'
import SwitchLanguage from '@/components/SwitchLanguage/SwitchLanguage'
import {APP_URL} from '@/configs/app-url.config'
import {FC} from 'react'

type Props = {
	lang: any
}

const HomeView: FC<Props> = ({lang}) => {
	return (
		<div className='h-dvh w-full bg-black text-white flex flex-col items-center justify-center'>
			<p>{lang.home.welcome_to_home}</p>
			<Button page={APP_URL.HOME} />

			<SwitchLanguage />
		</div>
	)
}

export default HomeView