import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import 'modern-normalize/modern-normalize.css';
import './styles.css';

// ReactDOM.render(<App />, document.getElementById('root'))

// ======== Рендер App через строгий режим - StrictMode
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

