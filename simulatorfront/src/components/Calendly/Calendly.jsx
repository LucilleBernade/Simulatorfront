import { InlineWidget } from 'react-calendly';
import React from 'react'; 
import './Calendly.css';

const Calendly = () => {
    return (
        <div>
            <InlineWidget url="https://calendly.com/bernadelucille/30min" />
        </div>
    );
};

export default Calendly;