import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { BackButton } from '../../components/BackButton'

import { Container, Form, Background } from './styles'

export function SignUp() {
    
    return (
        <Container>
            <Form>
                <h1>AboutMovies</h1>
                <p>aplicação para acompanhar tudo que assitir</p>

                <h2>Crie sua conta</h2>

                <Input
                    icon={FiUser}
                    type="text"
                    placeholder="Nome"
                />

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

                <Button title="Cadastrar"/>

                <BackButton to="/" icon={FiArrowLeft} title="Voltar para o login"/>
            </Form>

            <Background />
        </Container>
    )
}