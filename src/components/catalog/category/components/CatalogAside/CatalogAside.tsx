import { memo, FC } from 'react';
import styles from './styles/catalog_aside.module.scss';

const CatalogAside: FC = memo(
    (): JSX.Element => {
        return (
            <aside className={styles.catalog_aside}>

            </aside>
        );
    }
);

export default CatalogAside;