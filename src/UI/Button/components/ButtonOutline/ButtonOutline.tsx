import styles from './styles/button_outline.module.scss';
import ButtonProps from '../../utils/interface/ButtonProps';
import { FC, memo } from 'react';

const ButtonOutline: FC<ButtonProps> = memo(
    ({ className, onClick, id, name, type, disabled, children }): JSX.Element => {
        return (
            <button
                className={styles.button_outline + (className ? ' ' + className : '')}
                onClick={onClick}
                id={id}
                name={name}
                type={type}
                disabled={disabled}
            >{children}</button>
        )
    });

export default ButtonOutline;