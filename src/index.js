import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './config/test/reportWebVitals'; // 퍼포먼스 측정


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

if(process.env.NODE_ENV === 'development') {

  reportWebVitals(console.dir);
}
