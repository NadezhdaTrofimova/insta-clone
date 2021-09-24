import './CardList.css'
import CardItem from "./CardItem/CardItem";

const CardList = ({cards}) => {
    return (
        <section className='photo-cards'>
            <ul className='photo-cards__unordered-list'>
                {cards.map((item) =>
                    <CardItem
                        key={item._id}
                        card={item}
                    />
                )}
            </ul>
        </section>
    )
}

export default CardList