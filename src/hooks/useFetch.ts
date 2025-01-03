import {useEffect, useState} from 'react'

const useFetch = <T>(
	fetchFunction: () => Promise<T> | null,
	dependencies: ReadonlyArray<unknown> = []
) => {
	const [res, setRes] = useState<T | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<Error | null>(null)
	const [refetch, setRefetch] = useState<string>(
		new Date().getTime().toString()
	)
	const [isAuthError, setIsAuthError] = useState<boolean>(false)

	const refetchData = () => {
		setRefetch(new Date().getTime().toString())
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const response = await fetchFunction()
				if (!response) {
					console.log('No response', response)
					return
				}
				setRes(response as T)
				setError(null)
			} catch (error: any) {
				console.log('error: ', error)
				setError(error as Error)
				if (error.status === 401) {
					setIsAuthError(true)
				}
				throw error
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [...dependencies, refetch])

	return {res, loading, error, refetchData, isAuthError}
}

export default useFetch
