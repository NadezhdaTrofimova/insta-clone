import './SubscribersItem.css'

const SubscribersItem = ({ id, userData }) => {
    return (
        <li className='subscribers__item-list'>
            <div className="subscribers__user-wrapper">
                <img
                    src={userData.avatar}
                    className="subscribers__user-avatar"/>
            </div>
            <p className="subscribers__user-name">{userData.name}</p>
        </li>
    );
}

export default SubscribersItem