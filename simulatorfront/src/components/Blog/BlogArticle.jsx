import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import image1 from '../../assets/image1.jpeg';
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
            {articles.map((blog) => (
              <Link to={`/blog/${blog.id}`}>
                <div className="contenu">
                      <img className="image" src={image1} alt="artcile"
                        /*src={`http://localhost:8000/api/${blog.image}`}
                        alt={blog.name}*/
                      />
                    <div className="texte">
                    <h3>{blog.name}</h3>
                    </div>
                </div>
              </Link>
            ))}
        </div>
      </main>
    );
  };

export default BlogArticle;