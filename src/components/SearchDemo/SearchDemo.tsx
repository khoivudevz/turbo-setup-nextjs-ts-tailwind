'use client'

import {useQueryState} from 'nuqs'

const SearchDemo = () => {
	const [name, setName] = useQueryState('name')
	return (
		<div className='flex gap-2'>
			<input
				value={name || ''}
				onChange={(e) => setName(e.target.value)}
				className='bg-gray-200 border border-gray-300 text-black rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
			<button
				onClick={() => setName(null)}
				className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-300'
			>
				Clear
			</button>
		</div>
	)
}

export default SearchDemo
