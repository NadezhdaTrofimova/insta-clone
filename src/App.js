import React from "react";
import {useDispatch} from 'react-redux'
import {Route, Switch, useHistory} from "react-router-dom";

import './App.css';
import * as api from './utils/api'
import Publications from "./components/pages/Publications/Publications";
import MyAccount from "./components/pages/MyAccount/MyAccount";
import Subscribers from "./components/pages/Subscribers/Subscribers";

import {
    addLoggedInUser
} from "./features/loggedInUser/loggedInUserSlice";

function App() {

    const [isActivePreloader, setIsActivePreloader] = React.useState(true);

    const dispatch = useDispatch();

    const data = {
        email: '10@m.ru',
        password: '123456789'
    }

    const history = useHistory();

    const handleLogin = async ({email, password}) => {
        const userId = await api.login({email, password})
        dispatch(addLoggedInUser(userId));
        history.push(`/${userId}`);
    }


    React.useEffect(() => {
        handleLogin(data);
    }, [])

    return (
        <Switch>

            <Route path='/publications'>
                <Publications/>
            </Route>
            <Route path='/subscribers'>
                <Subscribers/>
            </Route>
            <Route exact path='/:id'>
                <MyAccount
                    setIsActivePreloader={setIsActivePreloader}
                    isActivePreloader={isActivePreloader}
                />
            </Route>
        </Switch>
    );
}

export default App;
