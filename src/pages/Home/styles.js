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
    
    > header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 1.6rem;

        h1 {
            font-size: 3.2rem;
            font-weight: 400;
        }

        :nth-child(2) {
            width: 20.7rem;
            height: 4.8rem;
        }
    }
`

export const Movie = styled.div`
    margin-top: 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    padding: 3.2rem;
    border-radius: 1.6rem;

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

export const Genres = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    :nth-child(n) {
        background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
`