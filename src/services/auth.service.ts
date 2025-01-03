import {API_URL} from '@/configs/api-url.config'
import {http} from '@/configs/http'
import {LoginPayload} from '@/types/api.type'

export const authServices = {
	async login(payload: LoginPayload) {
		return http.post(`/${API_URL.LOGIN}`, payload)
	},
	async logout(token: string) {
		return http.get(`/${API_URL.LOGOUT}`, {
			headers: {
				Authorization: `${token}`,
			},
		})
	},
}
