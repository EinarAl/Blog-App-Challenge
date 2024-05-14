import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PostBlog from './PostBlog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/PostBlog' element={<PostBlog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
