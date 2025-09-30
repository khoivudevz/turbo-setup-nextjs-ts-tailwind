import {TSearchParams} from '@/types/common.type'
import ExampleView from '@/views/example-view/home-view'

type Props = {
	searchParams: TSearchParams
}

const HomePage = async ({}: Props) => {
	return <ExampleView />
}

export default HomePage
