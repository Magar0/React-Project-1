import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>

    <HashRouter>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
    </HashRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


