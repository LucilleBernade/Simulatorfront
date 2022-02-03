import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './Article.css'

const Article = () => {
    const { id } = useParams();
  const [article, setArticle] = useState({});

  const fetchSelectedArticle = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/articles/${id}`,
    );
    setArticle(data);
  };

  useEffect(() => {
    fetchSelectedArticle();
  }, []);

    return (
       <div className="article">
      <div>
          <div>
              {article.id}
          </div>
          <div>
              {article.name}
          </div>
          <div>
              {article.text}
          </div>
          <div>
              {article.date}
          </div>
        <li>
          <img
            width="200"
            src={`http://localhost:8000/api/articles/${article.image}`}
            //src={`${process.env.REACT_APP_API_URL}/${article.image}`}
            alt={article.name}
          />
        </li>
      </div>
      <Link to="/blog">Retour au blog</Link>
    </div>
    );
};

export default Article;