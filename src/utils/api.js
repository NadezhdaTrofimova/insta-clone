import firebase from 'firebase/compat';


const showError = (text) => {
    console.log(text.code);
    console.log(text.message)
}

const login = ({email, password}) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Вы вошли в систему!")
            return userCredential.user.uid
        })
        .catch((error) => {
            showError(error)
        })
}

const getAllCards = (userUid) => {
    return firebase
        .database()
        .ref(`users/${userUid}/cards`)
        .once('value')
        .then(data => data.val())
        .catch((error) => {
            showError(error)
        })
}

const getUserProfile = (userId) => {
    return firebase
        .database()
        .ref(`users/${userId}`)
        .once('value')
        .then(data => data.val())
        .catch((error) => {
            showError(error)
        })
}

export {
    login,
    getAllCards,
    getUserProfile
}