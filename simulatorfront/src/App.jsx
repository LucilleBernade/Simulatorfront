import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Blog from "./components/Blog/Blog";
import ArticlePage from "./components/Article/ArticlePage";
import "./App.css";


const App = () => {
  return <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<ArticlePage />} />
      </Routes>
      </div>;
};

export default App;
