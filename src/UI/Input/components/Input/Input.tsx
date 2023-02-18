import styles from './styles/input.module.scss';
import InputProps from '../../utils/interface/InputProps';
import { FC, memo } from 'react';

const Input: FC<InputProps> = memo(
    ({ className, value, onFocus, onBlur, onInput, onChange, placeholder, name, id, type, readOnly, disabled }): JSX.Element => {
        return (
            <input
                className={styles.input + (className ? ' ' + className : '')}
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
                onInput={onInput}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                id={id}
                type={type}
                readOnly={readOnly}
                disabled={disabled}
            />
        )
    });

export default Input;