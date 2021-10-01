import React from "react";
import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Header from "../../../common/Header/Header";
import Profile from "./Profile/Profile";
import CardList from "./CardList/CardList";

import * as api from '../../../utils/api';
import Preloader from "../../../common/Preloader/Preloader";
import {
    addCard,
    addDataUser
} from "../../../features/currentUser/currentUserSlice";


const MyAccount = ({userId, isActivePreloader, setIsActivePreloader}) => {

    const myUserId = useSelector((state) => state.loggedInUser.value)
    const currentUser = useSelector((state) => state.currentUser.value)
    const [cards, setCards] = React.useState([]);
    const [userProfile, setUserProfile] = React.useState([]);
    const history = useHistory();
    // const myUserId = history.location.pathname;

    const dispatch = useDispatch();

    const handleGetAllCards = async (userId) => {
        setIsActivePreloader(true);
        const allCards = await api.getAllCards(userId);
        setCards(allCards);
        dispatch(addCard(allCards))
        setIsActivePreloader(false);
    }

    const handleGetDataUser = async (userId) => {
        setIsActivePreloader(true);
        const userProfile = await api.getUserProfile(userId);
        setUserProfile(userProfile);
        setIsActivePreloader(false);
    }


    React.useEffect(() => {
        handleGetAllCards(myUserId);
        handleGetDataUser(myUserId)
    }, [myUserId]);

    return (
        <>
            {
                isActivePreloader ?
                    <Preloader/> :
                    <>
                        <Header
                            userId={userId}
                            myUserId={myUserId}
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