// src/components/Card.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Card.css'; 

function Card(props) {
    const navigate = useNavigate(); // Get the navigate function

    const handleClick = () => {
        const path = `/category/${props.header.toLowerCase().replace(/\s+/g, '-')}`;
        
        // Pass name1, name2, name3 as state
        navigate(path, { 
            state: { 
                name1: props.name1, 
                name2: props.name2, 
                name3: props.name3 
            } 
        }); 
    };

    return (
        <button className="card" onClick={handleClick}> 
            <h2>{props.header}</h2>
            <ul>
                <li>{props.name1}</li><br></br>
                <li>{props.name2}</li><br></br>
                <li>{props.name3}</li>
            </ul>
        </button>
    );
}

export default Card;