import React, {Fragment} from 'react'
import {Pannellum} from 'pannellum-react'

const View = (props) => {
    const {image, autor, description} = props;
    return(
        <Fragment>


            <Pannellum
            width="100%"
            height="720px"
            image={image}
            pitch={10}
            yaw={180}
            hfov={200}
            autoLoad
            showZoomCtrl={false}
        />
            
            <h2 style={{
                fontFamily: "'Xanh Mono', monospace",
                textAlign: "center",
                marginTop: "3rem",

            }}>{autor}</h2>
            <div style={{
                padding: "1rem",
                textAlign:"justify",
                fontFamily: "'Merienda', cursive",
            }}>
                <p> {description} </p>
            </div>

        </Fragment>
    )
}

export default View
