import { memo, FC } from "react";
import { DefaultHeader } from "../DefaultHeader";
import { DefaultFooter } from "../DefaultFooter";
import DefaultLayoutProps from './utils/interface/DefaultLayoutProps';

import stylesWrapper from './style/wrapper.module.scss';
import stylesMain from './style/main.module.scss';

const DefaultLayout: FC<DefaultLayoutProps> = memo(
    ({ children }): JSX.Element => {
        return (
            <div className={stylesWrapper.wrapper}>
                <DefaultHeader></DefaultHeader>

                <main className={stylesMain.main}>
                    {children}
                </main>

                <DefaultFooter></DefaultFooter>
            </div>
        )
    }
);

export default DefaultLayout;