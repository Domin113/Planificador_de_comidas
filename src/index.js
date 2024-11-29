import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Asegúrate de que el renderizado esté bien configurado
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Aquí se renderiza tu App */}
  </React.StrictMode>
);

reportWebVitals();
