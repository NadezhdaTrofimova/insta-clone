import './CardItem.css'

const CardItem = ({card, onOpenCard}) => {
    return (
        <li className='photo-cards__item-list'>
            <img
                className='photo-cards__item-image'
                src={card.link}
                alt="изображение"
                onClick={onOpenCard}/>
        </li>
    );
}

export default CardItem