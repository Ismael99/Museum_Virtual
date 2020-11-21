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
                <Card.Title className='Card-title' >{autor}</Card.Title>
                <Card.Text className='Card-description'>
                    {description}
                </Card.Text>
                <Link className='Card-link' to={url} variant="primary">Obras</Link>
            </Card.Body>
        </Card>
    )
}

export default Cards
