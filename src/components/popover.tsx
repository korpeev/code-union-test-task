import {ReactNode, useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";
import {useClickOutside} from "../hooks/useClickOutside.ts";

type Props = {
	activator: ReactNode
	children?: ReactNode
}
export const Popover = ({activator, children}: Props) => {
	const [show, setShow] = useState(false)
	const ref = useRef<HTMLDivElement | null>(null)
	useClickOutside(ref, () => setShow(false))
	return <div ref={ref} className='relative'>
		<div onClick={() => setShow(prev => !prev)}>
			{activator}
		</div>
		<CSSTransition
				mountOnEnter
				unmountOnExit
				in={show}
				timeout={{ enter: 700, exit: 700 }}
				classNames="fade">
			<div className="rounded-[15px] shadow py-[20px] px-[26px] z-10 bg-white absolute top-[25px] -left-[200px] min-w-[238px]">
				{children}
			</div>
		</CSSTransition>
	</div>
}