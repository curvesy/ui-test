import {useState, useRef} from "react";
import SlideRight from "../SlideRight";
import useTriggerOnScroll from "../../../hooks/useTriggerOnScroll";

type Props = {
	children: React.ReactNode;
};

export default function ScrollSlideRight({children}: Props) {
	const el = useRef<any>();
	const [show, setShow] = useState<boolean>(false);
	useTriggerOnScroll(el, (triggered: any) => {
		setShow(triggered);
	});
	return (
		<div ref={el}>
			<SlideRight show={show}>{children}</SlideRight>
		</div>
	);
}
