import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color : ${({ theme }) => theme.COLORS.BLACK_200};

    border: none;
    border-radius: 1rem;

    padding: 0 1.6rem;
    font-weight: 500;
    margin-top: 1.6rem;
`