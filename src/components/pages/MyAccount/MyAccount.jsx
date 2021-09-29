import React from "react";
import Header from "../../../common/Header/Header";
import Profile from "./Profile/Profile";
import CardList from "./CardList/CardList";

import * as api from '../../../utils/api';

const MyAccount = ({userId}) => {

    const [cards, setCards] = React.useState([]);
    const [userProfile, setUserProfile] = React.useState([])

    const handleGetAllCards = async (userId) => {
        const allCards = await api.getAllCards(userId);
        setCards(allCards);
    }

    const handleGetUserProfile = async(userId) => {
        const userProfile = await api.getUserProfile(userId);
        setUserProfile(userProfile)
    }

    console.log(userProfile)

    React.useEffect(() => {
        if (userId !== '') {
            handleGetAllCards(userId);
            handleGetUserProfile(userId)
        }
    }, [userId]);

    return (
        <>
            <Header
                userProfile={userProfile}
            />
            <Profile
                userProfile={userProfile}
            />
            <CardList
                userProfile={userProfile}
                cards={cards}
            />
        </>
    )
}

export default MyAccount