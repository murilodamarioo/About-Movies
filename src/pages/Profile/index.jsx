import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { BackButton } from '../../components/BackButton'

import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'


export function Profile() {
    return (
        <Container>
            <header>
                <BackButton icon={FiArrowLeft} title="Voltar"/>
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
                />
                <Input 
                    icon={FiMail} 
                    placeholder="E-mail"
                />

                <Input 
                    icon={FiLock} 
                    placeholder="Senha atual"
                />
                <Input 
                    icon={FiLock} 
                    placeholder="Senha nova"
                />

                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}