import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Comment from './Comment.js';
const App = () => {
    return (

        <Comment name=" Elliot Fu" comment="Friends of Veronika" desc=" Elliot requested permission to view your contact details" />

    )
}
ReactDOM.render(
    <>
        <App />
    </>,
    document.getElementById('root')

)