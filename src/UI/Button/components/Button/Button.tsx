import style from './styles/button.module.scss';
import ButtonProps from '../../utils/interface/ButtonProps';
import { checkFunction } from '@/utils';

export default function Button(props: ButtonProps): JSX.Element {
    return (
        <button
            className={style.button + (props.className ? ' ' + props.className : '')}
            onClick={() => checkFunction(props.onClick)}
            id={props.id}
            name={props.name}
            type={props.type}
            disabled={props.disabled}
        >{props.children}</button>
    )
}