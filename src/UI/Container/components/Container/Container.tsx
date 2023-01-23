import container from './styles/container.module.scss';
import ContainerProps from '../../utils/interface/ContainerProps';

export default function Container(props: ContainerProps) {
    return (
        <div className={container.container}>{props.children}</div>
    )
}