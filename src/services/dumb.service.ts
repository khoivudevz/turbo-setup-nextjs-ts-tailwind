import axios, {AxiosResponse} from 'axios'

const dumbServices = {
	async getNews(params: any): Promise<AxiosResponse<any>> {
		return axios({
			url: 'https://api.restful-api.dev/objects',
			method: 'GET',
			params: params,
		})
	},
}

export default dumbServices
