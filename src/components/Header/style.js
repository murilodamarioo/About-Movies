import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 11.6rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};


    > h2 {
        font-size: 2.4rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Search = styled.div`
    min-width: 63rem;
    margin: 0 1rem;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        margin-right: .9rem;

        strong {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE_300};
        }

        > a {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            align-self: flex-end;
        }
    }

    > img {
            width: 6.4rem;
            height: 6.4rem;
            border-radius: 50%;
        }
`