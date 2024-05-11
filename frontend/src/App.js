import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogList from './components/BlogList';

const App = () => {
  const navigate = useNavigate();

  const handleAddBlogClick = () => {
    navigate('./PostBlog'); 
  };

  return (
    <>
    <body>
      <div id='headBanner'>
        <header>Blog Application
          <button className='headerButtons' id='addBlogButton' onClick={handleAddBlogClick}>Add Blog</button>
          <button className='headerButtons' id='viewBlogButton'>View blogs</button>
        </header>
      </div>
      <div>
        <BlogList />
      </div>
    </body></>
  );
};

export default App;