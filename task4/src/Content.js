import react from 'react';
import Faker from 'faker';
function Content(props) {
    console.log(props)
    return (
       <div className='ui cards'>
            <div className="card">
                <div className="content">
                    <img className="right floated mini ui image" src={Faker.image.image()} />
                    <div className="header">
                        {props.name}
                    </div>
                    <div className="meta">
                        {props.comment}
                    </div>
                    <div className="description">
                        {props.desc}
                    </div>
                </div>
            </div>
            </div>
        
    )
}
export default Content;