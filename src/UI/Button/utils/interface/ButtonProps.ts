export default interface ButtonProps {
    className?: string | undefined,
    onClick?: React.MouseEventHandler<HTMLElement>,
    id?: string | undefined,
    type?: 'submit' | 'reset' | 'button' | undefined,
    name?: string | undefined,
    disabled?: boolean | undefined,
    children: JSX.Element[] | JSX.Element | string,
}