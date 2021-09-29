import React from "react";
import { useHistory } from "react-router-dom";

import PublicationsItem from "./PublicationsItem/PublicationsItem";
import Header from "../../../common/Header/Header";
import './Publications.css'


const Publications = () => {

    const history = useHistory();

    return (
        <>
            <Header/>
            <section className='publications'>
                <ul className="publications__unordered-list">
                    {history.location.state.cards.map((item) =>
                        <PublicationsItem
                        key={item._id}
                        card={item}
                        userProfile={history.location.state.userProfile}
                        />
                    )}
                </ul>
            </section>
        </>
    )
}

export default Publications