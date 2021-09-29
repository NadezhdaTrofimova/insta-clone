import './SubscribersItem.css'
import {useHistory} from "react-router-dom";

const SubscribersItem = ({ id, userData }) => {

    const history = useHistory();

    const handleTransitionAnotherProfile = () => {
        history.push(`/${id}`)
    }

    return (
        <li className='subscribers__item-list' onClick={handleTransitionAnotherProfile}>
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