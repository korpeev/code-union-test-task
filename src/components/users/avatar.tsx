import userLogo from '../../assets/user.svg'
type Props = {
	src?: string,
	className?: string
}
export const Avatar = ({src, className}: Props) => {
	return <div className={className}>
		{src ? (
				<div className={'w-[60px] h-[60px]'}>
					<img src={src} alt="source" className={'object-cover w-full h-full  rounded-full'}/>
				</div>
		) : (
				<div className="p-[15px] bg-gray-200 rounded-full">
					<img className={'w-[34px] h-[34px]'} src={userLogo} alt="user logo"/>
				</div>
		)}
	</div>
}