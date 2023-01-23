import { DefaultLayout } from '@/modules/layout/default';
import { Container } from '@/UI/Container';
import style from './style/catalog.module.scss'

export default function PageCatalog() {
    return (
        <DefaultLayout>
            <div className={style.catalog}>
                <Container>
                    
                </Container>
            </div>
        </DefaultLayout>
    )
}