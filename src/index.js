import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OpenSub from 'opensubtitles-universal-api';
import Hello from './components/helloworld.js'

const OpenSubtitles = new OpenSub('tuliocoelho');

const episodeQuery = {
  imdbid: 'tt0411008', // lost-2004 abc
  season: 1,
  episode: 1
};

OpenSubtitles.search(episodeQuery).then(result => {
  console.log(result.en[0]);
});


const App = ()=>{
    return(
        <div>
            <Hello />
        </div>
    );
};


//Take the component generated HTM and put it om the page
ReactDOM.render(<App/>, document.getElementById('container'));
