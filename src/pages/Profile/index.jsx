import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { BackButton } from '../../components/BackButton'

import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { api } from '../../services/api'


export function Profile() {
    const navigate = useNavigate()
    const { user, updateProfile } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

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

        await updateProfile({ user: userUpdate, avatarFile })
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <BackButton onClick={handleBack} icon={FiArrowLeft} title="Voltar" />
            </header>

            <Form>
                <Avatar>
                    <img 
                        src={avatar} 
                        alt="Foto de perfil" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
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