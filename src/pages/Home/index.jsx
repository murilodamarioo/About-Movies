import { Container, Content, Movie, Genres } from './styles'

import { IoStarSharp } from "react-icons/io5";
import { TfiStar } from 'react-icons/tfi'
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'



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

                    <Movie>
                        <h2>Interestellar</h2>
                        
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <TfiStar />

                        <p>
                        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro 
                        de data desconhecida. Cooper, ex-piloto da NASA, 
                        tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está 
                        assombrado por um fantasma que tenta se...
                        </p>

                        <Genres>
                            <Tag title="Drama"/>
                            <Tag title="Ficção Científica"/>
                            <Tag title="Família"/>
                        </Genres>
                    </Movie>

                    <Movie>
                        <h2>Interestellar</h2>
                        
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <TfiStar />

                        <p>
                        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro 
                        de data desconhecida. Cooper, ex-piloto da NASA, 
                        tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está 
                        assombrado por um fantasma que tenta se...
                        </p>

                        <Genres>
                            <Tag title="Drama"/>
                            <Tag title="Ficção Científica"/>
                            <Tag title="Família"/>
                        </Genres>
                    </Movie>

                    <Movie>
                        <h2>Interestellar</h2>
                        
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <TfiStar />

                        <p>
                        Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro 
                        de data desconhecida. Cooper, ex-piloto da NASA, 
                        tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está 
                        assombrado por um fantasma que tenta se...
                        </p>

                        <Genres>
                            <Tag title="Drama"/>
                            <Tag title="Ficção Científica"/>
                            <Tag title="Família"/>
                        </Genres>
                    </Movie>
                </Content>
            </main>
        </Container>
    )
}