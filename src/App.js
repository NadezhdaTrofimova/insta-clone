import React from "react";
import './App.css';
import MyAccount from "./components/pages/MyAccount/MyAccount";
import * as api from './utils/api'
import Publications from "./components/pages/Publications/Publications";



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
        <Publications/>
    );
}

export default App;
