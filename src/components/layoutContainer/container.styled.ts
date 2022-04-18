import styled from '@emotion/styled';

interface IContainerProps {
    mw: string,
    bgColor: string,
}

export const Container = styled.div( ({mw, bgColor}: IContainerProps) => ({
    maxWidth: `${mw}px`,
    backgroundColor: bgColor,
    margin: '0 auto',
}));

export const PaddingWrapper = styled.div`
  padding: 20px;
`;
