export default interface ButtonProps {
    className?: String | undefined,
    onClick?: Function | undefined,
    id?: string | undefined,
    type?: 'submit' | 'reset' | 'button' | undefined,
    name?: string | undefined,
    disabled?: boolean | undefined,
    children: JSX.Element[] | JSX.Element | string,
}