import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';
import Content from './Content.js';
const App = () => {
    return (
        <>
            <Button >
            <Content name=" Jenny Hess" comment="New Member" desc="  Jenny wants to add you to the group best friends" />
            </Button>
        </>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)