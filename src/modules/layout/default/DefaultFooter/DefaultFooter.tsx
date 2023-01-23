import { Container } from '@/UI/Container';
import footer from './style/footer.module.scss';

export default function DefaultFooter() {
    return (
        <footer className={footer.footer}>
            <Container>
                <div className={footer.footer__container}>

                </div>
            </Container>
        </footer>
    )
}