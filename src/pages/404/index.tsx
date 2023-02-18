import { DefaultLayout } from '@/components/layout/default';
import { Button, ButtonOutline } from '@/UI/Button';
import { Container } from '@/UI/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './style/error.module.scss';

export default function Page404() {
    const router = useRouter();

    return (
        <DefaultLayout>
            <div className={styles.error}>
                <Container>
                    <div className={styles.error__container}>
                        <strong className={styles.error__title}>
                            Ошибка 404
                        </strong>
                        <div className={styles.error__subtitle}>
                            Страница не найдена
                        </div>
                        <div className={styles.error__buttons}>
                            <Link className={styles.error__link_main} href="/">
                                <Button className={styles.error__button_main}>На главную</Button>
                            </Link>
                            <ButtonOutline
                                className={styles.error__button_back}
                                onClick={() => router.back()}
                            >Вернуться назад</ButtonOutline>
                        </div>
                    </div>
                </Container>
            </div>
        </DefaultLayout>
    )
}