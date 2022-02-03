import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import image1 from '../../assets/image1.jpeg';
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
       <div className="articlepage">
      <div>
          <div className="titre">
            <div className="article">
                {article.id}
            </div>
            <div className="name">
                {article.name}
            </div>
          </div>
          <div className="imagediv">
            <img className="image" src={image1} alt="blog"
            /*src={`http://localhost:8000/api/${blog.image}`}
            alt={blog.name}*/
            />
          </div>
        
          <div className="text">
              {article.text}
          </div>
          <div className="date">
              {article.date}
          </div>
      </div >
      <Link to="/blog" className="boutton" >Retour au blog</Link>
    </div>
    );
};

export default Article;