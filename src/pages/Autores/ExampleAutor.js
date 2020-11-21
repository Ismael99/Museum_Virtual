import React, {Fragment} from 'react'
import View from '../../components/View'
import ExampleImageAutor from '../../images/museum.jpg'

const ExampleAutor = () =>{
    return(
        <Fragment>
            <View
            image={ExampleImageAutor}
            autor='Autor Name'
            description="Dolor perferendis tenetur exercitationem nam quis Amet rerum ratione distinctio laboriosam aut officia reprehenderit. Ipsum vel doloremque consequuntur explicabo voluptatibus Ipsa reiciendis neque placeat facere explicabo Dolor nisi provident omnis laborum omnis. Nesciunt culpa consequatur nulla iusto ex vero Error similique fugit architecto qui aperiam tempora? Quidem illo molestiae consectetur impedit dicta Voluptate quibusdam voluptate totam nihil unde provident? Natus."
            />
        </Fragment>
    )
}

export default ExampleAutor
