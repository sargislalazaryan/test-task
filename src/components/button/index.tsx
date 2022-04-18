import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface IButtonMUIProps {
    title: string;
    color: string;
    variant: string;
    handleClick: () => void
}

const ButtonMUI = ({
                       title,
                       color,
                       variant,
                       handleClick,
                   }: any) => {
    return (
        <Stack direction="row" spacing={2}>
            <Button
                variant={variant}
                color={color}
                onClick={handleClick}
            >
                {title}
            </Button>
        </Stack>
    );
}

export default ButtonMUI;