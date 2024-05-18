import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > main {
        padding: 4rem 0;
    }
`

export const Content = styled.div`
    max-width: 120rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > :nth-child(1) {
        align-self: flex-start;
        margin-bottom: 2.4rem;
    }
`

export const RatingMovie = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    h1 {
        font-size: 3.6rem;
        font-weight: 400;
    }

    > svg {
        fill: ${({ theme }) => theme.COLORS.PINK};
        height: 2.2rem;
        width: 2.2rem;
    }
`

export const CreatedBy = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
    margin-top: 2.4rem;

    font-weight: 400;

    > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Genres = styled.div`
    margin-bottom: 4rem;
    margin-top: 4rem;
`

export const Description = styled.div`
    font-weight: 400;
    text-align: justify;
`