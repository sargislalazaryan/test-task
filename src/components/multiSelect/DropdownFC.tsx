import {
    DropdownBlock,
    Option,
} from './MultiSelect.styled'

import { IUser } from '../../pages/home'

interface IDropdownFCProps {
    show: boolean,
    options: IUser[],
    selectedOptionsId: string[],
    handleOptionClick: (e: React.MouseEvent<HTMLDivElement>) => void,
}

export const DropdownFC = ({show, options, selectedOptionsId, handleOptionClick}: IDropdownFCProps) => {
    const optionsRender = options.map(({id, name}: IUser) => {
        const selected = selectedOptionsId.includes(id.toString())

        return (
                <Option
                    key={id}
                    className={`option ${selected && 'selected'}`}
                    data-value={id}
                    onClick={handleOptionClick}
                >
                    {name}
                </Option>
            )
        },
    )

    return show ? <DropdownBlock>{optionsRender}</DropdownBlock> : null
}
