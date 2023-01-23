import { checkFunction } from '@/utils';
import style from './styles/input.module.scss';
import InputProps from '../../utils/interface/InputProps';

export default function Input(props: InputProps) {
    return (
        <input
            className={style.input + (props.className ? ' ' + props.className : '')}
            onFocus={() => checkFunction(props.onFocus)}
            onBlur={() => checkFunction(props.onBlur)}
            onInput={() => checkFunction(props.onInput)}
            onChange={() => checkFunction(props.onChange)}
            placeholder={props.placeholder}
            name={props.name}
            id={props.id}
            type={props.type}
            readOnly={props?.readOnly}
            disabled={props.disabled}
        />
    )
}