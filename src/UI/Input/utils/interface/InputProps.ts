export default interface InputProps {
    className?: string | undefined,
    value?: string | number | null | undefined,
    onFocus?: React.FocusEventHandler<HTMLElement>,
    onBlur?: React.FocusEventHandler<HTMLElement>,
    onInput?: React.FormEventHandler<HTMLElement>,
    onChange?: React.FormEventHandler<HTMLElement>,
    placeholder?: string | undefined,
    id?: string | undefined,
    type?: string | undefined,
    name?: string | undefined,
    readOnly?: boolean | undefined,
    disabled?: boolean | undefined,
}

