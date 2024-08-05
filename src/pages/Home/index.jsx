import { Container, Content } from './styles'

import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Note } from '../../components/Note'

import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Home() {
    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [movieNotes, setMovieNotes] = useState([])

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchMovieNotes() {
            const response = await api.get(`/movienotes?title=${search}`)
            setMovieNotes(response.data)
        }
        fetchMovieNotes()
    }, [search])

    return (
        <Container>
            <Header setSearch={setSearch} />

            <main>
                <Content>
                    <header>
                        <h1>Meus filmes</h1>

                        <Button icon={FiPlus} title="Adicionar filme" to="/create"/>
                    </header>

                    {
                        movieNotes.map(movieNote => (
                            <Note 
                                key={String(movieNote.id)}
                                data={movieNote}
                                onClick={() => handleDetails(movieNote.id)}
                            />
                        ))
                    }
                </Content>
            </main>
        </Container>
    )
}