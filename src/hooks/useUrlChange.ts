// hooks/useUrlChange.ts
'use client'

import {usePathname, useSearchParams} from 'next/navigation'
import {useMemo} from 'react'

type UrlData = {
	url: string
	params: Record<string, string>
}

/**
 * useUrlChange hook returns the current URL and parsed query parameters as an object.
 *
 * @returns An object containing:
 *   - url: The full URL as a string.
 *   - params: An object of query parameters, e.g., { name: 'John', age: '30' }.
 */
const useUrlChange = (): UrlData => {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	// Parse search parameters into an object
	const params = useMemo(() => {
		if (!searchParams) return {}
		const entries = Array.from(searchParams.entries())
		return entries.reduce(
			(acc, [key, value]) => {
				acc[key] = value
				return acc
			},
			{} as Record<string, string>
		)
	}, [searchParams])

	// Construct the full URL string
	const url = useMemo(() => {
		const paramsStr = searchParams?.toString()
		return paramsStr ? `${pathname}?${paramsStr}` : pathname
	}, [pathname, searchParams])

	return {url, params}
}

export default useUrlChange
