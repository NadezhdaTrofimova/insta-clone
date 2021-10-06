import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {Route, Switch, useHistory} from "react-router-dom";

import './App.css';
import * as api from './utils/api'
import Publications from "./components/pages/Publications/Publications";
import MyAccount from "./components/pages/MyAccount/MyAccount";
import Subscribers from "./components/pages/Subscribers/Subscribers";
import Login from "./components/pages/Login/Login";

import {
    addLoggedInUser
} from "./features/loggedInUser/loggedInUserSlice";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";


function App() {

    const [isActivePreloader, setIsActivePreloader] = React.useState(true);
    const myUserId = useSelector((state) => state.loggedInUser.value);

    const dispatch = useDispatch();

    // const data = {
    //     email: '10@m.ru',
    //     password: '123456789'
    // }

    const history = useHistory();

    const handleLogin = async ({email, password}) => {
        const userId = await api.login({email, password})
        dispatch(addLoggedInUser(userId));
        history.push(`/${userId}`);
    }


    const checkToken = () => {
        if(myUserId !== '') {
            history.push(`/${myUserId}`);
    } else {
            history.push('/signin');
        }
    }

    React.useEffect(() => {
        checkToken();
    }, [])

    return (
        <Switch>
            <Route path='/signin'>
                <Login
                    handleLogin={handleLogin}
                />
            </Route>

            <ProtectedRoute
                path='/publications'
                component={Publications}
            />

            <ProtectedRoute
                path='/subscribers'
                component={Subscribers}
            />

            <ProtectedRoute exact path='/:id'
                            component={MyAccount}
                            setIsActivePreloader={setIsActivePreloader}
                            isActivePreloader={isActivePreloader}
            />
        </Switch>
    );
}

export default App;
