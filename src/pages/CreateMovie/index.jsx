import { Container, Form, Textarea, BookMarks } from './styles'

import { Link } from 'react-router-dom'

import { useState } from 'react'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'
import { BackButton } from '../../components/BackButton'

import { FiArrowLeft } from 'react-icons/fi'

export function CreateMovie() {
    const [bookMarks, setBookMarks] = useState([])
    const [newBookMark, setNewBookMark] = useState('')

    function handleAddBookMark() {
        setBookMarks(prevState => [...prevState, newBookMark])
        setNewBookMark('')
    }

    function handleRemoveBookMark(deleted) {
        setBookMarks(prevState => prevState.filter(bookMark => bookMark !== deleted))
    }
    
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <BackButton to="/" icon={FiArrowLeft} title="Voltar"/>
                        <h1>Novo Filme</h1>
                    </header>

                    <div className='input-group'>
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>

                    <Textarea placeholder="Observações" />

                    
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
                                isNew 
                                placeholder="Novo marcador" 
                                value={newBookMark}
                                onChange={event => setNewBookMark(event.target.value)}
                                onClick={handleAddBookMark}
                            />
                        </div>
                    </BookMarks>

                    <div className="buttons-group">
                        <Button title="Excluir filme"/>
                        <Button title="Salvar alterações"/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}
