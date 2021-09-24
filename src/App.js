import React from "react";
import './App.css';
import MyAccount from "./components/MyAccount/MyAccount";
import * as api from './api/api'
import PublicationsItem from "./components/Publications/PublicationsItem/PublicationsItem";



function App() {

    const [userId, setUserId] = React.useState("")

    const data = {
        email: '10@m.ru',
        password: '123456789'
    }

    const handleLogin = async ({email, password}) => {
        const userId = await api.login({email, password})
        setUserId(userId);
    }

    console.log(userId)

    React.useEffect(() => {
        handleLogin(data);
    }, [])

    return (
        // <MyAccount userId={userId}/>
        <PublicationsItem/>
    );
}

export default App;
