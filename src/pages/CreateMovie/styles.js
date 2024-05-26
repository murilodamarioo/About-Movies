import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export const Form = styled.form`
    max-width: 120rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    > header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.4rem;

    }

    > .input-group {
        display: flex;
        gap: 4rem;
    }

    > .buttons-group {
        display: flex;
        gap: 4rem;

        :nth-child(1) {
            background-color: ${({ theme }) => theme.COLORS.BLACK_100};
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
` 

export const Textarea = styled.textarea`
    width: 100%;
    height: 27.4rem;
    border-radius: 1rem;

    resize: none;
    border: none;

    padding: 2rem 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE_300};

    background-color: ${({ theme }) => theme.COLORS.GRAY_200};

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`

export const BookMarks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > h3 {
        color: ${({ theme }) => theme.COLORS.GRAY_500};
        font-size: 2rem;
    }

    .tags {
        display: flex;
        gap: 2.4rem;
    }
`
