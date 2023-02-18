import { DefaultLayout } from '@/components/layout/default';
import { Container } from '@/UI/Container';
import styles from './style/cart.module.scss'

export default function PageCartg() {
    return (
        <DefaultLayout>
            <div className={styles.cart}>
                <Container>

                </Container>
            </div>
        </DefaultLayout>
    )
}