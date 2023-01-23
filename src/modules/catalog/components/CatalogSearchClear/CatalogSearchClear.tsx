import { checkFunction } from '@/utils';
import styles from './styles/clear.module.scss';
import CatalogSearchClearProps from './utils/interface/CatalogSearchClearProps';

export default function CatalogSearchClear(props: CatalogSearchClearProps) {


    return (
        <div
            className={styles.clear + (props.isActive ? ' _active' : '')}
            onClick={() => checkFunction(props.onClick)}
        ></div>
    )
}