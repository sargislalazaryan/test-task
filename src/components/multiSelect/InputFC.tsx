interface IInputFCProps {
    type: string,
    placeholder: string,
    inputEl: React.LegacyRef<HTMLInputElement> | undefined,
    handleInputFocus: () => void
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputFC = ({
    type,
    placeholder,
    inputEl,
    handleInputFocus,
    handleInputChange,
}: IInputFCProps) => {

    return (
        <input
            type={type}
            placeholder={placeholder}
            ref={inputEl}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
        />
    )
}