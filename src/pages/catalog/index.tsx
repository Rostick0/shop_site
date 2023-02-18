import { DefaultLayout } from '@/components/layout/default';
import { Container } from '@/UI/Container';
import styles from './style/catalog.module.scss'

export default function PageCatalog() {
    return (
        <DefaultLayout>
            <div className={styles.catalog}>
                <Container>

                </Container>
            </div>
        </DefaultLayout>
    )
}