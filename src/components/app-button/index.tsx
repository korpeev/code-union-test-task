import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";
import {clsx} from "clsx";
type Props = {
	size: "md" | "sm",
	fz?: number
	danger?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
export const AppButton:FC<PropsWithChildren<Props>> = ({children, className, fz, danger = false, size = 'sm', ...props}) => {
  return  <button className={clsx('radius-[10px] rounded-[10px] text-white font-semibold ', {
		'py-[8px] px-[16px]': size === 'sm',
		'md:p-[20px] p-[10px] text-[14px]': size === 'md',
		'bg-red-400': danger,
		'bg-green': !danger,
		[`text-[${fz}px]`]: fz,
		'text-[20px]': !fz
	}, className)} {...props}>
		{children}</button>
}