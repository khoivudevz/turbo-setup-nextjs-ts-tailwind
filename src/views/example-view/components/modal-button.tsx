'use client'

import {MODAL_KEYS} from '@/constants/modals.constant'
import useClearModals from '@/hooks/use-clear-modals'
import useModalStore from '@/stores/use-modal.store'

const ModalButton = () => {
	const {openModal} = useModalStore()
	useClearModals([MODAL_KEYS.DEMO_MODAL])

	return (
		<button
			className='w-fit bg-transparent border-[1px] border-solid border-white text-white px-4 py-2 rounded-md my-[30px] hover:bg-white hover:text-black transition-all duration-300'
			onClick={() => openModal(MODAL_KEYS.DEMO_MODAL)}
		>
			Open Modal
		</button>
	)
}

export default ModalButton
