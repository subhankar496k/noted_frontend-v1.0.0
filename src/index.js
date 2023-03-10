import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import axios from 'axios';
import "../src/index.css";

// setting up the base url and also import axios
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

