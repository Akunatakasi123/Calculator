import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="title-container">
      <h1 className="title">Starboy Calculator</h1>
      <App />
    </div>
  </React.StrictMode>
);