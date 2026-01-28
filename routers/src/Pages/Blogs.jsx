import { useEffect, useState } from "react";
import "./blogs.css";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 10)));
  }, []);

  return (
    <div className="blogs-container">
      <h3 className="blogs-title">Blogs</h3>

      <div className="blogs-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h4 className="blog-title">{blog.title}</h4>
            <p className="blog-body">{blog.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
