import useModalStore, {ModalKey} from '@/stores/useModal.store'
import {useEffect} from 'react'

const useClearModals = (keys: ModalKey[]) => {
	const {closeModal} = useModalStore()

	useEffect(() => {
		return () => {
			keys.forEach((key) => {
				closeModal(key)
			})
		}
	}, [])
}

export default useClearModals
