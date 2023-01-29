import { Button } from '@/UI/Button';
import Link from 'next/link';
import auth from './style/auth.module.scss'

export default function DefaultHeaderAuth() {
    return (
        <div className={auth.auth}>
            <Link href="/cart">
                <Button>Корзина</Button>
            </Link>
            <Link href="/login">
                <Button>Войти</Button>
            </Link>
        </div>
    );
}