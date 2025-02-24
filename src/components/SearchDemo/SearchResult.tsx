'use client'

import useUrlChange from '@/hooks/useUrlChange'

const SearchResult = () => {
	const {params} = useUrlChange()

	return <div className='my-4'>{params?.name || ''}</div>
}

export default SearchResult
