import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import './styles/banner.css';
import './styles/colorwash.css';
import './styles/navbar.css';
import './styles/bio.css';
import './styles/mScreen894.css'
// import './styles/mScreen750.css'
import './styles/mScreen650.css'
// import './js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// npm start
// npm run deploy
// serve -s build
// gh-pages -b master -d build

  // "build": "react-scripts build && rm -rf docs && mv build docs",