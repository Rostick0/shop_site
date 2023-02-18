import Link from "next/link";
import { memo } from "react";
import navigation from './style/navigation.module.scss';

const DefaultHeaderNavigation = memo(
    () => {
        return (
            <ul className={navigation.navigation}>
                <li className={navigation.navigation__item}>
                    <Link href="/catalog">Каталог</Link>
                </li>
                <li className={navigation.navigation__item}>
                    <Link href="/reviews">Отзывы</Link>
                </li>
                <li className={navigation.navigation__item}>
                    <Link href="/help">Помощь</Link>
                </li>
                <li className={navigation.navigation__item}>
                    <Link href="/feedback">Связь</Link>
                </li>
            </ul>
        )
    }
);

export default DefaultHeaderNavigation;