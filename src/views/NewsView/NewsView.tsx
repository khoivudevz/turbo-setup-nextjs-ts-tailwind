import Button from '@/components/Button/Button'
import SearchDemo from '@/components/SearchDemo/SearchDemo'
import SearchResult from '@/components/SearchDemo/SearchResult'
import SwitchLanguage from '@/components/SwitchLanguage/SwitchLanguage'
import {APP_URL} from '@/configs/app-url.config'
import {useTranslations} from 'next-intl'
import {FC} from 'react'

type NewsViewProps = {
	news?: {
		ticker: string
		name: string
		is_etf: boolean | null
		exchange: string
	}[]
}

const NewsView: FC<NewsViewProps> = ({news = []}) => {
	const t = useTranslations()
	return (
		<div className='min-h-dvh w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4 py-8'>
			<section className='w-full max-w-2xl text-center mb-10 mt-8'>
				<h2 className='text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg'>
					{t('home.news_heading')}
				</h2>

				<Button page={APP_URL.NEWS} />
				<SwitchLanguage />
			</section>

			<section className='mb-10'>
				<SearchDemo />
				<SearchResult />
			</section>

			<section className='w-full max-w-xl flex flex-col items-center mb-8'>
				{news.length === 0 && (
					<div className='text-gray-400 mb-4'>No news found.</div>
				)}
				{news.map((item) => (
					<div
						key={item.ticker}
						className='bg-gray-900/80 rounded-xl p-6 shadow-lg border border-pink-700/40 w-full mb-4'
					>
						<h4 className='text-lg font-semibold mb-2 text-pink-300'>
							📰 {item.name}
						</h4>
						<p className='text-gray-300'>{item.exchange}</p>
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

export default NewsView
