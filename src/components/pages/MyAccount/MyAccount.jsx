import React from "react";
import {useSelector, useDispatch} from "react-redux";
import Header from "../../../common/Header/Header";
import Profile from "./Profile/Profile";
import CardList from "./CardList/CardList";

import * as api from '../../../utils/api';
import Preloader from "../../../common/Preloader/Preloader";
import {
    addCurrentDataUser
} from "../../../features/currentUser/currentUserSlice";


const MyAccount = ({myUserId, isActivePreloader, setIsActivePreloader}) => {

    const userId = useSelector((state) => state.loggedInUser.value)

    const dispatch = useDispatch();

    const handleGetDataUser = async (userId) => {
        setIsActivePreloader(true);
        const userProfile = await api.getUserProfile(userId);
        dispatch(addCurrentDataUser(userProfile));
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
                        <Header myUserId={myUserId}/>
                        <Profile/>
                        <CardList/>
                    </>
            }
        </>
    )
}

export default MyAccount