import { Container, Profile, Search } from './style'

import { FiSearch } from 'react-icons/fi'

import { Input } from '../Input'

import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'


export function Header() {
    const navegate = useNavigate()
    const { user, signOut } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function handleProfileNavigate() {
        navegate('/profile')
    }

    return (
        <Container>
            <h2>AboutMovies</h2>

            <Search>
                <Input icon={FiSearch} placeholder="Pesquisar pelo título"/>
            </Search>

            <Profile>
                <div>
                    <strong>
                        <p>{user.name}</p>
                    </strong>
                    <a onClick={signOut}>Sair</a>
                </div>

                <a onClick={handleProfileNavigate}>
                    <img
                        src={avatarUrl}
                        alt="Foto de perfil" 
                    />
                </a>
            </Profile>
        </Container>
    )
}