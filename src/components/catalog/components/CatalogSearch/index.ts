import dynamic from 'next/dynamic';

const CatalogSearch = dynamic(() => import('./CatalogSearch'));

export {
    CatalogSearch
}