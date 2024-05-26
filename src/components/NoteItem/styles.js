import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.GRAY_200};
    color: #FFFFFF;
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};
    
    border-radius: 1rem;
    padding-right: 1.6rem;

    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        width: auto;
        height: 5.6rem;
        padding: 1.6rem;


        color: ${({ theme }) => theme.COLORS.WHITE_300};
        background: transparent;
        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`

