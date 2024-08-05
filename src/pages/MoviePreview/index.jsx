import { Container } from './styles'

import { RatingMovie, CreatedBy, Genres, Description, Content } from './styles'

import { IoStarSharp } from "react-icons/io5";
import { FiArrowLeft } from 'react-icons/fi'
import { TfiStar } from 'react-icons/tfi'
import { FiClock } from 'react-icons/fi'

import { BackButton } from '../../components/BackButton'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



export function MoviePreview() {
    const [data, setData] = useState(null)

    const { user } = useAuth()

    const params = useParams()
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movienotes/${params.id}`)
            console.log(response.data)
            setData(response.data)
        }

        fetchMovie()
    }, [])

    return (
        <Container>
            <Header />
            {
                data &&
                <main>
                <Content>
                    <BackButton onClick={handleBack} icon={FiArrowLeft} title="Voltar"/>

                    <RatingMovie>
                        <h1>{data.title}</h1>

                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <TfiStar />
                    </RatingMovie>

                    <CreatedBy>
                        <img 
                            src="https://github.com/murilodamarioo.png" 
                            alt="Imagem do criador do post" 
                        />
                        <p>Por {user.name}</p>

                        <FiClock />
                        <p>{data.created_at}</p>
                    </CreatedBy>

                    <Genres>
                        <Tag title="Ficção científica" />
                        <Tag title="Drama" />
                        <Tag title="Família" />
                    </Genres>

                    <Description>
                        <p>{data.description}</p>
                    </Description>
                </Content>
                </main>
            }
        </Container>
    )
}