import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import image1 from '../../assets/image1.jpeg';
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
        <h2 className="h2">Découvrer nos derniers articles</h2>
          <div className="containerArticle">
            {articles.map((last) => (
              <div>
                <div className="contenu">
                  <div className="containerPicture">
                    <img src={image1} className="image" alt={last.name} />
                    <div className="texte">
                      <h3>{last.name}</h3>
                      <p>{last.text}</p>
                    </div>
                  </div>
                  <div className="Voir">
                  <Link to={`/blog/${last.id}`} className="buttonLink">
                    Voir plus
                  </Link>
                </div>
                </div>
                
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Articles;