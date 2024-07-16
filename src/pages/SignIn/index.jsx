import { FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Background } from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password })
    }

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
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    icon={FiLock}
                    type="password"    
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}/>

                <Link to="/register">Criar conta</Link>
            </Form>

            <Background />
        </Container>
    )
}