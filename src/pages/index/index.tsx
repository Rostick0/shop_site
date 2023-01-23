import Head from 'next/head';
import { DefaultLayout } from '@/modules/layout/default';
import { Button, ButtonOutline } from '@/UI/Button';

export default function PageIndex() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="color-scheme" content="light" />
                <title>Шаблоны на все случаи жизни</title>
            </Head>
            <DefaultLayout>
                <div className="index">
                    <div className="container">
                        <div className="index__container">
                            Привет
                        </div>
                        <Button>Тест</Button>
                        <ButtonOutline>1</ButtonOutline>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}
