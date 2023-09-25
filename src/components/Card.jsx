import './Card.css';
import React from "react";


const Card = ({id, image, name, description, link}) => {
    return (
        <div key= {id} className="card">
            <img src={image} alt="" />
            <div className="cardContent">
                <h3 className="name">{name}</h3>
                <p className="description">{description}</p>
                <a href={link} className="link">More Info Here</a>
            </div>
        </div>
    )
}

export default Card;