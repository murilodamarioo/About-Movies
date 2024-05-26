import { Container, Form, Textarea, BookMarks } from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'
import { BackButton } from '../../components/BackButton'

import { FiArrowLeft } from 'react-icons/fi'

export function CreateMovie() {
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
                            <NoteItem value="Drama" />
                            <NoteItem isNew placeholder="Novo marcador" />
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