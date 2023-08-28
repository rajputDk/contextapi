import React from 'react'
import { FirstName, LastName } from '../App'

function Contact() {
    return (
        <div>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (

                                    <h1>My Name Is {fname} {lname}</h1>

                                )
                            }}
                        </LastName.Consumer>
                    )

                }}
            </FirstName.Consumer>
        </div>
    )
}

export default Contact