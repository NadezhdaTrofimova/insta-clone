import {useSelector} from "react-redux";
import './PublicationsItem.css'


const PublicationsItem = ({ card, userProfile }) => {

    const currentUser = useSelector((state) => state.currentUser.value);

    return (
        <li className='publications__item-list'>

            <div className="publications__wrapper-top">

                <div className="publications__wrapper-image">
                    <img className="publications__avatar-image"
                         src={currentUser.avatar}
                         alt="Изображение аватара"/>
                </div>

                <div className="publications__wrapper-text">
                    <p className="publications__id-profile">{currentUser._id}</p>
                    <a className="publications__link-location" href="#1">Москва</a>
                </div>

                <button className="publications__button publications__button-action-menu"/>

            </div>

            <img className="publications__item-image"
                 src={card.link}
                 alt="Изображение"/>

            <div className="publications__wrapper-bottom">
                <div className="publications__wrapper-button">
                    <div className="publications__wrapper-left-button">
                        <button className="publications__button publications__button-like"/>
                        <button className="publications__button publications__button-comment"/>
                        <button className="publications__button publications__button-send"/>
                    </div>
                    <button className="publications__button publications__button-notes"/>
                </div>
                
                <p className="publications__likes">Нравится <span className="publications__likes-number">{card.likes}</span></p>
            </div>
        </li>
    );
}

export default PublicationsItem