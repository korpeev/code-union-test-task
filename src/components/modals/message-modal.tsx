import {AppButton} from "../app-button";
import {ModalContainer} from "./modal-container.tsx";
import {Dispatch, SetStateAction} from "react";

type Props = {
	message: string,
	onClose: Dispatch<SetStateAction<boolean>>
	show?: boolean
}
export const MessageModal = ({message, onClose, show}: Props) => {

	return <ModalContainer show={show} onClose={onClose} showCloseButton={false}>
		<div className={'flex flex-col items-center'}>
			<h1 className={'text-[22px] font-semibold mb-[19px]'}>{message}</h1>
			<AppButton className={'w-full'} onClick={() => onClose(false)} size={'sm'}>Закрыть</AppButton>
		</div>
	</ModalContainer>
}