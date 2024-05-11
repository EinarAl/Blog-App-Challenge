import './BlogForm.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
  const navigate = useNavigate();

  const viewBlogs = () => {
    navigate('../')
  }
  
  const handleAddBlogClick = () => {
    navigate('./PostBlog'); 
  };

  const [blog, setBlog] = useState({ title: '', author: '', content: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/blogs', blog);
    setBlog({ title: '', author: '', content: '' });
    navigate('../');
  };

  return (
    <>
    <div id='headBanner'>
        <header>Blog Application
            <button className='headerButtons' id='addBlogButton' onClick={handleAddBlogClick}>Add Blog</button>
            <button className='headerButtons' id='viewBlogButton' onClick={viewBlogs}>View blogs</button>
        </header>
    </div>
    <div id='blogForm'>
        <form onSubmit={handleSubmit}>
            <div className='blogHeading'>Blog Title</div>
            <input className='blogSet' type="text" value={blog.title} onChange={(e) => setBlog({ ...blog, title: e.target.value })} required/><br></br>
            <div id='followingHeadings' className='blogHeading'>Author Name</div>
            <input className='blogSet' type="text" value={blog.author} onChange={(e) => setBlog({ ...blog, author: e.target.value })} required/><br></br>
            <div id='followingHeadings' className='blogHeading'>Blog Content</div>
            <textarea className='contentSet' value={blog.content} onChange={(e) => setBlog({ ...blog, content: e.target.value })} required></textarea><br></br>
            <button className='postBlogButton' type="submit">Post Your Blog</button>
        </form>
    </div>
    </>
  );
};

export default BlogForm;