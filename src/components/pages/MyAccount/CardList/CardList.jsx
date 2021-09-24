import React from "react";
import {useHistory} from "react-router-dom";
import './CardList.css'
import CardItem from "./CardItem/CardItem";


const CardList = ({cards}) => {

    const history = useHistory();


    const handleOpenCard = (url) => {
        history.push('/publications')
    }

    return (
        <section className='photo-cards'>
            <ul className='photo-cards__unordered-list'>
                {cards.map((item) =>
                    <CardItem
                        key={item._id}
                        card={item}
                        onOpenCard={handleOpenCard}
                    />
                )}
            </ul>
        </section>
    )
}

export default CardList