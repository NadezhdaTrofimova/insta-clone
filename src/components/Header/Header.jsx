import './Header.css'

const Header = ({userProfile}) => {
    return (
        <header className='header'>
            <div className='header__content'>
                <p className='header__id-profile'>{userProfile._id}</p>
                <div className='header__button-wrapper'>
                    <button className='header__button header__button-add-card'/>
                    <button className='header__button header__button-menu'/>
                </div>
            </div>
        </header>
    )
}

export default Header