import './CardItem.css'

const CardItem = ({card}) => {
    return (
        <li className='photo-cards__item-list'>
            <img
                className='photo-cards__item-image'
                src={card.link}
                alt="изображение"/>
        </li>
    );
}

export default CardItem