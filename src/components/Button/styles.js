import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    width: 100%;
    height: 5.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color : ${({ theme }) => theme.COLORS.BLACK_200};

    border: none;
    border-radius: 1rem;

    padding: 0 1.6rem;
    font-weight: 500;
    margin-top: 1.6rem;

    > svg {
        margin-right: .8rem;
    }
`