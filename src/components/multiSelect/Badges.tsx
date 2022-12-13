import { IUser } from '../../pages/home'
import {
    BadgesBlock,
    Badge,
} from './MultiSelect.styled'

import closeIcon from '../../assets/icons/close.svg'

interface IBadgeProps {
    selectedOptionsId: string[],
    options: IUser[],
    handleBadgeCloseIconClick: (id: string) => void
}

export const Badges = ({options, selectedOptionsId, handleBadgeCloseIconClick}: IBadgeProps) => {
    const badgesRender = selectedOptionsId.length
        ? (options.filter(({id}: IUser) => selectedOptionsId.includes(id.toString())))
            .map(({id, name}: IUser) => <Badge key={id}>
                    <span>{name}</span>
                    <img
                        src={closeIcon}
                        alt="close icon"
                        onClick={() => handleBadgeCloseIconClick(id.toString())}
                    />
            </Badge>,
            )
        : 'No selected items'

    return (
        <BadgesBlock>
            {badgesRender}
        </BadgesBlock>
    )
}