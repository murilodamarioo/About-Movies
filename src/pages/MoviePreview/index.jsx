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

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'


export function MoviePreview() {
    const [data, setData] = useState(null)

    const { user } = useAuth()

    const avatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const params = useParams()
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    function renderStars(rating) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<IoStarSharp key={i} />);
            } else {
                stars.push(<TfiStar key={i} />);
            }
        }
        return stars;
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

                        {renderStars(data.rating)}
                    </RatingMovie>

                    <CreatedBy>
                        <img 
                            src={avatar} 
                            alt="Imagem do criador do post" 
                        />
                        <p>Por {user.name}</p>

                        <FiClock />
                        <p>{data.created_at}</p>
                    </CreatedBy>

                    <Genres>
                        {
                            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                        }
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