import React, {Fragment} from 'react'
import Card from './Card/Card'
const Home = () =>{
    return(
        <Fragment>
            <div className="row px-5 mt-4">
                <div className="col-lg-4 col-md-6 mt-3 ">
                    <Card
                    image="http://lorempixel.com/400/200"  
                    autor='Autor Name'
                    description='Description example'
                    url='museum/autor'
                    /> 
                </div>
                <div className="col-lg-4 col-md-6 mt-3 mx-auto">
                    <Card
                    image="http://lorempixel.com/400/200"  
                    autor='Autor Name'
                    description='Description example'
                    url='museum/autor'
                    /> 
                </div>
                <div className="col-lg-4 col-md-6 mt-3 mx-auto">
                    <Card
                    image="http://lorempixel.com/400/200"  
                    autor='Autor Name'
                    description='Description example'
                    url='museum/autor'
                    /> 
                </div>
                <div className="col-lg-4 col-md-6 mt-3 mx-auto">
                    <Card
                    image="http://lorempixel.com/400/200"  
                    autor='Autor Name'
                    description='Description example'
                    url='museum/autor'
                    /> 
                </div>
                <div className="col-lg-4 col-md-6 mt-3 mx-auto">
                    <Card
                    image="http://lorempixel.com/400/200"  
                    autor='Autor Name'
                    description='Description example'
                    url='museum/autor'
                    /> 
                </div>
            </div>

        </Fragment>
    )
}

export default Home
