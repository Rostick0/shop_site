import { X } from '@/UI/Button/components/X';
import styles from './styles/clear.module.scss';
import CatalogSearchClearProps from './utils/interface/CatalogSearchClearProps';
import { CSSTransition } from 'react-transition-group';

export default function CatalogSearchClear(props: CatalogSearchClearProps) {
    return (
        <CSSTransition
            classNames={{
                enterActive: styles.clear_enter,
                enterDone: styles.clear_enter_active,
                exitDone: styles.clear_exit_active
            }}
            in={props.isActive}
            timeout={300}
            mountOnEnter
        >
            <X
                onClick={props.onClick}
            ></X>
        </CSSTransition >
    )
}