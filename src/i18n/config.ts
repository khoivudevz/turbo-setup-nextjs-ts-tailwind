export type Locale = (typeof locales)[number]

export const locales = ['en', 'ko'] as const

export const defaultLocale: Locale = 'en'

export const cookieLocaleKey = 'locale'
