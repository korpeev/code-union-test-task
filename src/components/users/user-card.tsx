import {Avatar} from "./avatar.tsx";
import { FC, PropsWithChildren, useState} from "react";
import {Popover} from "../popover.tsx";
import {AddNewUserModal} from "../modals/add-new-user-modal.tsx";
export type User = {
	id: number,
	name: string;
	email: string;
	permissions: string[];
	image: string;}
type Props = {
	user: User,
	onDeleteUser: (user: User) => void
	onEditUser: (user: User) => void
}

export const UserCard = ({user, onDeleteUser, onEditUser}: Props) => {
	const [editModal, setEditModal] = useState(false)

	return <div className={'flex gap-3 align-baseline justify-between px-[30px] py-[17px] hover:bg-gray-300 transition-colors full-width'}>
		<div className="flex gap-3">
			<Avatar src={user.image}/>
			<div className="flex flex-col gap-[9px]">
				<div className="flex gap-1 md:gap-[11px] md:items-end flex-col md:flex-row">
					<span className={'font-bold text-[#424F5E] text-[14px] md:text-[20px] leading-[20px]'}>{user.name}</span>
					<span className={'text-[#424F5E] text-[14px] md:text-[18px] leading-[20px]'}>{user.email}</span>
				</div>
				<div className="flex gap-2 flex-wrap">
					{user.permissions.map((permission, index) => <PermissionCard key={index}>{permission}</PermissionCard>)}
				</div>
			</div>
		</div>
		<Popover activator={<div className="flex gap-1">
			<div className={'bg-gray-400 h-[5px] w-[5px] rounded-full'}/>
			<div className={'bg-gray-400 h-[5px] w-[5px] rounded-full'}/>
			<div className={'bg-gray-400 h-[5px] w-[5px] rounded-full'}/>
		</div>} children={<div className={'flex flex-col gap-2'}>
			<span onClick={() => setEditModal(true)} className={'text-[18px] text-[#9494A0] hover:text-[#424F5E] transition-colors cursor-pointer'}>Изменить права доступа</span>
			<span onClick={() => onDeleteUser(user)} className={'text-[18px] text-[#9494A0] hover:text-[#424F5E] transition-colors cursor-pointer'}>Удалить</span>
		</div>}/>
	<AddNewUserModal show={editModal} onClose={setEditModal} onSubmit={form => {
		onEditUser({id: user.id, ...form})
		setEditModal(false)
	}} mode={'edit'} data={user}/>
	</div>
}


const PermissionCard:FC<PropsWithChildren> = ({children})=> {

	return <div className={'py-[6px] px-[10px] text-[12px] md:text-[16px] rounded-[10px] border border-gray-200'}>{children}</div>
}