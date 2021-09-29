import './CardItem.css'

const CardItem = ({card, onOpenCard}) => {


    const handleOpenImage = () => {
        onOpenCard('publications')
    }

    return (
        <li className='photo-cards__item-list'>
            <img
                className='photo-cards__item-image'
                src={card.link}
                alt="изображение"
                onClick={handleOpenImage}/>
        </li>
    );
}

export default CardItem