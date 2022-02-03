import React from 'react';
import ArticlesHome from "../ArticlesHome/ArticlesHome";
import Simulator from "../Simulator/Simulator";
import Calendly from "../Calendly/Calendly";
import Nav from "../Nav/Nav";

import './Home.css'

const Home = () => {
    return (
        <div>
            <Nav />
            <ArticlesHome/>
            <Simulator />
            <Calendly />
        </div>
    );
};

export default Home;