export default interface InputProps {
    className?: string | undefined,
    value?: string | number | null | undefined,
    onFocus?: Function | undefined,
    onBlur?: Function | undefined,
    onInput?: Function | undefined,
    onChange?: Function | undefined,
    placeholder?: string | undefined,
    id?: string | undefined,
    type?: string | undefined,
    name?: string | undefined,
    readOnly?: boolean | undefined,
    disabled?: boolean | undefined,
}