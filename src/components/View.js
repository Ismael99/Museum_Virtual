import React, {Fragment} from 'react'
import {Pannellum} from 'pannellum-react'

const View = (props) => {
    const {image, category, description} = props;
    return(
        <Fragment>

           <h2>{category}</h2>

            <Pannellum
            width="1280px"
            height="720px"
            image={image}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            showZoomCtrl={false}
        />         
        
        <p> {description} </p>

        </Fragment>
    )
}

export default View
