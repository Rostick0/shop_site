import { X } from '@/UI/Button/components/X';
import styles from './styles/clear.module.scss';
import CatalogSearchClearProps from './utils/interface/CatalogSearchClearProps';
import { CSSTransition } from 'react-transition-group';
import { memo, FC } from 'react';

const CatalogSearchClear: FC<CatalogSearchClearProps> = memo(
    ({ isActive, onClick }): JSX.Element => {
        return (
            <CSSTransition
                classNames={{
                    enterActive: styles.clear_enter,
                    enterDone: styles.clear_enter_active,
                    exitDone: styles.clear_exit_active
                }}
                in={isActive}
                timeout={300}
                mountOnEnter
            >
                <X
                    onClick={onClick}
                ></X>
            </CSSTransition >
        )
    });

export default CatalogSearchClear;