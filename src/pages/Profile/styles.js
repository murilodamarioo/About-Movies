import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    > header {
        background-color: ${({ theme }) => theme.COLORS.GRAY_400};

        width: 100%;
        height: 11.4rem;

        display: flex;
        align-items: flex-start;
        padding: 0 14.4rem;
    }
`

export const Form = styled.form`
    max-width: 34rem;
    margin: 30px auto 0;

    :nth-child(3), :nth-child(5){
        margin-bottom: 2.4rem;
    }
    
`

export const Avatar = styled.div`
    position: relative;
    margin: -10.4rem auto 3.2rem;

    width: 18.6rem;
    height: 18.6rem;
    
    > img {
        border-radius: 50%;
        width: 18.6rem;
        height: 18.6re,;    
    }

    > label {
        width: 4.8rem;
        height: 4.8rem;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: .7rem;
        right: .7rem;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.GRAY_400};
        }
    }
    
`
