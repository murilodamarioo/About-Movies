import { Container, Form, Textarea, BookMarks } from './styles'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'
import { BackButton } from '../../components/BackButton'

import { FiArrowLeft } from 'react-icons/fi'

export function CreateMovie() {
    const navigate = useNavigate()
    
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')
    const [bookMarks, setBookMarks] = useState([])
    const [newBookMark, setNewBookMark] = useState('')

    function handleBack() {
        navigate(-1)
    }

    function handleAddBookMark() {
        setBookMarks(prevState => [...prevState, newBookMark])
        setNewBookMark('')
    }

    function handleRemoveBookMark(deleted) {
        setBookMarks(prevState => prevState.filter(bookMark => bookMark !== deleted))
    }

    async function handleNewMovieNote() {
        if (!title) {
            return alert('Digite o título do filme!')
        }

        if (!rating) {
            return alert('Faltar informar a avalição!')
        }

        if (!description) {
            return alert('Faltou preencher as observações do filme!')
        }
        
        if (newBookMark) {
            return alert('A tag ainda não foi adicionada')
        }
        
        await api.post('/movienotes', {
            title,
            description,
            rating,
            tags: bookMarks
        })
        navigate(-1)
    }
    
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <BackButton onClick={handleBack} icon={FiArrowLeft} title="Voltar"/>
                        <h1>Novo Filme</h1>
                    </header>

                    <div className='input-group'>
                        <Input 
                            placeholder="Título"
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            value={rating}
                            onChange={event => setRating(event.target.value)}
                        />
                    </div>

                    <Textarea 
                        placeholder="Observações" 
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />

                    
                    <BookMarks>
                        <h3>Marcadores</h3>
                        <div className="tags">
                            {
                                bookMarks.map((bookMark, index) => (
                                    <NoteItem 
                                        key={String(index)}
                                        value={bookMark}
                                        onClick={() => handleRemoveBookMark(bookMark)}
                                    />
                                ))
                            }
                            <NoteItem 
                                isNew={true} 
                                placeholder="Novo marcador" 
                                value={newBookMark}
                                onChange={event => setNewBookMark(event.target.value)}
                                onClick={handleAddBookMark}
                            />
                        </div>
                    </BookMarks>

                    <div className="buttons-group">
                        <Button 
                            title="Limpar"
                        />
                        <Button 
                            title="Salvar alterações"
                            onClick={handleNewMovieNote}
                        />
                    </div>
                </Form>
            </main>
        </Container>
    )
}
