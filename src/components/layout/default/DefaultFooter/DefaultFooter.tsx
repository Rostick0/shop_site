import { Container } from '@/UI/Container';
import { FC, memo } from 'react';
import styles from './style/footer.module.scss';

const DefaultFooter: FC = memo(
    (): JSX.Element => {
        return (
            <footer className={styles.footer}>
                <Container>
                    <div className={styles.footer__container}>

                    </div>
                </Container>
            </footer>
        )
    }
);

export default DefaultFooter;