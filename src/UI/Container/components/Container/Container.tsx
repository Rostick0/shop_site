import styles from './styles/container.module.scss';
import ContainerProps from '../../utils/interface/ContainerProps';
import { FC, memo } from 'react';

const Container: FC<ContainerProps> = memo(
    ({ children }): JSX.Element => {
        return (
            <div className={styles.container}>{children}</div>
        )
    }
);

export default Container;