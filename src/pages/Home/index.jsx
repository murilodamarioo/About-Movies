import { Container, Content } from './styles'

import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Note } from '../../components/Note'



export function Home() {

    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <header>
                        <h1>Meus filmes</h1>

                        <Button icon={FiPlus} title="Adicionar filme" to="/create"/>
                    </header>

                    <Note to="/movie/1" data={{
                        title: "Interestellar",
                        tags: [
                            { id: 1, name: "Drama" },
                            { id: 2, name: "Ficção Científica" },
                            { id: 3, name: "Família" }
                        ]
                    }}
                    />

                    <Note to="/movie/2" data={{
                        title: "Interestellar",
                        tags: [
                            { id: 1, name: "Drama" },
                            { id: 2, name: "Ficção Científica" },
                            { id: 3, name: "Família" }
                        ]
                    }}
                    />

                    <Note to="/movie/3" data={{
                        title: "Interestellar",
                        tags: [
                            { id: 1, name: "Drama" },
                            { id: 2, name: "Ficção Científica" },
                            { id: 3, name: "Família" }
                        ]
                    }}
                    />
                </Content>
            </main>
        </Container>
    )
}