import Link from "next/link";
import navigation from './style/navigation.module.scss';

export default function DefaultHeaderNavigation() {
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