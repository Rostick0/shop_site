import Head from 'next/head';
import DefaultLayout from '@/layout/default/DefaultLayout';

export default function PageMain() {
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
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
