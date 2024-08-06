import { Container, Genres } from './styles'

import { IoStarSharp } from "react-icons/io5";
import { TfiStar } from 'react-icons/tfi'

import { Tag } from '../Tag'

export function Note({ data, ...rest}) {
    
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
    
    return (
        <Container {...rest}>
            <h2>{data.title}</h2>
            
            {renderStars(data.rating)}

            <p>
                {data.description}
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