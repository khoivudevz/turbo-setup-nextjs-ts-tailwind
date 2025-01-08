import {TSearchParams} from '@/types/common.type'
import NewsView from '@/views/NewsView/NewsView'

type Props = {
	searchParams: TSearchParams
}

const NewsPage = async ({}: Props) => {
	return <NewsView />
}

export default NewsPage
