import {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react";
import {ModalContainer} from "./modal-container.tsx";
import {AppInput} from "@/components/app-input";
import {AppSelect} from "@/components/app-select";
import {AppButton} from "@/components/app-button";


type Form = {
	name: string;
	email: string;
	permissions: string[];
	image: string
}
type EditProps = {
	mode: 'edit',
	data: Form
}
type AddProps = {
	mode: "add"
	data?: never
}
type CommonProps = {
	title?: string
	show?: boolean;
	onClose: Dispatch<SetStateAction<boolean>>
	onSubmit: (form: Form) => void,
}
type Props = CommonProps & (EditProps | AddProps)
export const AddNewUserModal = ({show, onClose, onSubmit, mode, data, title = 'Добавить нового пользователя'}: Props) => {
	const [form, setForm] = useState<Form>( mode === 'edit' ? data : {
		name: "",
		email: "",
		permissions: [],
		image: ""
	})
	const permissionsOptions = [
		{
			value: "1",
			label: "Модерация объявлений"
		},
		{
			value: "2",
			label: "Блог"
		},
		{
			value: "3",
			label: "Тех. поддержка"
		},
		{
			value: "4",
			label: "Обращения клиентов"
		},
		{
			value: "5",
			label: "Аналитика"
		},
		{
			value: "6",
			label: "Акции"
		},
	]
	const onInputChange = (key: keyof typeof form) => (event: ChangeEvent<HTMLInputElement>) => {
		setForm(prev => ({...prev, [key]: event.target.value}))
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		onSubmit(form)
		setForm({
			name: "",
			email: "",
			permissions: [],
			image: ""
		})
	}

	const submitButtonLabel = mode === 'edit' ? 'Редактировать пользователя' : 'Создать пользователя'

	return <ModalContainer show={show} onClose={onClose}>
		<h1 className="text-[20px] font-bold">{title}</h1>
		<form onSubmit={handleSubmit} className={'flex flex-col gap-3 mt-3'}>
			<AppInput value={form.name} onChange={onInputChange('name')}  inputSize={'md'} placeholder={'E-mail'}/>
			<AppInput value={form.email} onChange={onInputChange('email')} inputSize={'md'} placeholder={'Имя'}/>
			<AppSelect options={permissionsOptions} value={form.permissions.map(p => ({value: p, label: p}))} onChange={value => setForm(prev =>
					({...prev, permissions: value.map(v => v.label)}))} isMulti  placeholder={'Выберите правы доступа'} />
			<AppButton type={'submit'} size={'md'}>{submitButtonLabel}</AppButton>
		</form>
	</ModalContainer>
}
