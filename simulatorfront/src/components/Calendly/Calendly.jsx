import { InlineWidget } from 'react-calendly';
import React from 'react'; 
import './Calendly.css';

const Calendly = () => {
    return (
        <div>
            <h3> Achetez, Louez et Rentabilisez !</h3>
            <h3>Prenez rendez vous en quelques clics</h3>
            <p> Un conseillé spécialisé pour avoir une réponse à toutes vos questions </p>
            <InlineWidget url="https://calendly.com/bernadelucille/30min" />
        </div>
    );
};

export default Calendly;