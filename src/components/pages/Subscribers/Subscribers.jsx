import React from "react";
import * as api from '../../../utils/api';
import './Subscribers.css'
import SubscribersItem from "./SubscribersItem/SubscribersItem";
import Header from "../../../common/Header/Header";

const Subscribers = () => {

    const userId = localStorage.getItem('userId');

    const [otherUsersId, setOtherUsersId] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    const handleGetAllUsers = async () => {
        const allOtherUsers = await api.getAllUsers();
        setUsers(allOtherUsers);
        setOtherUsersId(Object.keys(allOtherUsers).filter(item => item !== userId));
    }

    React.useEffect(() => {
        handleGetAllUsers();
    }, [])

    return (
        <>
            <Header/>
            <section className='subscribers'>
                <ul className="subscribers__unordered-list">
                    {
                        otherUsersId.map((id, index) =>
                            <SubscribersItem
                                id={id}
                                key={index}
                                userData={users[id]}
                            />
                        )
                    }
                </ul>
            </section>
        </>
    )
}

export default Subscribers
