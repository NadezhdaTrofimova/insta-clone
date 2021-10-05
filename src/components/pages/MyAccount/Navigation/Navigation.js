import React from 'react';
import {useHistory} from "react-router-dom";
import {persistor} from "../../../../store/store";
import './Navigation.css'
import pathGearIcon from '../../../../images/icon/icon-gear.svg'
import pathArchiveIcon from '../../../../images/icon/icon-archive.svg'
import pathClockIcon from '../../../../images/icon/icon-clock.svg'
import pathQrCodeIcon from '../../../../images/icon/icon-qr-code.svg'
import pathNoticeIcon from '../../../../images/icon/icon-save.svg'
import pathListIcon from '../../../../images/icon/icon-list.svg'
import pathCertificate from '../../../../images/icon/icon-certificate.svg'

import * as api from '../../../../utils/api'



const Navigation = ({isOpenMenuNavigation, handleShowMenu}) => {

    const history = useHistory();

    const handleSignOut = () => {
        persistor.purge();
        api.signOut();
        history.push('/signin')
    }


    return (
        <div className={`navigation ${isOpenMenuNavigation ? 'navigation_active' : ''}`} onClick={handleShowMenu}>
            <nav className={`navigation__menu ${isOpenMenuNavigation ? 'navigation__menu_active' : ''}`}
                 onClick={event => event.stopPropagation()}>
                <ul className="navigation__menu-unordered-list">
                    <li className="navigation__menu-unordered-list-item">
                        <img
                            src={pathGearIcon}
                            alt="Иконка настройки"
                            className="navigation__menu-icon-item"
                        />
                        <a href="#1"
                           className="navigation__menu-link-item">
                            Найстройки
                        </a>
                    </li>
                    <li className="navigation__menu-unordered-list-item">
                        <img
                            src={pathArchiveIcon}
                            alt="Иконка архива"
                            className="navigation__menu-icon-item"
                        />
                        <a href="#2"
                           className="navigation__menu-link-item">
                            Архив
                        </a>
                    </li>
                    <li className="navigation__menu-unordered-list-item">
                        <img
                            src={pathClockIcon}
                            alt="Иконка часов"
                            className="navigation__menu-icon-item"
                        />
                        <a href="#3"
                           className="navigation__menu-link-item">
                            Ваши действия
                        </a>
                    </li>
                    <li className="navigation__menu-unordered-list-item">
                        <img
                            src={pathQrCodeIcon}
                            alt="Иконка QR-кода"
                            className="navigation__menu-icon-item"
                        />
                        <a href="#4"
                           className="navigation__menu-link-item">
                            QR-код
                        </a>
                    </li>
                    <li className="navigation__menu-unordered-list-item">
                        <img
                            src={pathNoticeIcon}
                            alt="Иконка заметок"
                            className="navigation__menu-icon-item"
                        />
                        <a href="#5"
                           className="navigation__menu-link-item">
                            Сохранённые
                        </a>
                    </li>
                    <li className="navigation__menu-unordered-list-item">
                        <img
                            src={pathListIcon}
                            alt="Иконка списка"
                            className="navigation__menu-icon-item"
                        />
                        <a href="#6"
                           className="navigation__menu-link-item">
                            Близкие друзья
                        </a>
                    </li>
                    <li className="navigation__menu-unordered-list-item">
                        <img
                            src={pathCertificate}
                            alt="Иконка сертификата"
                            className="navigation__menu-icon-item"
                        />
                        <a href="#7"
                           className="navigation__menu-link-item">
                            Центр информации о COVID-19
                        </a>
                    </li>
                    <button className="navigation__button"
                            onClick={handleSignOut}>
                        Выйти из аккаунта
                    </button>
                </ul>
            </nav>
        </div>

    );
};

export default Navigation;