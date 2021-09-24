import React from "react";
import PublicationsItem from "./PublicationsItem/PublicationsItem";


const Publications = () => {
    return (
        <>
            <section className='publications'>
                <ul className="publications__unordered-list">
                    <PublicationsItem/>
                    <PublicationsItem/>
                    <PublicationsItem/>
                    <PublicationsItem/>
                    <PublicationsItem/>
                    <PublicationsItem/>
                </ul>
            </section>
        </>
    )
}

export default Publications