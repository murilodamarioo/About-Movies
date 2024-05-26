import styled  from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    margin-top: 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    padding: 3.2rem;
    border-radius: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE_300};

    > h2 {
        font-size: 2.4rem;
        font-weight: 700;
        margin-bottom: .8rem;
    }

    > svg {
        fill: ${({ theme }) => theme.COLORS.PINK};
        margin-right: 0.1rem;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        margin-bottom: 1.5rem;
        margin-top: 1.5rem;
    }

    cursor: pointer;
`

export const Genres = styled.footer`
    display: flex;
    align-items: center;
    gap: .8rem;

    :nth-child(n) {
        background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
`