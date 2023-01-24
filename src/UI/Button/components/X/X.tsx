import styles from './styles/x.module.scss';
import XProps from './utils/interface/X';

export default function X(props: XProps) {
    return (
        <div
            className={styles.x + (props.className ? ' ' + props.className : '')}
            onClick={props.onClick}
        ></div>
    )
}