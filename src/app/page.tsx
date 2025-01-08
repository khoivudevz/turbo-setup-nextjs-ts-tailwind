import {TSearchParams} from '@/types/common.type'

import HomeView from '@/views/HomeView/HomeView'

type Props = {
	searchParams: TSearchParams
}

const HomePage = async ({}: Props) => {
	return <HomeView />
}

export default HomePage
