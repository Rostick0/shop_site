import { Button } from '@/UI/Button';
import Link from 'next/link';
import { memo } from 'react';
import auth from './style/auth.module.scss'

const DefaultHeaderAuth = memo(
    () => {
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
);

export default DefaultHeaderAuth;