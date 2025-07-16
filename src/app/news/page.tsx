import dumbServices from '@/services/dumb.service'
import {TSearchParams} from '@/types/common.type'
import NewsView from '@/views/NewsView/NewsView'

type Props = {
	searchParams: TSearchParams
}

const NewsPage = async ({}: Props) => {
	const {data} = await dumbServices.getNews({})

	return <NewsView news={data} />
}

export default NewsPage
