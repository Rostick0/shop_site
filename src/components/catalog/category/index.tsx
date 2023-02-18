import dynamic from 'next/dynamic';

const CategoryWidget = dynamic(() => import('./widget/CatalogWidget'));

export {
    CategoryWidget
}