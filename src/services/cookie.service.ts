import {cookieClientService} from './cookie-client.service'
import * as cookieServerActions from './cookie-server.service'

// Re-export client service and server actions
export {cookieClientService} from './cookie-client.service'
export * as cookieServerActions from './cookie-server.service'

// Create server service object for backward compatibility
export const cookieServerService = {
	set: cookieServerActions.setCookie,
	get: cookieServerActions.getCookie,
	remove: cookieServerActions.removeCookie,
	setAuthToken: cookieServerActions.setAuthToken,
	getAuthToken: cookieServerActions.getAuthToken,
	removeAuthToken: cookieServerActions.removeAuthToken,
	isAuthenticated: cookieServerActions.isAuthenticated,
	setLocale: cookieServerActions.setLocale,
	getLocale: cookieServerActions.getLocale,
}

export const cookieServices = {
	// Enhanced methods
	client: cookieClientService,
	server: cookieServerService,
}
