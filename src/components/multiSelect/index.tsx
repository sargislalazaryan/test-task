import { useState, useEffect, useRef, useCallback } from 'react'

import {
    MultiSelectWrapper,
    InputBadgesBlock,
    InputWrapper,
} from './MultiSelect.styled'

import { DropdownFC } from './DropdownFC'
import { Badges } from './Badges'
import { InputFC } from './InputFC'

import { IUser } from '../../pages/home'

interface IMultiSelectFCProps {
    options: IUser[]
}
export const MultiSelectFC = ({ options }: IMultiSelectFCProps) => {
    const inputEl = useRef<HTMLInputElement>(null)
    const [isDropdownShow, setDropdownShow] = useState<boolean>(false)
    const [filteredOptions, setFilteredOptions] = useState<IUser[]>(options)
    const [selectedOptionsId, setSelectedOptionsId] = useState<string[]>( [])

    useEffect( () => {
        document.addEventListener('keydown', handleKeyPress, false)

        return () => document.removeEventListener('keydown', handleKeyPress, false)
    }, [])

    const handleInputFocus = () => setDropdownShow(true)

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFilteredOptions(options.filter(({name}: IUser) =>
            name.toLowerCase().includes(e.target.value.toLowerCase())),
        )
    }, [])

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setDropdownShow(false)
            inputEl?.current?.blur()
        }
    }

    const handleOptionClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const { value } = e.currentTarget.dataset
        if(value) {
            !selectedOptionsId.includes(value)
                ? setSelectedOptionsId([...selectedOptionsId, value])
                : setSelectedOptionsId(selectedOptionsId.filter( (id: string) => id !== value))
        }
    }

    const handleBadgeCloseIconClick = (itemId: string) =>
        setSelectedOptionsId(selectedOptionsId.filter( (id: string) => id !== itemId))

    return (
        <MultiSelectWrapper>
            <InputBadgesBlock>
                <InputWrapper>
                    <InputFC
                        type="text"
                        placeholder="Type here..."
                        inputEl={inputEl}
                        handleInputFocus={handleInputFocus}
                        handleInputChange={handleInputChange}
                    />
                </InputWrapper>
                <Badges
                    options={options}
                    selectedOptionsId={selectedOptionsId}
                    handleBadgeCloseIconClick={handleBadgeCloseIconClick}
                />
            </InputBadgesBlock>
            <DropdownFC
                show={isDropdownShow}
                options={filteredOptions}
                selectedOptionsId={selectedOptionsId}
                handleOptionClick={handleOptionClick}
            />
        </MultiSelectWrapper>
    )
}
