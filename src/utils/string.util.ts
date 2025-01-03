import sanitizeHtml from 'sanitize-html'

const allowedTagsList = ['img', 'video', 'iframe']

export const stringUtil = {
	// check if value is valid string
	isValid: (str: any): str is string => {
		if (typeof str !== 'string') return false
		if (!str.trim().length) return false
		return true
	},

	// parse string to cleaned html
	parseToCleanedHtml: (str: any) => {
		if (!stringUtil.isValid(str)) return ''
		return sanitizeHtml(str, {
			allowedTags: sanitizeHtml.defaults.allowedTags.concat(allowedTagsList),
			allowedSchemes: ['http', 'https'],
			allowedSchemesByTag: {
				img: ['http', 'https', 'data'],
				video: ['http', 'https'],
				iframe: ['http', 'https'],
			},
			allowedAttributes: {
				...sanitizeHtml.defaults.allowedAttributes,
				video: ['src', 'controls', 'width', 'height'],
				iframe: ['src', 'width', 'height', 'frameborder', 'allowfullscreen'],
			},
		})
	},

	// remove white spaces
	removeWhiteSpaces: (str: string) => {
		if (str) {
			return str.replaceAll(/\s+/g, ' ').trim()
		}
		return null
	},
}
