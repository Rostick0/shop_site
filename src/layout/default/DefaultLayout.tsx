import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";

interface DefaultLayoutProps {
    children: JSX.Element[] | JSX.Element;
}

export default function DefaultLayout(props: DefaultLayoutProps): JSX.Element {
    return (
        <div className="wrapper">
            <DefaultHeader></DefaultHeader>

            <main className="main">
                {props.children}
            </main>

            <DefaultFooter></DefaultFooter>
        </div>
    )
}