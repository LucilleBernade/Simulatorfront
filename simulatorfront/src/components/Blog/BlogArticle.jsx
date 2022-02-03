import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BlogArticles.css'

const BlogArticle = () => {
    const [articles, setArticles] = useState([]);

const fetchAllArticles = () => {
    axios
      .get(`http://localhost:8000/api/articles`)
      .then((response) => setArticles(response.data));
  };
    //const fetchAllArticles = async () => {
    //  const { data } = await fetch.get(`http://localhost:8000/api/articles`);
    //  setArticles(data);
    //};
  
    useEffect(fetchAllArticles, []);
  
    return (
      <main className="blog">
        <div className="containerblog">
          <ul>
            {articles.map((blog) => (
              <Link to={`/blog/${blog.id}`}>
                <li className="containerBlogArticles">
                  <div className="backgroundGreen">
                    <div>
                      <img
                        width="200"
                        src={`http://localhost:8000/api/${blog.image}`}
                        alt={blog.name}
                      />
                    </div>
                    <h3>{blog.name}</h3>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </main>
    );
  };

export default BlogArticle;