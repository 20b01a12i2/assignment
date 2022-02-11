import React from 'react';
import Faker from 'faker';
import './styles.css';
function Comment(props) {
    return (
        <div className="ui cards">
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
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Decline</div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <img className="right floated mini ui image" src={Faker.image.image()} />
                    <div className="header">
                        Jenny Hess
                    </div>
                    <div className="meta">
                        New Member
                    </div>
                    <div className="description">
                        Jenny wants to add you to the group best friends
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Decline</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment;