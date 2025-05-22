import {TSearchParams} from '@/types/common.type'
import NewsView from '@/views/NewsView/NewsView'

const NEWS_API = 'https://jsonplaceholder.typicode.com/posts?_limit=3'

type Props = {
	searchParams: TSearchParams
}

const NewsPage = async ({}: Props) => {
	const res = await fetch(NEWS_API, {cache: 'no-store'})
	const news = await res.json()
	return <NewsView news={news} />
}

export default NewsPage
