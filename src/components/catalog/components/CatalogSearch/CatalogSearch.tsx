import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import React, { FC, memo } from 'react';
import { CatalogSearchClear } from './components/CatalogSearchClear/';
import { useCatalogSearch } from './components/CatalogSearchClear/utils/hooks/useCatalogSearch';
import styles from './styles/catalog_search.module.scss';

const CatalogSearch: FC = memo(
    (): JSX.Element => {
        const { active, search, setInput, clear } = useCatalogSearch();

        return (
            <div className={styles.catalog_search}>
                <Input value={search} onInput={setInput} className={styles.catalog_search__input}></Input>
                <div className={styles.catalog_search__buttons}>
                    <CatalogSearchClear isActive={active} onClick={clear}></CatalogSearchClear>
                    <Button>Найти</Button>
                </div>
            </div>
        )
    }
);

export default CatalogSearch;