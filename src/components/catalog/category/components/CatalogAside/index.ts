import dynamic from 'next/dynamic';

const CatalogAside = dynamic(() => import('./CatalogAside'));

export {
    CatalogAside
}