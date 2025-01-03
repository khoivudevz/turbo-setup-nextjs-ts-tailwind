import axios from 'axios'
import {PUBLIC_ENV} from './env.config'

export const http = axios.create({
	timeout: 20000, // 20s
	baseURL: PUBLIC_ENV.USER_API_URL,
})

http.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => {
		console.error('Error', error)
		return Promise.reject(error)
	}
)

http.interceptors.response.use(
	(response) => response.data,

	(error) => {
		console.log('Error: ', error)

		return Promise.reject(error)
	}
)
