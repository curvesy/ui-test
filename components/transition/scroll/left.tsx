import {useState, useRef} from "react";
import SlideLeft from "../SlideLeft";
import useTriggerOnScroll from "../../../hooks/useTriggerOnScroll";

type Props = {
	children: React.ReactNode;
};

export default function ScrollSlideLeft({children}: Props) {
	const ref = useRef<HTMLDivElement>();
	const el = useRef();
	const [show, setShow] = useState<boolean>(false);
	useTriggerOnScroll(
		el,
		(triggered: boolean | ((prevState: boolean) => boolean)) => {
			setShow(triggered);
		}
	);
	return (
		<div ref={el as any}>
			<SlideLeft show={show}>{children}</SlideLeft>
		</div>
	);
}
