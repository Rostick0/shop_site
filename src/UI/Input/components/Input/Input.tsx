import style from './styles/input.module.scss';
import InputProps from '../../utils/interface/InputProps';

export default function Input(props: InputProps) {
    return (
        <input
            className={style.input + (props.className ? ' ' + props.className : '')}
            value={props.value}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            onInput={props.onInput}
            onChange={props.onChange}
            placeholder={props.placeholder}
            name={props.name}
            id={props.id}
            type={props.type}
            readOnly={props?.readOnly}
            disabled={props.disabled}
        />
    )
}