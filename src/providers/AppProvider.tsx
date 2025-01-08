'use client'

import {PUBLIC_ENV} from '@/configs/env.config'

type Props = {
	children: React.ReactNode
}

const AppProvider = ({children}: Props) => {
	console.log('🚀: ', PUBLIC_ENV.ENV)

	return <>{children}</>
}

export default AppProvider
