import './SubscribersItem.css'

const SubscribersItem = () => {
    return (
        <li className='subscribers__item-list'>
            <div className="subscribers__user-wrapper">
                <img
                    src='https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1425&q=80'
                    alt="аватар пользователя"
                    className="subscribers__user-avatar"/>
            </div>
            <p className="subscribers__user-name">dgy77</p>
        </li>
    );
}

export default SubscribersItem