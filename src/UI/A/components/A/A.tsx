import Link from 'next/link';
import AProps from "../../utils/AProps";
import aStyle from './styles/a.module.scss';

export default function A(props: AProps) {
    return (
        <Link
            className={aStyle.a + (props.className ? props.className + ' ' + aStyle.a : '')}
            href={props.href}
        >
            {props.children}
        </Link>
    )
}