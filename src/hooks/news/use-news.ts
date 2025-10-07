import dumbServices from '@/services/dumb.service'
import {useFetch} from '../auth/use-fetch'

export const useNews = () => {
	const {data, isLoading, error} = useFetch(() => dumbServices.getNews({}))

	return {
		news: data?.data,
		isLoading,
		error,
	}
}

export default useNews
