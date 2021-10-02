import React from "react";
import {useSelector} from "react-redux";
import * as api from '../../../utils/api';

import './Subscribers.css'
import SubscribersItem from "./SubscribersItem/SubscribersItem";
import Header from "../../../common/Header/Header";


const Subscribers = () => {

    const myUserId = useSelector((state) => state.loggedInUser.value);

    const [otherUsersId, setOtherUsersId] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    const handleGetAllUsers = async () => {
        const allUsers = await api.getAllUsers();
        setUsers(allUsers);
        setOtherUsersId(Object.keys(allUsers).filter(item => item !== myUserId));
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
