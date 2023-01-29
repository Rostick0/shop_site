import { DefaultLayout } from '@/modules/layout/default';
import { Button, ButtonOutline } from '@/UI/Button';
import { Container } from '@/UI/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import errorStyle from './style/error.module.scss';

export default function Page404() {
    const router = useRouter();

    console.log(router)

    return (
        <DefaultLayout>
            <div className={errorStyle.error}>
                <Container>
                    <div className={errorStyle.error__container}>
                        <strong className={errorStyle.error__title}>
                            Ошибка 404
                        </strong>
                        <div className={errorStyle.error__subtitle}>
                            Страница не найдена
                        </div>
                        <div className={errorStyle.error__buttons}>
                            <Link className={errorStyle.error__link_main} href="/">
                                <Button className={errorStyle.error__button_main}>На главную</Button>
                            </Link>
                            <ButtonOutline
                                className={errorStyle.error__button_back}
                                onClick={() => router.back()}
                            >Вернуться назад</ButtonOutline>
                        </div>
                    </div>
                </Container>
            </div>
        </DefaultLayout>
    )
}