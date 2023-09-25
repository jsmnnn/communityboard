import './CardList.css';
import React from "react";
import Card from "./Card";

const CardList = ({clubs}) => {
    const cards = clubs.map((item) => (
        <Card
            key = {item.id}
            image = {item.image}
            name = {item.name}
            description = {item.description}
            link = {item.link}
        />
    ));
    return (
        <div className="cardList">
            {cards}
        </div>
    )
}

export default CardList;