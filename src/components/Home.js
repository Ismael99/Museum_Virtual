import React, {Fragment} from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Home = () =>{
    return(
        <Fragment>
            <div className="row px-5 mt-4">
                <div className="col-lg-4 col-md-6 mt-3 ">
                    <Card 
                    style={{ 
                        width: '90%', 
                        height: '40rem',
                        border: '1px groove black'
                    }}>
                        <Card.Img variant="top" src="http://lorempixel.com/400/200" />
                    <Card.Body>
                    <Card.Title>Autor Name</Card.Title>
                    <Card.Text>
                      Autor Description
                    </Card.Text>
                    <Link variant="primary">Obras </Link>
                  </Card.Body>
                </Card>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 mx-auto">
                    <Card 
                    style={{ 
                        width: '90%', 
                        height: '40rem',
                        border: '1px groove black'
                    }}>
                        <Card.Img variant="top" src="http://lorempixel.com/400/200" />
                    <Card.Body>
                    <Card.Title>Autor Name</Card.Title>
                    <Card.Text>
                      Autor Description
                    </Card.Text>
                    <Link variant="primary">Obras </Link>
                  </Card.Body>
                </Card>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 mx-auto">
                    <Card 
                    style={{ 
                        width: '90%', 
                        height: '40rem',
                        border: '1px groove black'
                    }}>
                        <Card.Img variant="top" src="http://lorempixel.com/400/200" />
                    <Card.Body>
                    <Card.Title>Autor Name</Card.Title>
                    <Card.Text>
                      Autor Description
                    </Card.Text>
                    <Link variant="primary">Obras </Link>
                  </Card.Body>
                </Card>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 mx-auto">
                    <Card 
                    style={{ 
                        width: '90%', 
                        height: '40rem',
                        border: '1px groove black'
                    }}>
                        <Card.Img variant="top" src="http://lorempixel.com/400/200" />
                    <Card.Body>
                    <Card.Title>Autor Name</Card.Title>
                    <Card.Text>
                      Autor Description
                    </Card.Text>
                    <Link variant="primary">Obras </Link>
                  </Card.Body>
                </Card>
                </div>
                <div className="col-lg-4 col-md-6 mt-3 mx-auto">
                    <Card 
                    style={{ 
                        width: '90%', 
                        height: '40rem',
                        border: '1px groove black'
                    }}>
                    <Card.Img variant="top" src="http://lorempixel.com/400/200" />
                    <Card.Body>
                    <Card.Title>Autor Name</Card.Title>
                    <Card.Text>
                      Autor Description
                    </Card.Text>
                    <Link variant="primary">Obras </Link>
                  </Card.Body>
                </Card>
                </div>
            </div>

        </Fragment>
    )
}

export default Home
