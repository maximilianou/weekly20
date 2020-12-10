import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import carrotImg from './img/BySmalllikeTheNounProject.svg';

ReactDOM.render(
  <React.StrictMode>
    <App  message='Planting Carrot!' img={carrotImg} alt='Carrot Text'/>
  </React.StrictMode>,
  document.querySelector('#root')
);

