import React from 'react'
import View from './components/View'
import img_prueba from './images/museum.jpg'

const App = () => {
    return(

        <div className='container mt-4'>
            <h1>Museo Virtual</h1>

            <View
                image={img_prueba}
                category="Autor Name"
                description= "Sit velit odio ratione accusantium necessitatibus. Dolorum corrupti commodi architecto eos esse unde. Dolorum et non voluptate animi deleniti possimus quam necessitatibus. Placeat consectetur sunt sequi vitae reprehenderit Libero odio nemo. Elit esse dolor culpa sunt deleniti nulla, saepe odit saepe vero repudiandae. Exercitationem a ex iste ullam quisquam Beatae deleniti doloribus iusto provident id. Perspiciatis velit laudantium incidunt temporibus voluptate. Voluptatibus non "
            />
        </div>
    )
}

export default App;
