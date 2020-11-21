import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Card.css'
const Cards= (props) =>{
    const {image, description, url, autor} = props
    return(

            <Card className='Card animated fadeIn' 
            style={{ 
                width: '95%', 
                height: '30rem',
            }}>
                <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>{autor}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Link to={url} variant="primary">Obras</Link>
          </Card.Body>
        </Card>
    )
}

export default Cards
