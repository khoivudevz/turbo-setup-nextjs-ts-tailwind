import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import AppProvider from '@/providers/AppProvider'
import '@/styles/globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Turbo Setup NextJS - TS - TailwindCSS',
	description: 'Turbo Setup NextJS - TS - TailwindCSS',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<AppProvider initLanguage={true}>{children}</AppProvider>
			</body>
		</html>
	)
}
