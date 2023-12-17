import {forwardRef, InputHTMLAttributes, ReactNode} from "react";
import {clsx} from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	suffix?: ReactNode,
	inputSize: "md" | 'sm'
}
export const AppInput = forwardRef<HTMLInputElement, Props>(({ inputSize = 'sm', ...props}, ref) => {

	return <div className={clsx('relative rounded-[10px] border border-gray bg-white w-full', props.className)}>
		<input className={clsx('border-none rounded-[10px] bg-transparent w-full placeholder-gray', {
			'p-[10px] px-[12px]': inputSize === 'sm',
			'p-[20px] h-[61px]': inputSize === 'md'
		})} type="text" ref={ref} {...props}/>
		{!!props.suffix && (
				<div className="absolute right-[10px] top-1/3">{
					props.suffix
				}</div>
		)}
	</div>
})