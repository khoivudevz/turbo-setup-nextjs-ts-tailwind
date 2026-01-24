import Button from '@/components/Button/button'
import SearchDemo from '@/components/search-demo/search-demo'
import SearchResult from '@/components/search-demo/search-result'
import SwitchLanguage from '@/components/switch-language/switch-language'
import {APP_URL} from '@/configs/app-url.config'
import {useTranslations} from 'next-intl'
import {FC} from 'react'

const ExampleView: FC = ({}) => {
	const t = useTranslations()
	const features = t.raw('home.features') as Array<{
		icon: string
		title: string
		desc: string
	}>
	return (
		<div className='min-h-dvh w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4 py-8'>
			{/* Hero Section */}
			<section className='w-full max-w-2xl text-center mb-12 mt-8'>
				<h1 className='text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg'>
					{t('home.main_heading')}
				</h1>

				<SwitchLanguage />

				<p className='text-md text-gray-400 mb-6'>{t('home.description')}</p>
				<div className='flex flex-col items-center'>
					<Button page={APP_URL.HOME} />
				</div>
			</section>

			<section>
				{/* Search Section */}
				<section className='w-full max-w-xl mb-10 flex flex-col items-center'>
					<SearchDemo />
					<SearchResult />
				</section>
			</section>

			{/* Features Section */}
			<section className='w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
				{features.map((feature, idx) => (
					<div
						key={idx}
						className='bg-gray-900/80 rounded-xl p-6 shadow-lg border border-gray-700 flex flex-col items-center'
					>
						<span className='text-2xl mb-2'>{feature.icon}</span>
						<p className='font-semibold mb-1 text-sm'>{feature.title}</p>
						<p className='text-gray-400 text-sm text-center'>{feature.desc}</p>
					</div>
				))}
			</section>

			<div className='flex justify-center items-center'>
				<div className='relative inline-flex  group'>
					<div className='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
					<a
						href='https://turbo-setup.vercel.app/'
						title='Get quote now'
						className='relative inline-flex items-center justify-center px-4 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
						role='button'
						target='_blank'
					>
						🚀 TURBO SETUP 🏠
					</a>
				</div>
			</div>
		</div>
	)
}

export default ExampleView
