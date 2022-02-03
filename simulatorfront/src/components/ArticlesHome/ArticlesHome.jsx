import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ArticlesHome.css';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    axios
      .get(`http://localhost:8000/api/articles?sortBy=date&orderBy=desc&limit=3`)
      .then((response) => setArticles(response.data));
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div id="articles">
      <section className="articles">
        <h2>Découvrer nos derniers articles</h2>
        <div className="containerArticles">
          <div className="containerArticle">
            {articles.map((last) => (
              <div>
                <div className="left">
                  <div className="containerPicture">
                    <img src={last.img} className="image" alt={last.name} />
                  </div>
                </div>
                <div className="right">
                  <h3>{last.name}</h3>
                  <p>{last.text}</p>
                  <Link to={`/blog/${last.id}`} className="buttonLink">
                    Voir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;