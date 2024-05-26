import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    margin-top: 4.2rem;

    border: none;
    background: transparent;

    color: ${({ theme }) => theme.COLORS.PINK};

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`