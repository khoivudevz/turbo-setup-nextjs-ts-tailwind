'use client'

import _ from 'lodash'
import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useState,
} from 'react'

import {stringUtil} from '@/utils/string.util'

type TranslationConfig = {
	keyPrefix?: string
	fallbackLanguage?: string
}

type Dictionary = {
	[key: string]: string | Dictionary
}

type TranslateFunction = (
	stringKeys: string,
	variables?: Record<string, string | number>
) => string

type State = {
	dictionary: Dictionary
	t: TranslateFunction
	setGlobalConfigs: (configs: TranslationConfig) => void
}

export const TranslationContext = createContext<State | null>(null)

export const useTranslationContext = (
	errorMessage: string = 'Component must be inside TranslationContextProvider.Provider'
) => {
	const context = useContext(TranslationContext)

	if (!context) throw Error(errorMessage)

	return context
}

type Props = {
	dictionary: Dictionary
	children: ReactNode
	defaultConfig?: TranslationConfig
}

export const TranslationContextProvider = ({
	children,
	dictionary,
	defaultConfig = {},
}: Props) => {
	const [configs, setConfigs] = useState<TranslationConfig>(defaultConfig)

	const setGlobalConfigs = useCallback(
		(newConfigs: TranslationConfig) => {
			if (_.isEqual(newConfigs, configs)) return
			setConfigs(newConfigs)
		},
		[configs]
	)

	const t: TranslateFunction = useCallback(
		(stringKeys, variables) => {
			const keys = configs.keyPrefix
				? `${configs.keyPrefix}.${stringKeys}`
				: stringKeys

			const words = _.get(dictionary, keys)

			if (!stringUtil.isValid(words)) {
				console.error(`Translation missing: ${keys}`)
				return stringKeys
			}

			if (!variables) return words

			return Object.entries(variables).reduce(
				(text, [key, value]) => text.replace(`{{${key}}}`, String(value)),
				words
			)
		},
		[configs.keyPrefix, dictionary]
	)

	const contextValues = {
		dictionary,
		t,
		setGlobalConfigs,
	}

	return (
		<TranslationContext.Provider value={contextValues}>
			{children}
		</TranslationContext.Provider>
	)
}
