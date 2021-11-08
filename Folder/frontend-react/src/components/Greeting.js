import React from 'react'

const Greeting = (props) => {
    const {name} = props
    return (
        <>
            <h1>Greeting {name}</h1>
            <p>yo-yo what's up</p>
        </>
    )
}
export default Greeting;