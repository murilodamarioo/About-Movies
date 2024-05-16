import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme}) => theme.COLORS.GRAY_200};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-bottom: 1.2rem;
    border-radius: 1rem;

    > input {
        &:placeholder {
            color: ${({ theme}) => theme.COLORS.GRAY_300};
        }

        width: 100%;
        height: 5.6rem;
        padding: 1.2rem;

        color: ${({ theme }) => theme.COLORS.WHITE_300};
        background: transparent;
        border: 0;
    }

    > svg {
        margin-left: 1.6rem;
    }
` 