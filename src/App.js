import React from "react";
import {Route, Switch} from "react-router-dom";

import './App.css';
import * as api from './utils/api'
import Publications from "./components/pages/Publications/Publications";
import MyAccount from "./components/pages/MyAccount/MyAccount";
import Subscribers from "./components/pages/Subscribers/Subscribers";


function App() {

    const [userId, setUserId] = React.useState('');

    const data = {
        email: '10@m.ru',
        password: '123456789'
    }

    const handleLogin = async ({email, password}) => {
        const userId = await api.login({email, password})
        localStorage.setItem('userId', userId)
        setUserId(userId);
    }


    React.useEffect(() => {
        handleLogin(data);
    }, [])

    return (
        <Switch>
            <Route exact path='/'>
                <MyAccount userId={userId}/>
            </Route>
            <Route path='/publications'>
                <Publications/>
            </Route>
            <Route path='/subscribers'>
                <Subscribers
                    userId={userId}
                />
            </Route>
        </Switch>

    );
}

export default App;
