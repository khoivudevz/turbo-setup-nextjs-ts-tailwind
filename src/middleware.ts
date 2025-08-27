import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

// Define protected and public routes
const protectedRoutes = ['/profile']
const authRoutes = ['/login'] // Routes that redirect away if already authenticated

export function middleware(request: NextRequest) {
	const {pathname} = request.nextUrl
	const token = request.cookies.get('authToken')?.value
	const isAuthenticated = !!token
	// Check if the current route is protected
	const isProtectedRoute = protectedRoutes.some((route) =>
		pathname.startsWith(route)
	)

	// Check if the current route is an auth route (login/register)
	const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

	// Redirect unauthenticated users away from protected routes
	if (isProtectedRoute && !isAuthenticated) {
		const loginUrl = new URL('/login', request.url)
		loginUrl.searchParams.set('callbackUrl', pathname)
		return NextResponse.redirect(loginUrl)
	}

	// Redirect authenticated users away from auth routes
	if (isAuthRoute && isAuthenticated) {
		return NextResponse.redirect(new URL('/', request.url))
	}

	// Allow the request to continue
	return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * - public files (public folder)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
	],
}
