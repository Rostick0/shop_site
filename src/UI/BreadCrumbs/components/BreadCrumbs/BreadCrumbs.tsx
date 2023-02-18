import Link from 'next/link';
import { FC, memo } from 'react';
import BreadCrumbsProps from '../../utils/interface/BreadCrumbsProps'
import styles from './styles/bread_crumbs.module.scss';

const BreadCrumbs: FC<BreadCrumbsProps> = memo(
    ({ links }): JSX.Element => {
        return (
            <nav className={styles.bread_crumbs}>
                {
                    links?.map(elem => {
                        if (!elem?.href) {
                            return (
                                <span
                                    key={elem?.id}
                                >
                                    {elem?.text}
                                </span>
                            )
                        }

                        return (
                            <Link
                                key={elem?.id}
                                href={elem?.href}
                            >{elem?.text}</Link>
                        )
                    })
                }
            </nav>
        );
    });

export default BreadCrumbs;