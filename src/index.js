import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/helloworld.js'



const App = ()=>{
    return(
        <div>
            <Hello />
        </div>
    );
};


//Take the component generated HTM and put it om the page
ReactDOM.render(<App/>, document.getElementById('container'));
