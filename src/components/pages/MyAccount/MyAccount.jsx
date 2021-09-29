import React from "react";
import {useHistory} from "react-router-dom";
import Header from "../../../common/Header/Header";
import Profile from "./Profile/Profile";
import CardList from "./CardList/CardList";

import * as api from '../../../utils/api';
import Preloader from "../../../common/Preloader/Preloader";


const MyAccount = ({userId, isActivePreloader, setIsActivePreloader}) => {

    const [cards, setCards] = React.useState([]);
    const [userProfile, setUserProfile] = React.useState([]);
    const history = useHistory();
    const userId1 = history.location.pathname;

    const handleGetAllCards = async (userId) => {
        setIsActivePreloader(true);
        const allCards = await api.getAllCards(userId);
        setCards(allCards);
        setIsActivePreloader(false);
    }

    const handleGetDataUser = async (userId) => {
        setIsActivePreloader(true);
        const userProfile = await api.getUserProfile(userId);
        setUserProfile(userProfile);
        setIsActivePreloader(false);
    }


    React.useEffect(() => {
            handleGetAllCards(userId1);
            handleGetDataUser(userId1)
    }, [userId1]);

    return (
        <>
            {
                isActivePreloader ?
                    <Preloader/> :
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
            }
        </>
    )
}

export default MyAccount