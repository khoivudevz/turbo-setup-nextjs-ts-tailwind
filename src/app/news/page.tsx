import {TranslationContextProvider} from '@/translation/translation.context'
import {TSearchParams} from '@/types/common.type'
import {getDictionary} from '@/utils/getDictionary'
import NewsView from '@/views/NewsView/NewsView'

type Props = {
	searchParams: TSearchParams
}

const NewsPage = async ({searchParams}: Props) => {
	const {lang} = await searchParams
	const locale = await getDictionary(lang)
	return (
		<TranslationContextProvider dictionary={locale}>
			<NewsView lang={locale} />
		</TranslationContextProvider>
	)
}

export default NewsPage
