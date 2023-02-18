import { memo, FC } from 'react';
import styles from './styles/x.module.scss';
import XProps from './utils/interface/X';

const X: FC<XProps> = memo(
    ({ className, onClick }): JSX.Element => {
        return (
            <div
                className={styles.x + (className ? ' ' + className : '')}
                onClick={onClick}
            ></div>
        )
    });

export default X;