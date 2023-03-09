import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import axios from 'axios';

// setting up the base url and also import axios
axios.defaults.baseURL = 'http://localhost:3000';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

