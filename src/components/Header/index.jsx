import { Container, Profile, Search } from './style'

import { FiSearch } from 'react-icons/fi'

import { Input } from '../Input'


export function Header() {
    
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
                    <a href="#">Sair</a>
                </div>

                <img 
                    src="https://github.com/murilodamarioo.png" 
                    alt="Foto de perfil" 
                />
            </Profile>
        </Container>
    )
}