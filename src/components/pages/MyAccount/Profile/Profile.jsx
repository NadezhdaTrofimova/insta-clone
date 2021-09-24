import "./Profile.css"

const Profile = ({userProfile}) => {
    return (
        <section className='profile'>
            <div className='profile__wrapper'>
                <div className='profile__wrapper-image'>
                    <img className='profile__avatar' alt="аватар пользователя"
                         src={userProfile.avatar}/>
                </div>
                <div className='profile__public-info'>
                    <ul className='profile__unordered-list'>
                        <li className="profile__item-list">
                            <h2 className="profile__item-number">16</h2>
                            <p className='profile__item-subtitle'>Публикации</p>
                        </li>
                        <li className="profile__item-list">
                            <h2 className="profile__item-number">107</h2>
                            <p className='profile__item-subtitle'>Подписчики</p>
                        </li>
                        <li className="profile__item-list">
                            <h2 className="profile__item-number">205</h2>
                            <p className='profile__item-subtitle'>Подписки</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='profile__info'>
                <h1 className="profile__name">{userProfile.name}</h1>
                <p className="profile__signature">Москва</p>
            </div>
            <button className='profile__button-edit'>Редактировать</button>
        </section>
    );
}

export default Profile