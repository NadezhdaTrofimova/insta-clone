import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

import Header from "../../../common/Header/Header";
import Profile from "./Profile/Profile";
import CardList from "./CardList/CardList";

import * as api from '../../../utils/api';
import Preloader from "../../../common/Preloader/Preloader";
import {
    addCurrentDataUser,
    addCurrentUserId,
} from "../../../features/currentUser/currentUserSlice";


const MyAccount = ({ isActivePreloader, setIsActivePreloader}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const userId = history.location.pathname;

    const handleGetDataUser = async (userId) => {
        setIsActivePreloader(true);
        const userProfile = await api.getUserProfile(userId);
        dispatch(addCurrentDataUser(userProfile));
        dispatch(addCurrentUserId(userId));
        setIsActivePreloader(false);
    }

    React.useEffect(() => {
        if (userId !== '') {
            handleGetDataUser(userId)
        }
    }, [userId]);

    return (
        <>
            {
                isActivePreloader ?
                    <Preloader/> :
                    <>
                        <Header/>
                        <Profile/>
                        <CardList/>
                    </>
            }
        </>
    )
}

export default MyAccount