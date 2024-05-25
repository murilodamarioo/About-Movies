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

                        <Button icon={FiPlus} title="Adicionar filme"/>
                    </header>

                    <Note data={{
                        title: "Interestellar",
                        tags: [
                            { id: 1, name: "Drama" },
                            { id: 2, name: "Ficção Científica" },
                            { id: 3, name: "Família" }
                        ]
                    }}
                    />

                    <Note data={{
                        title: "Interestellar",
                        tags: [
                            { id: 1, name: "Drama" },
                            { id: 2, name: "Ficção Científica" },
                            { id: 3, name: "Família" }
                        ]
                    }}
                    />

                    <Note data={{
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