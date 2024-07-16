import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { BackButton } from '../../components/BackButton'

import { Container, Form, Background } from './styles'

import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert('Preencha todos os dados')
        }

        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuário Cadastrado com sucesso')
                navigate('/')
            })
            .catch(error => {
                if (error.message) {
                    alert(error.response.data.message)
                } else {
                    alert('Não foi possível cadastrar o usuário!')
                }
            })
    }
    
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
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    icon={FiMail}
                    type="text"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSignUp} />

                <BackButton to="/" icon={FiArrowLeft} title="Voltar para o login"/>
            </Form>

            <Background />
        </Container>
    )
}