import { Container } from "@/UI/Container";
import Link from "next/link";
import { memo } from "react";
import { DefaultHeaderAuth } from "./components";
import { DefaultHeaderNavigation } from "./components";

import styles from './style/header.module.scss';

const DefaultHeader = memo(
    () => {
        return (
            <header className={styles.header}>
                <Container>
                    <div className={styles.header__container}>
                        <Link className={styles.header__logo} href="/">
                            <h1>Всем по сайту!</h1>
                        </Link>
                        <DefaultHeaderNavigation></DefaultHeaderNavigation>
                        <DefaultHeaderAuth></DefaultHeaderAuth>
                    </div>
                </Container>
            </header>
        )
    }
)

export default DefaultHeader;