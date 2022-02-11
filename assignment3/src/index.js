import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox.js';
const App=()=>{
return(
    <>
    <CommentBox />
    </>
)
}
ReactDOM.render(
    <>
      <App />
    </>,
    document.getElementById('root')
)