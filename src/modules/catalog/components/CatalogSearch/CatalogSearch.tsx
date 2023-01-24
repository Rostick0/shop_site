import { Button } from '@/UI/Button'
import { Input } from '@/UI/Input'
import { useState } from 'react'
import { CatalogSearchClear } from './components/CatalogSearchClear/'
import styles from './styles/catalog_search.module.scss'

export default function CatalogSearch() {
    const [active, setActive] = useState(false)

    return (
        <div className={styles.catalog_search}>
            <Input className={styles.catalog_search__input}></Input>
            <div className={styles.catalog_search__buttons}>
                <CatalogSearchClear isActive={active}></CatalogSearchClear>
                <Button className={styles.catalog_search__search} onClick={() => setActive(prev => prev = !prev)}>Найти</Button>
            </div>
        </div>
    )
}