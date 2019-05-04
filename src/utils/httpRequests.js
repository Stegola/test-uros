import axios from 'axios'

const BASE_URL = 'https://api.kadporastembicu.dev./v1'
axios.defaults.baseURL = BASE_URL

export const getProducts = async () => {
	try {
		const { data } = await axios.get('/products')
		return data
	} catch (error) {
		console.log(error.response)
	}
}

export const getTemplates = async () => {
	try {
		const { data } = await axios.get('/templates')
		return data
	} catch (error) {
		console.log(error.response)
	}
}

export const getProductsAndTemplates = async () => {
	try {
		const [products, templates] = await axios.all([
			getProducts(),
			getTemplates()
		])
		return { products, templates }
	} catch (error) {
		console.log(error.response)
	}
}
