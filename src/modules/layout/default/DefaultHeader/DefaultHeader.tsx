import { Container } from "@/UI/Container";
import Link from "next/link";
import { DefaultHeaderNavigation } from "./components/DefaultHeaderNavigation";
import header from './style/header.module.scss';

export default function DefaultHeader() {
    return (
        <header className={header.header}>
            <Container>
                <div className={header.header__container}>
                    <Link className={header.header__logo} href="/">
                        <h1>Всем по сайту!</h1>
                    </Link>
                    <DefaultHeaderNavigation></DefaultHeaderNavigation>
                </div>
            </Container>
        </header>
    )
}