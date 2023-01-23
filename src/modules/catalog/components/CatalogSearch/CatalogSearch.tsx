import { Button } from '@/UI/Button'
import { Input } from '@/UI/Input'
import CatalogSearchClear from '../CatalogSearchClear/CatalogSearchClear'
import styles from './styles/catalog_search.module.scss'

export default function CatalogSearch() {
    return (
        <div className={styles.catalog_search}>
            <Input className={styles.catalog_search__input}></Input>
            <div className={styles.catalog_search__buttons}>
                <CatalogSearchClear isActive={true}></CatalogSearchClear>
                <Button className={styles.catalog_search__search}>Найти</Button>
            </div>
        </div>
    )
}