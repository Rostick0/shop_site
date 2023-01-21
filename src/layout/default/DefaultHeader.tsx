import Link from "next/link";

export default function DefaultHeader() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <Link className="header__logo" href="/">
                        <h1>Всем по сайту!</h1>
                    </Link>
                    <ul className="header__navigation">
                        <li className="header__navigation_item">
                            <Link href="/catalog">Каталог</Link>
                        </li>
                        <li className="header__navigation_item">
                            <Link href="/reviews">Отзывы</Link>
                        </li>
                        <li className="header__navigation_item">
                            <Link href="/help">Помощь</Link>
                        </li>
                        <li className="header__navigation_item">
                            <Link href="/feedback">Связь</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}