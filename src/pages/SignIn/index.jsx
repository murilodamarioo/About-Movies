import { FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Background } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {

    return (
        <Container>
            <Form>
                <h1>AboutMovies</h1>
                <p>aplicação para acompanhar tudo que assitir</p>

                <h2>Faça seu Login</h2>

                <Input  
                    icon={FiMail}
                    type="text"
                    placeholder="E-mail" 
                />
                <Input 
                    icon={FiLock}
                    type="password"    
                    placeholder="Senha"
                />

                <Button title="Entrar"/>

                <a href="/register">Criar conta</a>
            </Form>

            <Background />
        </Container>
    )
}