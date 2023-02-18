import Link from 'next/link';
import { FC, memo } from 'react';
import AProps from "../../utils/AProps";
import styles from './styles/a.module.scss';

const A: FC<AProps> = memo(
    ({ className, href, children }): JSX.Element => {
        return (
            <Link
                className={styles.a + (className ? className + ' ' + styles.a : '')}
                href={href}
            >
                {children}
            </Link>
        )
    });

export default A;