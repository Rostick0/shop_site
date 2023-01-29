import { DefaultLayout } from '@/modules/layout/default';
import { Container } from '@/UI/Container';
import catalog from './style/catalog.module.scss'

export default function PageCatalog() {
    return (
        <DefaultLayout>
            <div className={catalog.catalog}>
                <Container>

                </Container>
            </div>
        </DefaultLayout>
    )
}