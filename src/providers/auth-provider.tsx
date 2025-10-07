'use client'

import {createContext, useContext, ReactNode} from 'react'
import {useAuth} from '@/hooks/auth/use-auth'
import type {LoginPayload} from '@/types/api.type'

interface User {
	email: string
	token: string
}

interface AuthContextType {
	user: User | null
	isLoading: boolean
	isAuthenticated: boolean
	login: (credentials: LoginPayload, rememberMe?: boolean) => Promise<void>
	logout: () => Promise<void>
	checkAuth: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
	children: ReactNode
}

export function AuthProvider({children}: AuthProviderProps) {
	const auth = useAuth()

	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuthContext must be used within an AuthProvider')
	}
	return context
}
