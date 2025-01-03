import {REGEX} from '@/constants/common.constant'

const validate = {
	name: (t: any, value: string) => {
		if (!value) {
			return Promise.reject(t('error.this_field_is_required_'))
		}
		if (!REGEX.NAME_MIN_LENGTH.test(value)) {
			return Promise.reject(t('name.name_must_be_at_least_2_characters_'))
		}
		if (!REGEX.EMPTY_NUMBER.test(value)) {
			return Promise.reject(t('name.name_cannot_contain_numbers_'))
		}
		if (!REGEX.NO_SPECIAL_CHAR.test(value)) {
			return Promise.reject(t('name.name_cannot_contain_special_characters_'))
		}
		if (REGEX.ONLY_CHAR.test(value)) {
			return Promise.resolve()
		}
	},
	email: (t: any, value: string) => {
		if (!value) {
			return Promise.reject(t('error.this_field_is_required_'))
		}
		if (REGEX.EMAIL.test(value)) {
			return Promise.resolve()
		}
		return Promise.reject(t('error.email_not_valid'))
	},
	password: (t: any, value: string) => {
		if (!value) {
			return Promise.reject(t('error.this_field_is_required_'))
		}
		if (REGEX.PASSWORD2.test(value)) {
			return Promise.resolve()
		}
		return Promise.reject(t('error.password_not_valid'))
	},
	passwordNoRequire: (t: any, value: string) => {
		if (!value) {
			return Promise.resolve()
		}
		if (REGEX.PASSWORD2.test(value)) {
			return Promise.resolve()
		}
		return Promise.reject(t('error.password_not_valid'))
	},
	phoneNumber: (t: any, value: string) => {
		if (!value) {
			return Promise.reject(t('error.this_field_is_required_'))
		}
		if (REGEX.PHONE_NUMBER.test(value)) {
			return Promise.resolve()
		}
		return Promise.reject(
			t('phone_number.please_enter_a_valid_phone_number_with_10_15_digits_')
		)
	},
	site: (t: any, value: string) => {
		if (!value || REGEX.SITE.test(value)) {
			return Promise.resolve()
		}
		return Promise.reject(
			t('link.please_enter_a_valid_url_e_g_https_www_example_com_')
		)
	},
	bankAccount: (t: any, value: string) => {
		if (!value) {
			return Promise.reject(t('error.this_field_is_required_'))
		}
		if (REGEX.BANK_ACCOUNT.test(value)) {
			return Promise.resolve()
		}
		return Promise.reject(
			t(
				'bank_account.bank_account_number_must_be_numeric_and_8_20_digits_long_'
			)
		)
	},
	inputNumberOnly: (e: any, typeNumber?: 'decimal' | 'interger' | 'other') => {
		const allowedKeys = [
			'Backspace',
			'ArrowLeft',
			'ArrowRight',
			'Delete',
			'Tab',
		]
		if (
			((e.ctrlKey || e.metaKey) &&
				(e.key === 'a' || e.key === 'c' || e.key === 'v' || e.key === 'x')) ||
			(typeNumber === 'decimal' && e.key === '.')
		) {
			return
		}
		if (
			(!allowedKeys.includes(e.key) && isNaN(Number(e.key))) ||
			e.key === ' '
		) {
			e.preventDefault()
		}
	},
	inputNumberOnlyWithDot: (
		e: any,
		typeNumber?: 'decimal' | 'interger' | 'other'
	) => {
		const allowedKeys = [
			'Backspace',
			'ArrowLeft',
			'ArrowRight',
			'Delete',
			'Tab',
		]
		const currentValue = e.target.value
		const decimalSeparators = ['.', ',']
		console.log('typeNumber', typeNumber)

		if (currentValue.includes('.') && currentValue.split('.')[1].length >= 2) {
			if (!allowedKeys.includes(e.key) && e.key !== 'Backspace') {
				e.preventDefault()
			}
		}
		if (
			((e.ctrlKey || e.metaKey) &&
				(e.key === 'a' || e.key === 'c' || e.key === 'v' || e.key === 'x')) ||
			(decimalSeparators.includes(e.key) &&
				!decimalSeparators.some((separator) =>
					currentValue.includes(separator)
				))
		) {
			return
		}
		if (
			(!allowedKeys.includes(e.key) && isNaN(Number(e.key))) ||
			e.key === ' '
		) {
			e.preventDefault()
		}
	},
	trackingNumber: (t: any, value: string) => {
		if (!value) {
			return Promise.reject(t('error.this_field_is_required_'))
		}
		if (REGEX.TRACKING_NUMBER.test(value)) {
			return Promise.resolve()
		}
		return Promise.reject(
			t('tracking_number._please_enter_a_z_0_9_40_characters_maximum_')
		)
	},
}

export default validate
