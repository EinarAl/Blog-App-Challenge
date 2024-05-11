import './BlogList.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await axios.get('/api/blogs');
      setBlogs(result.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map(blog => (
        <div className='blogsPosted' key={blog._id}>
          <h3 id='blogTitle'>{blog.title}</h3>
          <p id='authorStyle'>{blog.author}</p>
          <p id='contentStyle'>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;