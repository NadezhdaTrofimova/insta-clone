import {useHistory} from "react-router-dom";
import './Header.css'

const Header = ({userProfile}) => {

    const history = useHistory();

    const handleBackOnPage = () => {
        history.goBack();
    }

    return (
        <header className='header'>
            {
                history.location.pathname === '/' &&
                <>
                    <div className='header__content'>
                        <p className='header__id-profile'>{userProfile._id}</p>
                        <div className='header__button-wrapper'>
                            <button className='header__button header__button-add-card'/>
                            <button className='header__button header__button-menu'
                            />
                        </div>
                    </div>
                </>
            }

            {
                history.location.pathname === '/publications' &&
                <>
                    <div className="header__publications-wrapper">
                        <p className='header__publications-id-profile'>{userProfile._id}</p>
                        <h1 className='header__publications-title'>Публикации</h1>
                        <button className='header__publications-button'
                                onClick={handleBackOnPage}/>
                    </div>
                </>
            }
            {
                history.location.pathname === '/subscribers' &&
                <>
                    <div className="header__publications-wrapper">
                        <p className="header__subscribers-title">Подписчики</p>
                        <button
                            className="header__subscribers-button"
                            onClick={handleBackOnPage}/>
                    </div>
                </>
            }
        </header>
    )
}

export default Header