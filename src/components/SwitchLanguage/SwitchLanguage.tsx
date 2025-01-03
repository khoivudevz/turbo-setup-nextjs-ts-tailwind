'use client'

import {LANG} from '@/constants/common.constant'
import useRouter from '@/hooks/useRouter'
import {cn} from '@/utils/cn.util'
import {getLanguageParam, switchLanguage} from '@/utils/language.util'
import {useSearchParams} from 'next/navigation'

const SwitchLanguage = () => {
	const searchParams = useSearchParams()
	const navigate = useRouter()
	const lang = getLanguageParam(searchParams)

	return (
		<div className='flex gap-2'>
			<button
				onClick={() => {
					if (lang === LANG.EN) return
					switchLanguage({newLang: LANG.EN, searchParams, navigate})
				}}
				className={cn(
					'bg-transparent border-[1px] border-solid border-white text-white px-4 py-2 rounded-md my-[30px] hover:bg-white hover:text-black transition-all duration-300',
					lang === LANG.EN && 'bg-white text-black cursor-default'
				)}
			>
				EN
			</button>
			<button
				onClick={() => {
					if (lang === LANG.KO) return
					switchLanguage({newLang: LANG.KO, searchParams, navigate})
				}}
				className={cn(
					'bg-transparent border-[1px] border-solid border-white text-white px-4 py-2 rounded-md my-[30px] hover:bg-white hover:text-black transition-all duration-300',
					lang === LANG.KO && 'bg-white text-black cursor-default'
				)}
			>
				KO
			</button>
		</div>
	)
}

export default SwitchLanguage
