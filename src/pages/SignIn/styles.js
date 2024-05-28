import styled from 'styled-components'
import backgroundImg from '../../assets/bg-cinema.png'

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`

export const Form = styled.form`
    padding: 0 13.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    text-align: center;

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.PINK}; 
    }

    p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        align-self: flex-start;
        margin: 4.8rem 0;
        color: ${({ theme }) => theme.COLORS.WHITE_300};
    }

    :nth-child(7) {
        margin-top: 4.2rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`