import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface IButtonMUIProps {
    title: string;
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    variant: 'text' | 'outlined' | 'contained';
    handleClick: () => void
}

const ButtonMUI = ({
                       title,
                       color,
                       variant,
                       handleClick,
                   }: IButtonMUIProps) => {
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