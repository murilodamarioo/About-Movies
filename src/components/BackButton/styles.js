import styled from 'styled-components'

export const Container = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    margin-top: 4.2rem;

    color: ${({ theme }) => theme.COLORS.PINK};

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`