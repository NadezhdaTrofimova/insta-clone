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

const getAllUsers = () => {
    return firebase
        .database()
        .ref('users')
        .once('value')
        .then(data => data.val())
        .catch((error) => {
            showError(error)
        })
}

const updateNumberOfLikes = (card, userId, currentNumberOfLikes) => {
    return firebase
        .database()
        .ref(`/users/${userId}/cards/${card._id}`)
        .update({
            likes: currentNumberOfLikes,
        })
        .catch((error) => {
            showError(error)
        })
}


export {
    login,
    // getAllCards,
    getUserProfile,
    getAllUsers,
    updateNumberOfLikes,
}