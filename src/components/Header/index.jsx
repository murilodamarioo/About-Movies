import { Container, Profile, Search } from './style'

import { FiSearch } from 'react-icons/fi'

import { Input } from '../Input'

import { useAuth } from '../../hooks/auth'

import { useNavigate } from 'react-router-dom'


export function Header() {
    const navegate = useNavigate()
    const { signOut } = useAuth()

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
                        <p>Murilo Damario</p>
                    </strong>
                    <a onClick={signOut}>Sair</a>
                </div>

                <a onClick={handleProfileNavigate}>
                    <img
                        src="https://github.com/murilodamarioo.png" 
                        alt="Foto de perfil" 
                    />
                </a>
            </Profile>
        </Container>
    )
}