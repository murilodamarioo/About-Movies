import styled from 'styled-components'

export const Container = styled.span`
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
    margin-right: .8rem;
    border-radius: 0.8rem;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`