import React from 'react';
import ReactDOM from 'react-dom';
import './Styles.css';
import College from './College.js';

function Welcome() {
    return (
        <div className='mydiv'>
            hello

        </div>
    )

}
ReactDOM.render(
    <>
        <Welcome />
        <College />
    </>,

    document.getElementById('root')
)