import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
function Comment() {
    return (
        <div className="ui comments">
            <div className="comment">
                <a className="avatar">
                    <img src={faker.image.image()} />
                </a>
                <div className="content">
                    <a className="author">Elliot Fu</a>
                </div>
            </div>
        </div>
    );
}
ReactDOM.render(
    <>
       <Comment />
       <Comment />
       <comment />
       <comment />
    </>,

    document.getElementById('root')
)