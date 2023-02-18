import dynamic from 'next/dynamic';

const DefaultLayout = dynamic(() => import('./DefaultLayout'));

export {
    DefaultLayout
}