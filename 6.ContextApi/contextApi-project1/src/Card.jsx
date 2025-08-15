import React from 'react'
import { useContext } from 'react'
import { hindik } from './context/Story'

function Card() {
    let st = useContext(hindik)

    return (
        <div>

            <h1> name {st.names}</h1>

            <h2>{st.storyline}
            </h2>
        </div>
    )
}

export default Card