import React from 'react';
import ReactDOM from 'react-dom';
import './common/style/main.css';
import './common/style/app.css';

import dog from './common/img/dogs.jpg';
import kb3 from './common/img/3kb.jpg';
const giphy = require('./common/img/giphy.gif');

ReactDOM.render(
    <div>
    React ussssssde <br />
      <img  src = {dog} /><br />
      <img  src = {kb3} /><br />
      <img  src = {giphy} /><br />
      <img  src = {require('./common/img/sc.png')} /><br />
    </div>,
    document.getElementById('root')
);
