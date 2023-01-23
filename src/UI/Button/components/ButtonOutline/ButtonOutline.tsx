import style from './styles/button_outline.module.scss';
import ButtonProps from '../../utils/interface/ButtonProps';
import { checkFunction } from '@/utils';

export default function ButtonOutline(props: ButtonProps): JSX.Element {
    return (
        <button
            className={style.button_outline + (props.className ? ' ' + props.className : '')}
            onClick={() => checkFunction(props.onClick)}
            id={props.id}
            name={props.name}
            type={props.type}
            disabled={props.disabled}
        >{props.children}</button>
    )
}