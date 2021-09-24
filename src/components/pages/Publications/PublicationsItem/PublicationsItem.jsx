import './PublicationsItem.css'

const PublicationsItem = () => {
    return (
        <li className='publications__item-list'>

            <div className="publications__wrapper-top">

                <div className="publications__wrapper-image">
                    <img className="publications__avatar-image"
                         src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                         alt="Изображение аватара"/>
                </div>

                <div className="publications__wrapper-text">
                    <p className="publications__id-profile">id455</p>
                    <a className="publications__link-location" href="#1">Москва</a>
                </div>

                <button className="publications__button publications__button-action-menu"/>

            </div>

            <img className="publications__item-image"
                 src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
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
                
                <p className="publications__likes">Нравится <span className="publications__likes-number">5</span></p>
            </div>
        </li>
    );
}

export default PublicationsItem