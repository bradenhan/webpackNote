import React from 'react?sss';
import ReactDOM from 'react-dom';
// import './common/style/main.css';
// import './common/style/app.css';

 // import app from './common/style/app.css';
// import style from './common/style/main.css';
import 'font-awesome/css/font-awesome.css'

import style from './main.css'
import './common/style/main.less'
import  main from './common/style/main.scss';

ReactDOM.render(
    <div>
    React ussssssde <br />
    <span className="a bt">收拾收拾
    </span>< br/>
    <em className={style.ox}>sss</em> < br/>
    <span className="fa fa-rocket">sss</span>
    <img src={require ('./common/img/dogs.jpg')} />
    </div>,
    document.getElementById('root')
);
