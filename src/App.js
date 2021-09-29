import React from "react";
import {Route, Switch, useHistory} from "react-router-dom";

import './App.css';
import * as api from './utils/api'
import Publications from "./components/pages/Publications/Publications";
import MyAccount from "./components/pages/MyAccount/MyAccount";
import Subscribers from "./components/pages/Subscribers/Subscribers";


function App() {

    const [userId, setUserId] = React.useState('');
    const [isActivePreloader, setIsActivePreloader] = React.useState(true);

    const data = {
        email: '10@m.ru',
        password: '123456789'
    }

    const history = useHistory();

    const handleLogin = async ({email, password}) => {
        const userId = await api.login({email, password})
        // localStorage.setItem('userId', userId)
        history.push(`/${userId}`)
        setUserId(userId);
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
                <Subscribers
                    userId={userId}
                />
            </Route>
            <Route exact path='/:id'>
                <MyAccount
                    userId={userId}
                    setIsActivePreloader={setIsActivePreloader}
                    isActivePreloader={isActivePreloader}/>
            </Route>
        </Switch>

    );
}

export default App;
