import { Container, Genres } from './styles'

import { IoStarSharp } from "react-icons/io5";
import { TfiStar } from 'react-icons/tfi'

import { Tag } from '../Tag'

export function Note({ data, ...rest}) {
    return (
        <Container {...rest}>
            <h2>{data.title}</h2>
            
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

            {
                data.tags && 
                <Genres>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                    }
                </Genres>
            }
        </Container>
    )
}