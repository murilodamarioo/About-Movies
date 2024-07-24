import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { BackButton } from '../../components/BackButton'

import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'


export function Profile() {
    const navigate = useNavigate()
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    function handleBack() {
        navigate(-1)
    }

    async function handleUpdateProfile() {
        const data = {
            name,
            email,
            old_password: oldPassword,
            password: newPassword
        }

        const userUpdate = Object.assign(user, data)
        console.log(user)
        console.log(data)
        console.log(userUpdate)
  

        await updateProfile({ user: userUpdate })
    }

    return (
        <Container>
            <header>
                <BackButton onClick={handleBack} icon={FiArrowLeft} title="Voltar" />
            </header>

            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/murilodamarioo.png" 
                        alt="Foto de perfil" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                            id="avatar" 
                            type="file" 
                        />
                    </label>
                </Avatar>

                <Input 
                    icon={FiUser} 
                    placeholder="Nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <Input 
                    icon={FiMail} 
                    placeholder="E-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <Input 
                    icon={FiLock} 
                    placeholder="Senha atual"
                    type="password"
                    value={oldPassword}
                    onChange={event => setOldPassword(event.target.value)}
                />
                <Input 
                    icon={FiLock} 
                    placeholder="Senha nova"
                    type="password"
                    value={newPassword}
                    onChange={event => setNewPassword(event.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdateProfile}/>
            </Form>
        </Container>
    )
}