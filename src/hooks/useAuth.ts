'use client'

import {useState, useEffect, useCallback} from 'react'
import {useRouter} from 'next/navigation'
import {authServices} from '@/services/auth.service'
import type {LoginPayload} from '@/types/api.type'
import {cookieServices} from '@/services/cookie.service'

interface User {
	email: string
	token: string
	// Add other user properties as needed
}

interface UseAuthReturn {
	user: User | null
	isLoading: boolean
	isAuthenticated: boolean
	login: (credentials: LoginPayload, rememberMe?: boolean) => Promise<void>
	logout: () => Promise<void>
	checkAuth: () => void
}

export function useAuth(): UseAuthReturn {
	const [user, setUser] = useState<User | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const router = useRouter()

	// Check if user is authenticated
	const checkAuth = useCallback(() => {
		const token = cookieServices.client.getAuthToken()

		if (token) {
			// You might want to verify the token with your backend here
			setUser({email: '', token}) // Replace with actual user data
		} else {
			setUser(null)
		}
		setIsLoading(false)
	}, [])

	// Login function
	const login = useCallback(
		async (credentials: LoginPayload, rememberMe = false) => {
			setIsLoading(true)
			try {
				const response = await authServices.login(credentials)
				const {token, user: userData} = response.data // Adjust based on your API response

				// Store token in cookies
				cookieServices.client.setAuthToken(token, rememberMe)

				// Set user state
				setUser({...userData, token})

				// Let middleware handle the redirect
				router.refresh()
			} catch (error) {
				console.error('Login failed:', error)
				throw error
			} finally {
				setIsLoading(false)
			}
		},
		[router]
	)

	// Logout function
	const logout = useCallback(async () => {
		setIsLoading(true)
		try {
			const token = cookieServices.client.getAuthToken()
			if (token) {
				await authServices.logout(token)
			}
		} catch (error) {
			console.error('Logout error:', error)
		} finally {
			// Always clear local state, even if API call fails
			cookieServices.client.removeAuthToken()
			setUser(null)
			setIsLoading(false)
			// Let middleware handle the redirect to login
			router.refresh()
		}
	}, [router])

	// Check auth on component mount
	useEffect(() => {
		checkAuth()
	}, [checkAuth])

	return {
		user,
		isLoading,
		isAuthenticated: !!user,
		login,
		logout,
		checkAuth,
	}
}
