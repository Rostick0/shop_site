import DefaultHeader from "../DefaultHeader/DefaultHeader";
import DefaultFooter from "../DefaultFooter/DefaultFooter";

import wrapper from './style/wrapper.module.scss';
import main from './style/main.module.scss';

interface DefaultLayoutProps {
    children: JSX.Element[] | JSX.Element | String,
}

export default function DefaultLayout(props: DefaultLayoutProps): JSX.Element {
    return (
        <div className={wrapper.wrapper}>
            <DefaultHeader></DefaultHeader>

            <main className={main.main}>
                {props.children}
            </main>

            <DefaultFooter></DefaultFooter>
        </div>
    )
}