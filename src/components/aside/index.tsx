import logo from '@/assets/logo.svg'
import analyticsLogo from '@/assets/analytics.png'
import userLogo from '@/assets/user.svg'
import moderationLogo from '@/assets/moderation.svg'
import chatLogo from '@/assets/chat.svg'
import bannersLogo from '@/assets/banners.svg'
import teamLogo from '@/assets/team.svg'
import blogLogo from '@/assets/blog.svg'
import currencyLogo from '@/assets/currency.svg'
import logoutLogo from '@/assets/logout.svg'
import {Avatar} from "../users/avatar.tsx";
import avatarImg from '@/assets/avatar.webp'
import menuIcon from '@/assets/menu.svg'
import {clsx} from "clsx";
import {Dispatch, SetStateAction} from "react";
const asideList = [
	{
		logo: analyticsLogo,
		text: "Аналитика"
	},
	{
		logo: userLogo,
		text: "Профиль"
	},
	{
		logo: moderationLogo,
		text: "Модерация"
	},
	{
		logo: chatLogo,
		text: "Чаты"
	},{
		logo: bannersLogo,
		text: "Баннеры"
	},{
		logo: teamLogo,
		text: "Команда"
	},{
		logo: blogLogo,
		text: "Блог"
	},{
		logo: currencyLogo,
		text: "Курс валют"
	},{
		logo: logoutLogo,
		text: "Выйти"
	},
]

type Props  = {
	show?: boolean,
	onClose: Dispatch<SetStateAction<boolean>>
}
export const Aside = ({show, onClose}: Props) => {
	return <aside className={clsx('flex transition-transform flex-col items-center ' +
			'px-[20px] py-[25px] gap-[20px] bg-white rounded-md h-screen absolute md:static w-[244px] md:w-auto', {
		'translate-x-0 z-10 shadow md:translate-x-0': show,
		'-translate-x-full md:translate-x-0': !show
	})}>
		<img className={'hidden md:block'} src={logo} alt="logo"/>


		<div className="flex flex-col md:items-center">
			<img onClick={() => onClose(false)} className={'mb-[22px] md:hidden block w-[20px] h-[14px]'} src={menuIcon} alt={'menu icon'}/>
			<div className="flex gap-[13px] items-end">
				<Avatar className={'mt-[24px]'} src={avatarImg}/>
				<div className="md:hidden flex flex-col gap-1">
					<span className={'font-semibold text-[16px] text-[#424F5E]'}>Артем Иванов</span>
					<span className={'text-[14px] text-[#9494A0]'}>Собственник</span>
				</div>
			</div>
			{asideList.map(item => (
					<div key={item.text} className={'mt-[34px] flex gap-[17px] items-center'}>
						<img className={'w-[20px] h-[21px]'} src={item.logo} alt=""/>
						<span className={'md:hidden'}>{item.text}</span>
					</div>
			))}
		</div>

	</aside>
}